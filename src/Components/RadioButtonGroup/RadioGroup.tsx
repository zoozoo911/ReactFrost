import React, { useEffect, useState } from "react";
import RadioGroupProps from "../../Models/RadioGroupModel";
import "./Radio.css";
import RadioButton from "./RadioButton";

const RadioGroup: React.FC<RadioGroupProps> = ({
  id,
  children,
  onInteracted,
  mode,
  style,
  ...events
}) => {
  const [radioStates, setRadioStates] = useState<boolean[]>(
    Array.from({ length: children.length }, (_, i) => false)
  );
  const handleSelected = (
    label: string,
    value: any,
    key: number,
    checked: boolean
  ): void => {
    setRadioStates(
      Array.from({ length: children.length }, (_, i) =>
        i == key ? checked : false
      )
    );
    if (onInteracted) onInteracted(value, key, label);
  };
  return React.cloneElement(
    <div id={id} style={style} className="RadioGroup">
      {React.Children.map(children, (element, index) => {
        return (
          <RadioButton
            style={style.color ? { color: style.color } : {}}
            key={index}
            checked={element.props.checked}
            index={index}
            value={element.props.value}
            label={element.props.label}
            onSelect={handleSelected}
            classname={
              radioStates[index]
                ? "RadioSelected"
                : mode == "dark"
                ? "RadioUnSelectedDark"
                : "RadioUnSelectedLight"
            }
          />
        );
      })}
    </div>,
    events
  );
};

export default RadioGroup;
