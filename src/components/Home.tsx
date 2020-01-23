import axios from "axios";
import * as React from "react";
import { UserModel } from "../models/UserModel";
export interface IHomeProps {}

export class Home extends React.PureComponent<IHomeProps, {}> {
  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    new UserModel(res.data).$saveAll();
  }

  render() {
    return <h1>HOME</h1>;
  }
}
