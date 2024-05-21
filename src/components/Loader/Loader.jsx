import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = ({ color }) => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="55"
        width="55"
        color={color}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
