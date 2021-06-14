import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Routes/home";
import RegisterPage from "./Routes/register";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/signup">
        <RegisterPage />
      </Route>
    </Router>
  );
}
export default App;
