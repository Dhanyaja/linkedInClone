import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article flex p-[10px] cursor-pointer hover:bg-gray-50">
      <div className="widgets__articleLeft text-[#0177b7] mr-[5px]">
        <FiberManualRecordIcon sx={{height: "15px"}} />
      </div>
      <div className="widgets__articleRight flex-1">
        <h4 className="text-[14px]">{heading}</h4>
        <p className="text-[12px] text-gray-500">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets sticky top-[80px] bg-white rounded-md border border-gray-300 h-fit pb-[10px]">
      <div className="widgets__header flex items-center justify-between p-[10px]">
        <h2 className="text-[16px] font-[400]">LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("PAPA React is back", "Top news - 9099 readers")}
      {newsArticle("CoronaVirus: UK updates", "Top news - 886 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 780 readers")}
      {newsArticle("Is REdux too good?", "Code - 134 readers")}
    </div>
  );
};

export default Widgets;
