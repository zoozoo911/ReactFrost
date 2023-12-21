import { useState, useEffect } from "react";
import React from "react";
import "./Slider.css";
import SliderProps from "../../Models/SliderModel";

const Slider: React.FC<SliderProps> = (props) => {
  const { style, min, max, step, type, ...events } = props;
  const [externalCSS, setExternalCSS] = useState<React.CSSProperties>({});

  useEffect(() => {
    setExternalCSS(style);
  }, [props]);

  return React.cloneElement(
    <div>
      <input
        style={externalCSS}
        type="range"
        min={min}
        step={step}
        max={max}
        className={type == "thin" ? "sliderThin" : "slider"}
      />
    </div>,
    events
  );
};

export default Slider;
