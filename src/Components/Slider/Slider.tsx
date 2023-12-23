import { useState, useEffect } from "react";
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
  className,
  ...events
}) => {
  return React.cloneElement(
    <input
      style={style}
      type="range"
      min={min}
      step={step}
      max={max}
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
