import React from "react";
import { listingAsset } from "../../types/asset";
import activityIcon from "../../assets/icons/activity.svg";

const Index = (props: listingAsset) => {
  return (
    <div className="flex my-20 md:mt-96 md:mb-7 md:py-12 lg:mb-30 lg:mt-0">
      <img src={activityIcon} alt="" className="pr-3" />
      <h4 className="text-secondaryBlue opacity-95 text-base capitalize">
        {props.name}
      </h4>
    </div>
  );
};

export default Index;
