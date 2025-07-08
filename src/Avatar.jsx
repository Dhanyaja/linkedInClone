import React from "react";

const Avatar = ({ avatar, title, Icon, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center mr-[20px] text-gray-600 cursor-pointer hover:text-black">
      {avatar && (
        <img
          src={avatar}
          alt=""
          className="headerOption__icon h-[20px] rounded-full w-[20px] object-contain"
        />
      )}
      <div className="flex flex-row">
        <h3>{title}</h3>
        {Icon && <Icon className="headerOption__icon" />}
      </div>
    </div>
  );
};

export default Avatar;
