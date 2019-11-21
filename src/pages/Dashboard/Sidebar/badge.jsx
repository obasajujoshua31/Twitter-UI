import React from "react";
import moment from "moment";
import { Tooltip } from "antd";

export default function SidebarBadge({ date }) {
  return (
    <div className="sidebar-badge">
      <Tooltip title={moment(date).format("YYYY-MM-DD HH:mm:ss")}>
        <span>{moment(date).fromNow()}</span>
      </Tooltip>
    </div>
  );
}
