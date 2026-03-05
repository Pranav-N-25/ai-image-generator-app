import React from "react";

const Button = ({ value, setValue }) => {
  {
    // console.log(value);
  }
  return (
    <div
      className=" /hover:bg-gradient-to-bl /hover:from-red-500 /hover:to-yellow-500 bg-gradient-to-tr from-red-500 to-yellow-500 bg-red-600 flex justify-center items-center mx-8 my-8 cursor-pointer px-3 py-2 text-white rounded-2xl duration-500 hover:bg-red-800 shadow-red-300 font-bold text-lg w-29"
      onClick={() => setValue(!value)}
    >
      Button
    </div>
  );
};

export default Button;
