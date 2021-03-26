import React from "react";
import Header from "../Components/Header/Header";
import { Route } from "react-router-dom";

export default function Layout({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <CustomLayout>{Component && <Component {...props} />}</CustomLayout>
      )}
    />
  );
}
function CustomLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container-fluid col-md-4 col-sm-12">{children}</div>
    </div>
  );
}
