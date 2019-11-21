import React from "react";
import { Spin } from "antd";

export default function Loader() {
  return (
    <div>
      <Spin size="large" className="app-loader"></Spin>
    </div>
  );
}
