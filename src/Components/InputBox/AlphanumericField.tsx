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
  charMode,
  placeholder,
  onEdited,
  style,
  ...events
}) => {
  const [textValue, setTextValue] = useState<string>("");
  const [searchButtonState, setSearchButtonState] =
    useState<string>("SearchButton");
  const handleContentChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
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
      onBlur={() => {
        setSearchButtonState("SearchButton");
      }}
    >
      <div className={searchButtonState}>
        <span style={{ fontSize: "12px", height: "20px" }}>
          {charMode == "text" ? "abc" : charMode == "password" ? "***" : "123"}
        </span>
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
          ...style,
        }}
      />
    </div>,
    events
  );
};

export default AlphanumbericField;
