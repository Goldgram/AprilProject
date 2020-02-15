import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { PersonFinder } from "./person-finder";
import { Header } from "./header";
import { InviteForm } from "./invite-form";

export const Routes = () => {
  return <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route path="/" exact={true} component={PersonFinder} />
      <Route path="/:personId" component={InviteForm} />
    </React.Fragment>
  </BrowserRouter>;
};
