export interface cardTyping {
  image: string;
  name: string;
  price: string;
  assetStatus: {
    limit: string;
    status: string;
    percentage: string;
  };
  tvlAsset: string[];
}

export enum trendingAssetStatus {
  POSITIVE = "positive",
  NEGATIVE = "negative",
}
