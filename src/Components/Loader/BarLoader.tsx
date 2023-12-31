import React, { useEffect, useState } from "react";
import "./BarLoader.css";
import LoaderProps from "../../Models/Loader";

const BarLoader: React.FC<LoaderProps> = ({
  id,
  style,
  mode,
  className,
  completionPercentage,
  ...events
}) => {
  const [position, setPosition] = useState<number>(0);
  return React.cloneElement(
    <div
      id={id}
      className={`BarContainer${
        mode == "dark" ? "Dark" : "Light"
      } ${className}`}
      style={style}
    >
      <div
        className={`LoaderContainer${mode == "dark" ? `Dark` : `Light`}`}
        style={{
          transform: `translateX(calc(${
            completionPercentage < 100 ? completionPercentage : 100
          }% - 100%))`,
        }}
      >
        <div className="StripeContainer"></div>
      </div>
    </div>,
    events
  );
};
export default BarLoader;
