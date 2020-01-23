import * as React from 'react';
import { connect } from 'react-redux';
import { UserModel } from '../models/UserModel';
import axios from 'axios';
export interface IHomeProps {
}

export class HomeImpl extends React.PureComponent<IHomeProps, {}> {

    async componentDidMount() {
        const res = await axios.get('https://api.github.com/users')
        new UserModel(res.data).$saveAll();
        const a = UserModel.list()
        console.log('>> a', a);
    }

    render() {
        return <h1>HOME</h1>
    }

}
export function mapStateToProps() {
    return {
    }
};
export const Home = connect<{}, {}, IHomeProps>(mapStateToProps)(HomeImpl)