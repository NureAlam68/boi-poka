import React from "react";
import ErrorImg from "../../assets/error.jpg";

const ErrorPage = () => {
  return (
    <div className="h-[500px] w-[500px] mx-auto mt-[200px]">
      <div>
        <img src={ErrorImg} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
