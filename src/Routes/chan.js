import http from "../Utilities/http";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "../Components/navBar";
import endpoints from "../Constants/endpoints";
import PostComposer from "../Components/postComposer";
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

  createThread(values) {
    let { match } = this.props;
    let chanId = match.params.chanId;
    let data = {
      chan_id: chanId,
      title: values.content,
    };
    http.put(endpoints.thread.create, data).then((response) => {
      console.log(response.data);
      if (response.data.status === "success") {
        this.setState({ threads: [{ ...data, id: response.data.data[0] }, ...this.state.threads] });
      }
    });
  }

  render() {
    let { match } = this.props;
    let chanId = match.params.chanId;

    return (
      <div>
        <NavBar />
        <PostComposer
          thread={chanId}
          action={this.createThread.bind(this)}
          title="Create a New Thread"
          placeholder="Title of the Thread"
        />
        {this.state.threads.map((thread) => {
          return (
            <div key={thread.id} className="thread-tile">
              <div className="thread-identifier">{"/threads/" + thread.id}</div>
              <Link to={"/thread/" + thread.id}>
                <h2>{thread.title}</h2>
              </Link>
              <div className="thread-created">{"Created at: " + thread.created_at}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChanPage;
