import React, { createElement, useState, Component } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import AddComment from "./AddComment";
import { ConConsumer } from "./PerCon";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PerContentcCss from "./ComponentsCSS/PerContent.module.css";

const StyleDivHover = styled.div`
  &:hover {
    background-color: rgba(110, 110, 110, 0.1);
  }
`;

const onGetInfo = (Id) => {
  const url = "http://localhost:3000/#/detail/?dynamicId=" + Id;
  console.log(url);
};

const Demo = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  const ExampleComment = ({ children }) => (
    <ConConsumer>
      {(forvalue) => {
        // console.log(forvalue);
        // console.log(forvalue.dynamicId);
        const dynamicId = forvalue.dynamicId;
        return (
          <Comment
            actions={actions}
            author={<a>{forvalue.author}</a>}
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={
              <Link
                onClick={() => onGetInfo(dynamicId)}
                to={"/detail/" + dynamicId}
                className={PerContentcCss.contentLink}
              >
                <StyleDivHover>
                  <p>{forvalue.content}</p>
                </StyleDivHover>
              </Link>
            }
            datetime={
              forvalue.createTime
              // <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              //     <span>{moment().fromNow()}</span>
              // </Tooltip>
            }
          >
            {children}
          </Comment>
        );
      }}
    </ConConsumer>
  );

  return <ExampleComment />;
};

export default class PerContent extends Component {
  render() {
    return (
      <>
        <Demo></Demo>
      </>
    );
  }
}
