import SwitcherProps from "../../Models/Switcher";
import "./Switcher.css";
import React, { useEffect, useState } from "react";

const Switcher: React.FC<SwitcherProps> = ({
  mode,
  id,
  className,
  style,
  defaultPosition,
  onSwitch,
  ...events
}) => {
  const [switcherThumbPosition, setSwitcherThumbPosition] =
    useState<boolean>(false);
  useEffect(() => {
    if (onSwitch) onSwitch(!switcherThumbPosition);
  }, [switcherThumbPosition]);
  useEffect(() => {
    setSwitcherThumbPosition(defaultPosition);
  }, []);
  return React.cloneElement(
    <div
      style={{
        // background: switcherThumbPosition ? "yellowgreen" : "#ffffffa3",
        boxShadow: switcherThumbPosition
          ? "inset 0px 0px 10px 2px #292929"
          : "inset 0px 0px 10px 0px rgb(0,0,0)",
        ...style,
      }}
      className={`SwitchContainer${
        mode == "dark" ? `Dark` : `Light`
      } ${className}`}
    >
      <div
        className="SwitcherOverlay"
        style={{
          transform: `translateX(${switcherThumbPosition ? "0%" : "-50%"})`,
        }}
      >
        <div
          onClick={() => {
            setSwitcherThumbPosition(!switcherThumbPosition);
          }}
          className="SwitcherThumb"
        ></div>
      </div>
    </div>,
    events
  );
};

export default Switcher;
