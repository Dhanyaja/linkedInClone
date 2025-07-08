import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import SidebarOptions from "./SidebarOptions";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AppBodyLeft from "./AppBodyLeft";
import AppBodyCenter from "./AppBodyCenter";
import Widgets from "./Widgets";

const AppBody = () => {
  return (
    <div className="appBody flex w-[80%] mx-auto h-[calc(100vh-55px)] mt-[22px] gap-5 ">
      <div className="appBody__left  w-[calc(20%)] h-full m-0 ">
        <AppBodyLeft />
      </div>
      <div className="appBody__center w-[calc(55%)] h-full">
           <AppBodyCenter />
        </div>
        <div className="appBody__right w-[calc(25%)] h-full">
            <Widgets />
        </div>
    </div>
  );
};

export default AppBody;
