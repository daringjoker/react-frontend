import "./App.css";
import HomePage from "./Routes/home";
import ChanPage from "./Routes/chan";
import ChansPage from "./Routes/chans";
import LoginPage from "./Routes/login";
import VoidPage from "./Routes/notFound";
import history from "./Utilities/history";
import * as routes from "./Constants/routes";
import RegisterPage from "./Routes/register";
import PrivateRoute from "./Components/privateRoute";
import { Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path={routes.HOME} exact component={HomePage} />
        <PrivateRoute path="/c/:chanId" exact component={ChanPage} />
        <Route path={routes.LOGIN} exact component={LoginPage} />
        <Route path={routes.REGISTER} exact component={RegisterPage} />
        <PrivateRoute path={routes.CHANS} exact component={ChansPage} />
        <Route component={VoidPage} />
      </Switch>
    </Router>
  );
}
export default App;
