import "./Dialog.css";
import Button from "../Button/Button";
import DialogProps from "../../Models/DialogModel";
import { useEffect, useState } from "react";
import React from "react";

const Dialog: React.FC<DialogProps> = (props) => {
  const { style, title, mode, body, buttons, ...events } = props;
  const [externalCSS, setExternalCSS] = useState<React.CSSProperties>({});

  useEffect(() => {
    setExternalCSS(style);
  }, [props]);

  return React.cloneElement(
    <div
      style={externalCSS}
      className={mode == "dark" ? "DialogBoxDark" : "DialogBoxLight"}
    >
      <h1 className={mode == "dark" ? "TitleDark" : "TitleLight"}>{title}</h1>
      <h2 className={mode == "dark" ? "BodyDark" : "BodyLight"}>{body}</h2>
      <div className="ButtonContainer">
        {buttons.map((button, index) => {
          return <Button {...button} />;
        })}
      </div>
    </div>,
    events
  );
};

export default Dialog;
