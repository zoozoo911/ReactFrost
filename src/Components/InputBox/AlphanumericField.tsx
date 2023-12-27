import React, { useCallback, useState, useEffect, useMemo } from "react";
import "./InputField.css";
import {
  AlphanumbericFieldProps,
  SearchFieldProps,
} from "../../Models/InputFieldModel";
import SearchIcon from "./search-line.svg";

const AlphanumbericField: React.FC<AlphanumbericFieldProps> = ({
  id,
  className,
  mode,
  responsive,
  validator,
  charMode,
  placeholder,
  onEdited,
  style,
  ...events
}) => {
  const [textValue, setTextValue] = useState<string>("");
  const [passwordFieldAnimationState, setPasswordFieldAnimationState] =
    useState<boolean>(false);
  const [searchButtonState, setSearchButtonState] =
    useState<string>("SearchButton");
  const handleContentChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (charMode == "password") {
          if (validator) {
            console.log("target->", event.target.value);
            if (event.target.value.length < validator.charLimit) {
              setPasswordFieldAnimationState(false);
              setTextValue(event.target.value);
            } else {
              if (event.target.value.length == validator.charLimit)
                setTextValue(event.target.value);
              setPasswordFieldAnimationState(true);
            }
          }
        } else setTextValue(event.target.value);
      },
      []
    ),
    handleKeyPress = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key == "Enter" && responsive == false) {
          if (onEdited) onEdited(textValue);
        }
      },
      [responsive, textValue]
    );
  useEffect(() => {
    if (responsive == true) if (onEdited) onEdited(textValue);
  }, [textValue]);

  return React.cloneElement(
    <div
      className={className}
      style={{
        animation: passwordFieldAnimationState ? "0.5s shake" : "",
      }}
      onBlur={() => {
        setSearchButtonState("SearchButton");
      }}
    >
      <div className={searchButtonState}>
        <div
          style={{
            fontSize: "10px",
            height: "fit-content",
            // paddingTop: charMode == "password" ? "5px" : "0px",
            // paddingBottom: charMode != "password" ? "2px" : "0px",
          }}
        >
          {charMode == "text" ? "abc" : charMode == "password" ? "pass" : "123"}
        </div>
      </div>
      <input
        type={charMode}
        onFocus={() => {
          setSearchButtonState("SearchButtonActive");
        }}
        id={id}
        value={textValue}
        onChange={(event) => handleContentChange(event)}
        onKeyDown={(event) => handleKeyPress(event)}
        placeholder={placeholder}
        className={`TextField${
          mode === "light" ? `Light` : `Dark`
        }  ${className} Container`}
        style={{
          paddingLeft: "50px",
          borderColor: passwordFieldAnimationState ? "red" : "",
          ...style, // Assuming `style` is a variable holding additional styles
        }}
      />
    </div>,
    events
  );
};

export default AlphanumbericField;
