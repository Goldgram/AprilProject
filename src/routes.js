import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { GroupFinder } from "./group-finder";
import { Header } from "./header";
import { InviteForm } from "./invite-form";

export const Routes = () => {
  return <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route path="/" exact={true} component={GroupFinder} />
      <Route path="/:groupId" component={InviteForm} />
    </React.Fragment>
  </BrowserRouter>;
};
