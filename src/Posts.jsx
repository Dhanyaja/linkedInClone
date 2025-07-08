import React, { forwardRef } from "react";
import Avatar from "./Avatar";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import LoopIcon from "@mui/icons-material/Loop";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PostOptions from "./PostOptions";
import { useSelector } from "react-redux";

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {


  return (
    <div ref={ref} className="post bg-white border border-gray-300 rounded-lg">
      <div className="header p-[18px] flex flex-row items-center">
        <img
          // src="/user.png"
          src={photoUrl || "./user.png"}
          alt=""
          className="h-[45px] bg-gray-200 rounded-full"
        />
        <div className="userDetails p-[10px]">
          <div className="flex flex-row items-center gap-1">
            <h2 className="font-medium">{name}</h2>
            <p className="text-[#666666]">•</p>
            <p className="text-xs">3rd+</p>
          </div>
          <p className="overflow-ellipsis overflow-hidden text-[#313131] text-xs">
            {description}
          </p>
        </div>
      </div>
      <div className="body p-[10px] text-sm font-normal">
        <p>
          {message}
        </p>
      </div>
      <hr className="text-gray-300 mx-[20px]"/>
      <div className="flex justify-around ">
        <PostOptions Icon={ThumbUpOffAltIcon} title="Like" />
        <PostOptions Icon={InsertCommentRoundedIcon} title="Comment" />
        <PostOptions Icon={LoopIcon} title="Repost" />
        <PostOptions Icon={SendRoundedIcon} title="Send" />
      </div>
    </div>
  );
});

export default Posts;
