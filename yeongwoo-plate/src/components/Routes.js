import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchStores from "../routes/SearchStores";
import TempPage from "../routes/Temp";

const AppRouter = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={TempPage} />
      <Route
        path="/search/:value"
        render={() => (
          <SearchStores
            onSearchStores={props.onSearchStores}
            stores={props.all.stores}
            isLoading={props.all.isLoading}
            error={props.all.error}
          />
        )}
      />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppRouter;
