import { Component } from "react";
import logoutimg from "./logout.png";
import { Link } from "react-router-dom";
import withAuthPrivilege from "../../HOC/auth";
import endpoints from "../../Constants/endpoints";
class NavBar extends Component {
  getclass(name) {
    let { active } = this.props;
    if (!active) active = "";
    active = active.toLowerCase();
    name = name.toLowerCase();
    if (active === name) return "active";
    else return null;
  }

  render() {
    let { authenticatedUser, logout } = this.props;

    return (
      <nav className="navigation">
        <div className="left-group">
          <Link to="/">
            <h1 className="logo">DARECHAN</h1>
          </Link>
          <div className="links">
            <Link className={this.getclass("home")} to="/">
              Home
            </Link>
            {/* <Link className={this.getclass("chans")} to="/chans">
              Chans
            </Link> */}
            <Link className={this.getclass("random")} to="/random">
              Randoms
            </Link>
          </div>
        </div>
        <div className="profile-control" style={{ backgroundColor: authenticatedUser.key_color }}>
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
