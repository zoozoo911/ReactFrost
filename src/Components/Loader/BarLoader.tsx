import React, { useEffect, useState } from "react";
import "./BarLoader.css";
import LoaderProps from "../../Models/Loader";

const BarLoader: React.FC<LoaderProps> = ({
  id,
  style,
  className,
  completionPercentage,
}) => {
  const [position, setPosition] = useState<number>(0);
  return (
    <div id="xyz" className={`BarContainer ${className}`} style={style}>
      <div
        className="LoaderContainer"
        style={{
          transform: `translateX(calc(${
            completionPercentage < 100 ? completionPercentage : 100
          }% - 100%))`,
        }}
      >
        <div className="StripeContainer"></div>
      </div>
    </div>
  );
};
export default BarLoader;
