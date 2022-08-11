import { SunspotLoader } from "react-awesome-loaders";
import './Loading.css';
export const Loading = () => {
  return (
    <>
      <SunspotLoader
        className="sunspot-loader"
        gradientColors={["#6366F1", "#E0E7FF"]}
        shadowColor={"#3730A3"}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
    </>
  );
};