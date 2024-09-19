import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const page = () => {
  return (
    <div>
      <SpeedInsights></SpeedInsights>
    </div>
  );
};

export default page;
