import axios from "axios";
import * as React from "react";
import { UserModel } from "../models/UserModel";
import { ProjectModel } from "../models/ProjectModel";
import { connect } from "react-redux";
import { Async } from "./Async";
export interface IHomeProps {
  users: UserModel[];
}

class HomeImpl extends React.Component<IHomeProps, {}> {
  promise = async () => {
    const res = await axios.get("https://api.github.com/users");
    console.log(">> res", res);
    new UserModel(res.data).$saveAll();
    // new UserModel(res.data[0]).$save();
    new ProjectModel({
      name: "PRO",
    }).$save();
  };
  render() {
    const user1 = UserModel.get(`1`);
    console.log(">> user1", user1?.props?.name);
    return (
      <Async
        identifier="User"
        promise={this.promise}
        content={<div>{this.props.users.map((x) => x.props.login)}</div>}
        loader={<h1>Loading...</h1>}
        error={<h2>Error</h2>}
      />
    );
  }
}

const mapStateToProps = () => ({ users: UserModel.list() });

export const Home = connect(mapStateToProps)(HomeImpl);
