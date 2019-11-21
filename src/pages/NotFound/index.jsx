import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";
import "./index.scss";

export default function NotFound() {
  return (
    <div style={{ marginTop: "8rem" }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
}
