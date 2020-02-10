import axios from "axios";
import * as React from "react";
import { UserModel } from "../models/UserModel";
import { connect } from "react-redux";
export interface IHomeProps {
  users: UserModel[];
}

class HomeImpl extends React.Component<IHomeProps, {}> {
  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    new UserModel(res.data).$saveAll();
  }

  render() {
    return this.props.users.map(userData => (
      <div key={userData.props.id}>{userData.props.login}</div>
    ));
  }
}

const mapStateToProps = () => ({ users: UserModel.list() });

export const Home = connect(mapStateToProps)(HomeImpl);
