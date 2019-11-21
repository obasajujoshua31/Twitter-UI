import React from "react";
import { Comment } from "antd";

export default function SingleComment({ item }) {
  return (
    <Comment
      actions={item.actions || null}
      author={item.author}
      avatar={item.avatar}
      content={item.content}
      datetime={item.datetime}
      className="tweet-comment"
    />
  );
}
