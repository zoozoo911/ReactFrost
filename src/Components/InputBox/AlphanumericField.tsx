import React, { useCallback, useState, useEffect, useMemo } from "react";
import "./InputField.css";
import { AlphanumbericFieldProps } from "../../Models/InputFieldModel";

const AlphanumbericField: React.FC<AlphanumbericFieldProps> = ({
  id,
  className,
  mode,
  responsive,
  validator,
  charMode,
  placeholder,
  isValidated,
  onEdited,
  style,
  ...events
}) => {
  const [textValue, setTextValue] = useState<string>("");
  const [passwordFieldAnimationState, setPasswordFieldAnimationState] =
    useState<boolean>(false);
  const [searchButtonState, setSearchButtonState] = useState<string>(
    `SearchButton${mode == "dark" ? `Dark` : `Light`}`
  );
  const handleContentChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (charMode == "password") {
          if (validator) {
            console.log("target->", event.target.value);
            if (event.target.value.length < validator.charLimit) {
              setPasswordFieldAnimationState(false);
              setTextValue(event.target.value);
            } else {
              if (event.target.value.length == validator.charLimit) {
                setTextValue(event.target.value);
                if (event.target.value != validator.correctString) {
                  setPasswordFieldAnimationState(true);
                } else {
                  if (isValidated) isValidated(true);
                }
              }
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
        setSearchButtonState(
          `SearchButton${mode == "dark" ? `Dark` : `Light`}`
        );
      }}
    >
      <div className={searchButtonState}>
        <div
          style={{
            fontSize: "10px",
            height: "fit-content",
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
          paddingLeft: "60px",
          borderColor: passwordFieldAnimationState ? "red" : "",
          ...style,
        }}
      />
    </div>,
    events
  );
};

export default AlphanumbericField;
