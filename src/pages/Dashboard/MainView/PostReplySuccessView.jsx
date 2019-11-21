import React from "react";
import { Tooltip } from "antd";
import moment from "moment";
import SingleComment from "./SingleComment";

export default function PostReplySuccessView({ tweet }) {
  const data = {
    author: tweet.user.name,
    avatar: tweet.user.profile_image_url_https,
    content: <p>{tweet.text}</p>,
    datetime: (
      <Tooltip title={moment(tweet.created_at).format("YYYY-MM-DD HH:mm:ss")}>
        <span>{moment(tweet.created_at).fromNow()}</span>
      </Tooltip>
    ),
  };
  return <SingleComment item={data} />;
}
