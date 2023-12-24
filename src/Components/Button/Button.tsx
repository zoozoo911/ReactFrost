import React from "react";
import { useState, useEffect } from "react";
import ButtonProps from "../../Models/ButtonModel";
import "./Button.css";

const Button: React.FC<ButtonProps> = (props) => {
  const { style = {}, label, type, design, ...events } = props;
  const [customCSS, setCustomCSS] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (design == "glossy") {
      const { backgroundColor, borderColor, color, ...otherStyleKeys } = style;
      setCustomCSS(otherStyleKeys);
    } else setCustomCSS(style);
  }, [props]);

  return React.cloneElement(
    <div
      style={customCSS}
      className={
        design === "glossy"
          ? type === "normal"
            ? `ButtonBlue`
            : `ButtonRed`
          : "FlatButton"
      }
    >
      {props.label}
    </div>,
    events
  );
};

export default Button;
