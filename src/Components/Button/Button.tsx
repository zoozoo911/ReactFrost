import React from "react";
import { useState, useEffect } from "react";
import ButtonProps from "../../Models/ButtonModel";
import "./Button.css";

const Button: React.FC<ButtonProps> = (props) => {
  const { style, label, type, mode, ...events } = props;
  const [customCSS, setCustomCSS] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (mode == "3D") {
      const { backgroundColor, borderColor, color, ...otherStyleKeys } = style;
      setCustomCSS(otherStyleKeys);
    } else setCustomCSS(style);
  }, [props]);

  return React.cloneElement(
    <div
      style={customCSS}
      className={
        mode === "3D"
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
