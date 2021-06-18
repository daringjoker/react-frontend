import http from "../Utilities/http";
import React, { Component } from "react";
import NavBar from "../Components/navBar";
import PostTile from "../Components/postTile";
import endpoints from "../Constants/endpoints";

class RandomPage extends Component {
  state = { posts: [] };

  componentDidMount = () => {
    http.get(endpoints.posts.getAll).then((resp) => {
      let data = resp.data.data;
      this.setState({ posts: data });
    });
  };

  upToDate = () => {
    http.get(endpoints.posts.getAll).then((resp) => {
      let data = resp.data.data;
      this.setState({ posts: data });
    });
  };

  removePost(postId) {
    http.delete(endpoints.posts.remove.replace(":postId", postId)).then((resp) => {
      if (resp.data.status === "success") this.upToDate();
    });
  }

  render() {
    return (
      <div>
        <NavBar active="random" />
        {this.state.posts.map((post) => (
          <PostTile post={post} remove={this.removePost.bind(this, post.id)} extraInfo />
        ))}
      </div>
    );
  }
}

export default RandomPage;
