"use client";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <InfinitySpin width="200" color="#001965" />
    </div>
  );
};

export default Loading;
