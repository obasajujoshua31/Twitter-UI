import React from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
import classnames from "classnames";
import SidebarBadge from "./badge";

const { Meta } = Card;

export default function TweetCard({ tweet, handleClick }) {
  const cardCard = classnames({
    "tweet-card": true,
    active: tweet.isActive,
  });

  return (
    <Link to="#">
      <div className="tweet-card-wrapper" onClick={handleClick}>
        <Card className={cardCard}>
          <Meta
            avatar={<Avatar src={tweet.user.profile_image_url_https} />}
            style={{ color: "white" }}
            title={tweet.text}
          />
        </Card>
        <SidebarBadge date={tweet.created_at} />
      </div>
    </Link>
  );
}
