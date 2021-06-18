import { Component } from "react";
import { Link } from "react-router-dom";
import endpoints from "../../Constants/endpoints";

class PostTile extends Component {
  render() {
    let { post, remove, extraInfo } = this.props;
    let postAuthor = post.author;
    let authorized = post.editable;

    return (
      <div className="post-tile">
        {extraInfo && (
          <div className="extraInfo">
            <div className="chan-id">
              In Chan: <Link to={"/c/" + post.chan.identifier}>{"/c/" + post.chan.identifier}</Link>
            </div>
            <div className="chan-id">
              In thread: <Link to={"/thread/" + post.thread.id}>{"/thread/" + post.thread.id}</Link>
            </div>
          </div>
        )}
        <div className="author-wrapper">
          <div className="author-picture">
            <img src={endpoints.baseUrl + postAuthor.profile_picture} alt="user profile" />
          </div>
          <div className="author-detail">
            <h4 className="author-name">
              <div className="author-first-name">{postAuthor.first_name}</div>
              <div className="author-last-name">{postAuthor.last_name}</div>
            </h4>
            <small className="author-username">@{postAuthor.username}</small>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-text">{post.content}</div>
        </div>
        <div className="action-container">
          <button className="like-btn actn-btn">LIKE</button>
          <button className="reply-btn actn-btn">REPLY</button>
          <button className="dislike-btn actn-btn">DISLIKE</button>
          {authorized && (
            <button className="delete-btn actn-btn" onClick={remove}>
              Delete
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default PostTile;
