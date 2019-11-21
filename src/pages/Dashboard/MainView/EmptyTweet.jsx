import React from "react";
import { Icon, Result } from "antd";

export default function EmptyTweet() {
  return (
    <div className="mainview-emptytweet">
      <Result
        icon={<Icon type="smile" theme="twoTone" />}
        title="Great, start replying to tweets!"
      />
    </div>
  );
}
