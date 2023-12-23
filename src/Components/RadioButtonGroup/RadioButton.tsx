import RadioButtonProps from "../../Models/RadioButtonModel";
import React, { useEffect, useState } from "react";
import "./Radio.css";

const RadioButton: React.FC<RadioButtonProps> = ({
  style,
  label,
  classname = "RadioUnselected",
  value,
  index,
  onSelect,
  checked,
  ...events
}) => {
  const [isChecked, setChecked] = useState<boolean>(checked);
  return React.cloneElement(
    <div className="RadioButtonContainer">
      <div
        className="RadioButton"
        onClick={() => {
          if (onSelect && typeof index == "number")
            onSelect(label, value, index, true);
        }}
      >
        <div className={classname}></div>
      </div>
      <div
        style={style ? { color: style.color } : {}}
        className="RadioButtonLabel"
      >
        {label}
      </div>
    </div>,
    events
  );
};

export default RadioButton;
