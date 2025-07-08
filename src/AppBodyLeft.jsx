import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import SidebarOptions from "./SidebarOptions";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const AppBodyLeft = () => {

  const user = useSelector(selectUser)

  console.log(user)

  return (
    <div className="flex flex-col gap-2 sticky top-[80px]">
      <div className="profile m-0 border border-gray-300 p-0 rounded-lg bg-white">
        <img
          src="/account-bg.jpg"
          alt=""
          className="m-0 rounded-t-lg object-cover h-[60px] w-full relative"
        />
        <img
          // src="/user.png"
          src={user.photoUrl}
          alt=""
          className="h-[70px] w-[70px] object-contain ml-[20px] absolute transform -translate-y-8 bg-gray-200 rounded-full"
        />
          
        <div className="m-[15px] mt-[45px] overflow-visible flex flex-col gap-1.5">
          <h1 className="text-xl bolder font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
            {user.displayName}
          </h1>
          <p className="text-xs">{user.email}</p>
          <div className="flex items-center border border-dashed border-gray-300 rounded-xs mt-1 bg-[#f4f2ee] mb-[10px] p-[4px] ">
            <AddIcon sx={{ height: "20px" }} />
            <p className="text-xs">Experience</p>
          </div>
        </div>
      </div>
      <div className="connection p-[15px] border border-gray-300 rounded-lg bg-white text-xs">
        <div className="flex flex-row justify-between">
          <p className="font-medium">Connection</p>
          <p className="text-blue-500 font-bold">1</p>
        </div>
        <p className="text-gray-600 font-medium">Grow your network</p>
      </div>
      <div className="premium p-[15px] border border-gray-300 rounded-lg bg-white text-xs flex flex-col gap-1">
        <p className="text-gray-600 font-medium">
          Gain exclusive tools & insights
        </p>
        <div className="flex gap-2 items-center">
          <CheckBoxOutlineBlankIcon
            sx={{
              height: "15px",
              width: "15px",
              color: "#e7a33e",
              backgroundColor: "#e7a33e",
              borderRadius: "2px",
            }}
          />
          <p className="font-medium">Redeem Premium for ₹0</p>
        </div>
      </div>
      <div className="list p-[15px] border border-gray-300 rounded-lg bg-white text-xs flex flex-col gap-1">
        <SidebarOptions Icon={BookmarkIcon} title="Saved items" />
        <SidebarOptions Icon={GroupsIcon} title="Groups" />
        <SidebarOptions Icon={NewspaperIcon} title="Newsletters" />
        <SidebarOptions Icon={DateRangeIcon} title="Events" />
      </div>
    </div>
  );
};

export default AppBodyLeft;
