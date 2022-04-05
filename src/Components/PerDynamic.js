import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import PerContent from "./PerContent";
import axios from "axios";
import { useEffect, useState } from "react";

const { Meta } = Card;

const url = window.location.toString();
const everUrl = url.split("/");
const dynamicId = url.includes("detail") ? everUrl[everUrl.length - 1] : "";
// console.log(dynamicId);
if (dynamicId) {
  var ajaxURL = "http://192.168.2.110:8000/api/dynamics/" + dynamicId + "/";
}
console.log(ajaxURL);

let dynamicInfo = {};

axios
  .get(ajaxURL)
  .then((res) => {
    // console.log(res.data);
    dynamicInfo.author = res.data.user.username;
    dynamicInfo.content = res.data.content;
    dynamicInfo.likesNumber = res.data.likes_count;
    dynamicInfo.createTime = res.data.created_at;
    // console.log(author, content, likesNumber, createTime);
    dynamicInfo = {
      author: res.data.user.username,
      content: res.data.content,
      likesNumber: res.data.likes_count,
      createTime: res.data.created_at,
    };
  })
  .catch((err) => {
    console.log(err);
  });

console.log(dynamicInfo);

export default function PerDynamic() {
  console.log(dynamicInfo.content);
  return (
    <>
      <Card
        style={{ width: "100%" }}
        hoverable="true"
        actions={
          [
            // <SettingOutlined key="setting" />,
            // <EditOutlined key="edit" />,
            // <EllipsisOutlined key="ellipsis" />,
          ]
        }
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={dynamicInfo.author}
          description={dynamicInfo.content}
        />
      </Card>
    </>
  );
}
