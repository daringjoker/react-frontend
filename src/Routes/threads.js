import http from "../Utilities/http";
import { connect } from "react-redux";
import React, { Component } from "react";
import NavBar from "../Components/navBar";
import { bindActionCreators } from "redux";
import PostTile from "../Components/postTile";
import endpoints from "../Constants/endpoints";
import PostComposer from "../Components/postComposer";
import { addChans, deleteChan } from "../Actions/Data/chans";

class ChanPage extends Component {
  state = { posts: [] };

  componentDidMount = () => {
    let { match } = this.props;
    let threadId = match.params.threadId;
    http.get(endpoints.thread.getPosts.replace(":threadId", threadId)).then((resp) => {
      let data = resp.data.data;
      this.setState({ posts: data });
    });
  };

  upToDate = () => {
    let { match } = this.props;
    let threadId = match.params.threadId;
    http.get(endpoints.thread.getPosts.replace(":threadId", threadId)).then((resp) => {
      let data = resp.data.data;
      this.setState({ posts: data });
    });
  };

  createPost(values) {
    let { match } = this.props;
    let threadId = match.params.threadId;
    let data = {
      thread_id: threadId,
      ...values,
      with_media: false,
      parent_post: 0,
      media_link: "",
      media_type: "image",
      chan_id: 0,
    };
    http.put(endpoints.posts.create, data).then((response) => {
      if (response.data.status === "success") {
        this.upToDate();
      }
    });
  }

  removePost(postId) {
    http.delete(endpoints.posts.remove.replace(":postId", postId)).then((resp) => {
      if (resp.data.status === "success") this.upToDate();
    });
  }

  render() {
    let { match } = this.props;
    let threadId = match.params.threadId;

    return (
      <div>
        <NavBar active="chans" />
        <PostComposer
          thread={threadId}
          action={this.createPost.bind(this)}
          title="Create a New Post"
          placeholder="Type your Content Here!"
        />
        {this.state.posts.map((post) => (
          <PostTile post={post} remove={this.removePost.bind(this, post.id)} />
        ))}
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
