import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleTweet } from "../../../actions/actions";
import SingleTweetView from "./SingleTweetView";
import "./style.scss";
import Loader from "../../../components/Loader";
import EmptyTweet from "./EmptyTweet";

class DashboardMainView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      this.props.getSingleTweet(id);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getSingleTweet(this.props.match.params.id);
    }
  }

  renderPage = props => {
    const {
      match: {
        params: { id },
      },
      singleTweet,
    } = props;
    if ((id && !singleTweet) || this.props.isLoading) {
      return (
        <div className="mainview-loader">
          <Loader />
        </div>
      );
    }

    if (!id) {
      return <EmptyTweet />;
    }

    return <SingleTweetView tweet={singleTweet} />;
  };

  render() {
    return (
      <div className="dashboard-mainview">{this.renderPage(this.props)}</div>
    );
  }
}

const mapStateToProps = store => ({
  tweets: store.tweets,
  singleTweet: store.tweet,
  isLoading: store.isLoadingSingle,
});

export default connect(mapStateToProps, { getSingleTweet })(
  withRouter(DashboardMainView)
);
