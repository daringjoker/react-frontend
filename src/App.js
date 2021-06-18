import ChanPage from "./Routes/chan";
import ChansPage from "./Routes/home";
import LoginPage from "./Routes/login";
import RandomPage from "./Routes/random";
import VoidPage from "./Routes/notFound";
import ThreadPage from "./Routes/threads";
import history from "./Utilities/history";
import * as routes from "./Constants/routes";
import RegisterPage from "./Routes/register";
import PrivateRoute from "./Components/privateRoute";
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path={routes.HOME} exact component={ChansPage} />
        <PrivateRoute path={"/random"} exact component={RandomPage} />
        <PrivateRoute path="/c/:chanId" exact component={ChanPage} />
        <PrivateRoute path="/thread/:threadId" exact component={ThreadPage} />
        <PrivateRoute path={routes.CHANS} exact component={ChansPage} />
        <Route path={routes.LOGIN} exact component={LoginPage} />
        <Route path={routes.SIGNUP} exact component={RegisterPage} />
        <Route component={VoidPage} />
      </Switch>
    </Router>
  );
}
export default App;
