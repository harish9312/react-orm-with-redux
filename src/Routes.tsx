import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import { Docs } from "./components/docs";
import { Home } from "./components/Home";

const WrappedComponent = (Component: any) => {
  return class Wrapper extends React.Component {
    render() {
      return <Component />;
    }
  };
};

// const NotFound = () => <h1>404 Not Found</h1>;

export const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <React.Fragment>
          <Route exact path="/" component={WrappedComponent(Home)} />
          <Route exact path="/lib/docs" component={WrappedComponent(Docs)} />
          {/* <Route exact component={NotFound} /> */}
        </React.Fragment>
      </Switch>
    </HashRouter>
  );
};
