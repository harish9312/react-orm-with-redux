import * as React from "react";
import { connect } from "react-redux";

export interface IAsyncState {
  isLoading?: boolean;
  hasError?: boolean;
}

interface IAsyncStoreProps {
  loadingState?: IAsyncState;
}

interface IASyncProps extends IAsyncStoreProps {
  promise: (...args: any[]) => any;
  identifier?: string;
  content: JSX.Element | JSX.Element[] | string;
  error: JSX.Element | JSX.Element[] | string;
  loader: JSX.Element | JSX.Element[] | string;
  initialState?: IAsyncState;
}

export class Async extends React.PureComponent<IASyncProps, {}> {
  state = {
    isLoading: true,
    hasError: false,
  };

  async componentDidMount() {
    try {
      await this.props.promise();
      this.setState({
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  }

  render() {
    const {
      props: { content, error, loader },
    } = this;
    const { isLoading, hasError } = this.state;
    if (isLoading && loader) {
      return loader;
    }
    if (!isLoading && !hasError) {
      return content;
    }
    if (hasError && error) {
      return error;
    }
  }
}
