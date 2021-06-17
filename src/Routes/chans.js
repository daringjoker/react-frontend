import "./home.css";
import http from "../Utilities/http";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "../Components/navBar";
import { bindActionCreators } from "redux";
import endpoints from "../Constants/endpoints";
import { addChans, deleteChan } from "../Actions/Data/chans";

class ChanPage extends Component {
  componentDidMount = () => {
    let { addChans, chanList } = this.props;
    http.get(endpoints.chans.getAll).then((allChans) => {
      allChans = allChans.data.data;
      addChans(allChans);
    });
  };
  render() {
    let { chanList } = this.props;
    let chanIdentifiers = Object.keys(chanList);
    return (
      <div>
        <NavBar active="chans" />
        {chanIdentifiers.map((identifier) => {
          let chan = chanList[identifier];
          return (
            <div key={chan.identifier} className="chan-tile" style={{ backgroundColor: chan.color }}>
              <div class="chan-info">
                <Link to={"/c/" + chan.identifier}>
                  <div className="chan-title">
                    <h2>{chan.name}</h2>
                    <small>c/{chan.identifier}</small>
                  </div>
                </Link>
                <p className="description">{chan.description}</p>
              </div>
              <div className="chan-stats">Stats coming Soon!</div>
              <div className="chan-actions">
                <button>Join Chan</button>
              </div>
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
