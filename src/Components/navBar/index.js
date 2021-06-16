import { Component } from "react";
import { Link } from "react-router-dom";
import endpoints from "../../Constants/endpoints";
import withAuthPrivilege from "../../HOC/auth";
import logoutimg from "./logout.png";
import "./navbar.css";
class NavBar extends Component {
  render() {
    let { authenticatedUser, logout } = this.props;
    console.log(authenticatedUser);
    return (
      <nav className="navigation">
        <div className="left-group">
          <Link to="/">
            <h1 className="logo">DARECHAN</h1>
          </Link>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/chans">Chans</Link>
            <Link to="/random">Randoms</Link>
          </div>
        </div>
        <div
          className="profile-control"
          style={{ backgroundColor: authenticatedUser.key_color }}
        >
          <img
            src={endpoints.baseUrl + authenticatedUser.profile_picture}
            alt="Profile pic"
            className="profile-image"
          />
          <div className="profile-summary">
            <div className="full-name">
              {authenticatedUser.first_name} {authenticatedUser.last_name}
            </div>
            <small className="username">{authenticatedUser.username}</small>
          </div>
          <button className="logout" onClick={logout}>
            <img src={logoutimg} alt="logout" title="logout" />
          </button>
        </div>
      </nav>
    );
  }
}

export default withAuthPrivilege(NavBar);
