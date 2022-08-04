import React from "react";
import { HashRouter, Route, Routes as RRoutes } from "react-router-dom";
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
      <RRoutes>
        <Route path="/" element={<Home />} />
      </RRoutes>
    </HashRouter>
  );
};
