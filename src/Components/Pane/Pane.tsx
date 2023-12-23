import PaneProps from "../../Models/PaneModel";
import React, { Component } from "react";
import "../Dialog/Dialog.css";

const Pane: React.FC<PaneProps> = ({
  id,
  mode,
  style,
  children,
  ...events
}) => {
  const comps = ["Pane", "RadioGroup", "Slider", "Button"];
  return React.cloneElement(
    <div
      id={id}
      style={style}
      className={mode == "dark" ? "DialogBoxDark" : "DialogBoxLight"}
    >
      {React.Children.map(children, (component, index) => {
        console.log(component.type.name);
        if (comps.indexOf(component.type.name))
          return React.cloneElement(component, { mode: mode });
        else return { component };
      })}
    </div>,
    events
  );
};

export default Pane;