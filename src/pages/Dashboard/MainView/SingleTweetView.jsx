import React, { Component } from "react";
import moment from "moment";
import { Tooltip, notification, Icon } from "antd";
import SingleComment from "./SingleComment";
import PostReplyModal from "./PostReplyModal";
import { connect } from "react-redux";
import { replyTweet } from "../../../actions/actions";
import PostReplySuccessView from "./PostReplySuccessView";
import Loader from "../../../components/Loader";

class SingleTweetView extends Component {
  state = {
    isVisible: false,
    value: "",
  };

  openModal = () => {
    this.setState({
      isVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      isVisible: false,
    });
  };

  submitReply = () => {
    this.setState({
      isVisible: false,
      value: "",
    });
    const { replyTweet, tweet } = this.props;
    replyTweet(
      {
        reply: this.state.value,
        status_id: tweet.id_str,
        author_id: tweet.user.screen_name,
      },
      this.openNotification
    );
  };

  openNotification = () => {
    notification.open({
      message: "Tweet",
      description: "You successfully replied to the tweet",
      icon: <Icon type="smile" style={{ color: "#108ee9" }} />,
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const {
      tweet: {
        created_at,
        text,
        user: { name, profile_image_url_https },
      },
    } = this.props;

    const { isVisible } = this.state;
    const data = {
      actions: [
        <span key="comment-list-reply-to-0" onClick={this.openModal}>
          Reply tweet
        </span>,
      ],
      author: name,
      avatar: profile_image_url_https,
      content: <p>{text}</p>,
      datetime: (
        <Tooltip title={moment(created_at).format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(created_at).fromNow()}</span>
        </Tooltip>
      ),
    };
    return (
      <div style={{ width: "100%" }}>
        <SingleComment item={data} />
        {isVisible && (
          <PostReplyModal
            handleCancel={this.closeModal}
            handleOk={this.submitReply}
            visible={isVisible}
            tweet={this.props.tweet}
            value={this.state.value}
            handleChange={this.handleChange}
          />
        )}

        {this.props.isLoadingReply && (
          <div style={{ marginTop: "2rem" }}>
            <Loader />
          </div>
        )}
        {this.props.replyTweetStatus &&
          this.props.replyiedTweet.map(tweet => (
            <PostReplySuccessView tweet={tweet} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  replyTweetStatus: store.replyTweetStatus,
  isLoadingReply: store.isLoadingReply,
  replyiedTweet: store.replyiedTweet,
});

export default connect(mapStateToProps, { replyTweet })(SingleTweetView);
