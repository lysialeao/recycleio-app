import { useContext } from "react";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";

import { UserContext } from "./context/userContext";

import { Profile } from "./views/Profile";
import { Register } from "./views/Register";
import { Login } from "./views/Login/index";
import { LandingPage } from "./views/LandingPage";
import { WasteManager } from "./views/WasteManager";
import { CollectionManeger } from "./views/CollectionManager";
import { ScheduleCollection } from "./views/ScheduleCollection";
import { FindCollectionPoint } from "./views/FindCollectionPoint";
import { Reports } from "./views/Reports";

export const Routes = () => {
  const { user } = useContext(UserContext);

  const Private = ({ Item }) => {
    const sigend = user?.login || false;

    return sigend > 0 ? <Item /> : <Login />;
  };

  return (
    <BrowserRouter>
      <Router>
        <Route element={<LandingPage />} path={"/"} exact />
        <Route element={<Login />} path={"/login"} exact />
        <Route
          element={<FindCollectionPoint />}
          path="/find-collection-point"
          exact
        />
        <Route
          element={<ScheduleCollection />}
          path="/collection-point/:id"
          exact
        />
        <Route element={<Private Item={Profile} />} path={"/profile"} exact />
        <Route
          element={<Private Item={WasteManager} />}
          path={"/waste-manager"}
          exact
        />
        <Route
          element={<Private Item={CollectionManeger} />}
          path={"/collection-manager"}
          exact
        />
        <Route element={<Private Item={Reports} />} path={"/reports"} exact />
        <Route element={<Register />} path="/register" exact />
      </Router>
    </BrowserRouter>
  );
};
