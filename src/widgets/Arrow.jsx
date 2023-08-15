import React from "react";
import { arrowData } from "../data";

export default function Arrow({ clickArrow }) {
  return (
    <>
      {arrowData.map((data) => (
        <span
          key={data.id}
          className={`absolute ${
            data.id === 1 ? "left-0" : "right-0"
          } flex items-center justify-center w-20 h-20 text-5xl text-center rounded-full top-1/2 bg-bgColor cursor-pointer`}
          onClick={() => clickArrow(data.arrowName)}
        >
          {data.content}
        </span>
      ))}
    </>
  );
}
