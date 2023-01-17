import React, { FC } from "react";
import "./styles.css";
import { cardTyping, trendingAssetStatus } from "../../types/card";

const Index: FC<cardTyping> = ({
  name,
  assetStatus,
  price,
  image,
  tvlAsset,
}) => {
  return (
    <div className="card-container max-w-sm rounded-lg overflow-hidden flex items-center flex-col">
      <div className="card-icon">
        <div className="card-icon-container rounded-full">
          <img
            src={require(`../../assets/images/${image}`)}
            alt=""
            className="p-5"
          />
        </div>
      </div>
      <div className="card-content flex w-full items-center flex-col">
        <p className="text-sm opacity-90 text-secondary pb-1">{name}</p>
        <div className="bg-primary flex justify-center relative rounded-xl mx-4 mb-2 p-0.5 w-11/12">
          <p className="text-sm">{assetStatus.limit}</p>
          <span
            className={`${
              assetStatus.status === trendingAssetStatus.POSITIVE
                ? "text-tertiarySuccess"
                : "text-tertiaryDanger"
            } absolute right-0 pr-4 text-sm`}
          >
            {assetStatus.percentage}
          </span>
        </div>
        <p className="text-sm opacity-90 text-secondary pb-1">Price</p>
        <div className="bg-primary flex justify-center relative rounded-xl mx-4 mb-2 p-0.5 w-11/12">
          <p className="text-sm">{price}</p>
        </div>
        <p className="text-sm opacity-90 text-secondary pb-1">TVL</p>
        <div className="px-2 pt-1 bg-primary rounded-xl">
          {tvlAsset.map((item, i) => (
            <span className="inline-block px-2 py-1" key={i}>
              <img
                src={require(`../../assets/images/${item}`)}
                alt=""
                className="h-[18px] w-[18px]"
              />
            </span>
          ))}
        </div>
        <p className="text-sm opacity-90 text-secondary pb-1">Popular pairs</p>
      </div>
    </div>
  );
};

export default Index;
