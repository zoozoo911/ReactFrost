import { useState, useEffect, useCallback } from "react";
import React from "react";
import "./Slider.css";
import SliderProps from "../../Models/SliderModel";

const Slider: React.FC<SliderProps> = ({
  style,
  min,
  max,
  step,
  mode,
  type,
  onValueUpdate,
  className,
  ...events
}) => {
  const handleUpdate = useCallback((e: any) => {
    if (onValueUpdate) onValueUpdate(e.target.value);
  }, []);
  return React.cloneElement(
    <input
      style={style}
      type="range"
      min={min}
      step={step}
      max={max}
      onChange={(e) => {
        handleUpdate(e);
      }}
      className={
        type == "thin"
          ? "sliderThin" + " " + className
          : mode == "light"
          ? "sliderBroadLight" + " " + className
          : "sliderBroadDark" + " " + className
      }
    />,
    events
  );
};

export default Slider;
