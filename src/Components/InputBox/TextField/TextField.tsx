import React, { useEffect, useState } from "react";
import TextFieldProps from "../../../Models/InputModels/TextField";
import "./TextField.css";

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  id,
  style = {},
  className,
  responsive,
  onEdited,
  ...events
}) => {
  const [textValue, setTextValue] = useState<string>("");
  useEffect(() => {
    if (responsive == true) if (onEdited) onEdited(textValue);
  }, [textValue]);
  return React.cloneElement(
    <input
      type="text"
      id={id}
      value={textValue}
      onChange={(e) => {
        setTextValue(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key == "Enter" && responsive == false) {
          if (onEdited) onEdited(textValue);
        }
      }}
      placeholder={placeholder}
      className={"TextField" + " " + className}
      style={style}
    ></input>,
    events
  );
};

export default TextField;
