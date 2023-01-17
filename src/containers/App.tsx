import "./styles.css";
import AssetText from "../components/AssetText";
import Card from "../components/Card";
import { trendingAsset } from "../utils/data";

function App() {
  return (
    <div className="bg-primary text-white h-screen flex sm:items-baseline md:items-center overflow-y-scroll">
      <div className="w-full px-16">
        <AssetText name="trending Assets" />
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {trendingAsset.map((data, i) => (
            <Card
              name={data.name}
              image={data.image}
              price={data.price}
              assetStatus={data.assetStatus}
              tvlAsset={data.tvlAsset}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
