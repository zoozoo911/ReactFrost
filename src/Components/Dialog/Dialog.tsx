import "./Dialog.css";
import Button from "../Button/Button";
import DialogProps from "../../Models/DialogModel";
import { useEffect, useState } from "react";
import React from "react";

const Dialog: React.FC<DialogProps> = ({
  style,
  title,
  mode,
  body,
  buttons,
  className,
  ...events
}) => {
  return React.cloneElement(
    <div
      style={style}
      className={
        mode == "dark"
          ? "DialogBoxDark" + " " + className
          : "DialogBoxLight" + " " + className
      }
    >
      <h1 className={mode == "dark" ? "TitleDark" : "TitleLight"}>{title}</h1>
      <h2 className={mode == "dark" ? "BodyDark" : "BodyLight"}>{body}</h2>
      <div className="ButtonContainer">
        {buttons.map((button, index) => {
          return <Button key={index} {...button} />;
        })}
      </div>
    </div>,
    events
  );
};

export default Dialog;
