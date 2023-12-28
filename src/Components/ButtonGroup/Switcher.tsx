import SwitcherProps from "../../Models/Switcher";
import "./Switcher.css";
import React, { useEffect, useState } from "react";

const Switcher: React.FC<SwitcherProps> = ({
  mode,
  id,
  className,
  style,
  onSwitch,
  ...events
}) => {
  const [switcherThumbPosition, setSwitcherThumbPosition] =
    useState<boolean>(false);
  useEffect(() => {
    if (onSwitch) onSwitch(!switcherThumbPosition);
  }, [switcherThumbPosition]);
  return React.cloneElement(
    <div
      style={{
        // background: switcherThumbPosition ? "yellowgreen" : "#ffffffa3",
        boxShadow: switcherThumbPosition
          ? "inset 0px 0px 10px 0px rgb(0,0,0)"
          : "inset 0px 0px 10px 2px #292929",
        ...style,
      }}
      className={`SwitchContainer ${className}`}
    >
      <div
        className="SwitcherOverlay"
        style={{
          transform: `translateX(${switcherThumbPosition ? "-50%" : "0%"})`,
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
