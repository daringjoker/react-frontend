import "./home.css";
import React, { Component } from "react";
import NavBar from "../Components/navBar";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addChans, deleteChan } from "../Actions/Data/chans";
import http from "../Utilities/http";
import endpoints from "../Constants/endpoints";

class ChanPage extends Component {
  state = {
    threads: [],
  };
  componentDidMount = () => {
    let { match } = this.props;
    let chanIdentifier = match.params.chanId;
    http.get(endpoints.chans.getThreads.replace(":chanId", chanIdentifier)).then((resp) => {
      let data = resp.data.data;
      this.setState({ threads: data });
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        {this.state.threads.map((thread) => {
          return (
            <div key={thread.id} className="thread-tile">
              <Link to={"/threads/" + thread.id}>
                <h2>{thread.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { chanList: state.data.chans };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addChans, deleteChan }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ChanPage);
