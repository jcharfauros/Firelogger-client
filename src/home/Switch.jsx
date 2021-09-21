import React, { useEffect, useState } from "react";
import Hotels from "./Hotels";
import Pets from "./Pet";
import InventoryIndex from "../inventory/InventoryIndex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Switch2 = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/petcare" exact component={Pets} />
        <Route exact path="/">
          {" "}
          <InventoryIndex token={props.sessionToken} />
        </Route>
      </Switch>
    </div>
  );
};

export default Switch2;
