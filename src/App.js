import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./Utilities/history";
import HomePage from "./Routes/home";
import LoginPage from "./Routes/login";
import RegisterPage from "./Routes/register";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={RegisterPage} />
      </Switch>
    </Router>
  );
}
export default App;
