"use client";

import React, { ReactNode } from "react";
import Component3 from "./Component3"; //sc

//cc
const Component2 = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      Component2
      {children}
      {/* <Component3 /> */}
    </div>
  );
};

export default Component2;
