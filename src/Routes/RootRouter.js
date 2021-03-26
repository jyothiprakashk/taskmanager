import React from "react";
import CustomLayout from "../Routes/CustomLayout";
import Tasks from "../Pages/Tasks/Tasks";
import Login from "../Pages/Login/Login";
import SingleTask from "../Pages/SingleTask/SingleTask";
import { useSelector } from "react-redux";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#00716e",
      main: "#00716e",
      dark: "#00716e",
    },
    secondary: {
      light: "#00716e",
      main: "#00716e",
      dark: "#00716e",
    },
  },
});
const AuthRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Redirect to={"/"} />
      </Switch>
    </Router>
  );
};

const HomeRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <CustomLayout exact path="/" component={Tasks} />
        <CustomLayout exact path="/tasks" component={SingleTask} />
      </Switch>
    </Router>
  );
};
function RootRouter() {
  const { token } = useSelector(({ reducer }) => reducer);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Router history={history}>
            {token ? <HomeRoutes /> : <AuthRoutes />}
          </Router>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default RootRouter;
