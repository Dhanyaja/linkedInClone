import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header fixed top-0 w-full z-50 bg-white h-[55px] pt-[4px]">
      <div className="w-[80%] flex mx-auto justify-between">
        <div className="header_left flex items-center">
          <img
            src="/linkedin.png"
            alt=""
            className="object-contain h-[35px] mr-[8px]"
          />
          <div className="header_search p-[10px] flex items-center rounded-full text-black border border-gray-600 h-[35px] w-[300px]">
            <SearchIcon className="mr-[10px] text-gray-600" />
            <input
              type="text"
              className="outline-none border-0 bg-none h-[22px] text-[14px]"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="header_right flex items-center gap-2">
          <HeaderOptions title="Home" Icon={HomeIcon} />
          <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
          <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
          <HeaderOptions title="Messaging" Icon={MessageRoundedIcon} />
          <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
          {user ? (
            <Avatar
              onClick={logoutOfApp}
              title="Me"
              avatar={user.photoUrl}
              Icon={ArrowDropDownIcon}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
