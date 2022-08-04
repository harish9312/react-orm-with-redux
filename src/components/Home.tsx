import axios from "axios";
import * as React from "react";
import { connect } from "react-redux";
import { EmployeeModel } from "../models/EmployeeModel";
import { OrganizationModel } from "../models/OrganizationModel";
import { Async } from "./Async";
import AChart from './Charts/AreaChart';
export interface IHomeProps {
  organization?: OrganizationModel[];
}

const months = ['Jan', 'Feb', 'March']

class HomeImpl extends React.Component<IHomeProps, {}> {
  promise = async () => {
    const res = await axios.get("http://localdev.fyndx0.de:3001/organization/organization-employee/04/20/02/09");
    new OrganizationModel(res.data.orgData).$saveAll();
  };



  constructData = () => {
    console.log('>> this.props', this.props);
    return this.props.organization?.map(x => {
      return {
        name: x.props.date_added,
        totalEmployees: x.props.totalEmployee,
      }
    })
  }
  homePage = () => {
    const data = this.constructData()
    return <div>
      <AChart
        data={data}
      />
    </div>
  }

  render() {
    return (
      <Async
        identifier="User"
        promise={this.promise}
        content={this.homePage()}
        loader={<h1>Loading...</h1>}
        error={<h2>Error</h2>}
      />
    );
  }
}

const mapStateToProps = () => ({ organization: OrganizationModel.list() });

export const Home = connect(mapStateToProps)(HomeImpl);
