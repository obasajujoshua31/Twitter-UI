import React from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

export default function TryAgain() {
  return (
    <div className="dashboard-tryagain">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, Server is currently down please try again later!."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
}
