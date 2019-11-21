import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllTweets } from "../../../actions/actions";
import "./index.scss";
import AppLogo from "../../../components/logo";
import TweetCard from "./TweetCard";
import Loader from "../../../components/Loader";

class DashboardSibebar extends Component {
  state = {
    tweets: [],
  };
  componentDidMount() {
    this.props.getAllTweets();
  }

  componentDidUpdate(nextProps) {
    if (this.props.tweets !== nextProps.tweets) {
      this.setState({ tweets: this.props.tweets });
    }
  }

  handleClick = id => {
    this.state.tweets.map(tweet => (tweet.isActive = false));
    const tweet = this.state.tweets.find(tweet => tweet.id_str === id);
    tweet.isActive = true;
    this.props.history.push(`/dashboard/${id}`);
  };

  render() {
    return (
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <Link to="/">
            <AppLogo />
          </Link>
        </div>
        <div className="sidebar-tweets">
          {this.props.isLoading ? (
            <Loader />
          ) : (
            this.state.tweets.map(tweet => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                handleClick={() => this.handleClick(tweet.id_str)}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  tweets: store.tweets,
  isLoading: store.isLoadingAll,
});

export default connect(mapStateToProps, { getAllTweets })(
  withRouter(DashboardSibebar)
);
