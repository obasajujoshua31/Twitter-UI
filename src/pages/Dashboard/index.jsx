import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import DashboardMainView from "./MainView";
import DashboardSibebar from "./Sidebar";
import TryAgain from "./tryagain";

class Dashboard extends Component {
  renderPage = props => {
    return !props.error ? (
      <div style={{ width: "100%" }}>
        <Row>
          <Col span={8}>
            <DashboardSibebar />
          </Col>
          <Col span={16}>
            <DashboardMainView />
          </Col>
        </Row>
      </div>
    ) : (
      <TryAgain />
    );
  };
  render() {
    return this.renderPage(this.props);
  }
}

const mapStateToProps = store => ({
  error: store.error,
});
export default connect(mapStateToProps, null)(Dashboard);
