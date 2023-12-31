import React, { useCallback, useState, useEffect, useMemo } from "react";
import "./InputField.css";
import { SearchFieldProps } from "../../Models/InputFieldModel";
import SearchIconDark from "../../Assets/search-line-black.svg";
import SearchIconLight from "../../Assets/search-white.svg";

const SearchField: React.FC<SearchFieldProps> = ({
  id,
  className,
  mode,
  placeholder,
  style,
  searchItems,
  selectedSearchItem,
  onEdited,
  ...events
}) => {
  const [textValue, setTextValue] = useState<string>("");
  const [searchButtonState, setSearchButtonState] = useState<string>(
    `SearchButton${mode == "dark" ? `Dark` : `Light`}`
  );
  const [searchBoxVisibleState, setSearchBoxVisibleState] =
    useState<boolean>(false);
  const handleContentChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextValue(event.target.value);
      if (event.target.value != "") setSearchBoxVisibleState(true);
      else setSearchBoxVisibleState(false);
    },
    [textValue, searchButtonState]
  );
  useEffect(() => {
    if (onEdited) onEdited(textValue);
  }, [textValue]);

  const filteredItems = useMemo(
    () => searchItems.filter((item) => item.includes(textValue)),
    [searchItems, textValue]
  );
  return React.cloneElement(
    <div
      className={className}
      onBlur={() => {
        setSearchButtonState(
          `SearchButton${mode == "dark" ? `Dark` : `Light`}`
        );
      }}
    >
      <div className={searchButtonState}>
        <img
          style={{ width: "10px" }}
          src={
            searchButtonState.includes("Active")
              ? SearchIconLight
              : mode == "dark"
              ? SearchIconDark
              : SearchIconLight
          }
        ></img>
      </div>
      <input
        onFocus={() => {
          setSearchButtonState(
            `SearchButtonActive${mode == "dark" ? `Dark` : `Light`}`
          );
        }}
        type="text"
        id={id}
        value={textValue}
        onChange={handleContentChange}
        placeholder={placeholder}
        className={`TextField${
          mode === "light" ? `Light` : `Dark`
        }  ${className} Container`}
        style={{
          paddingLeft: "60px",
          ...style,
        }}
      />

      {searchBoxVisibleState && (
        <div className={`SearchPanel${mode === "light" ? `Light` : `Dark`}`}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                style={{
                  borderRadius:
                    index == 0
                      ? filteredItems.length == 1
                        ? "10px"
                        : "10px 10px 0px 0px"
                      : index == filteredItems.length - 1
                      ? "0px 0px 10px 10px"
                      : "0px",
                }}
                className={`SearchItem${index % 2 == 0 ? `Even` : `Odd`}`}
                onClick={(e) => {
                  if (selectedSearchItem) selectedSearchItem(item);
                }}
                key={index}
              >
                {item}
              </div>
            ))
          ) : (
            <div className={`SearchItemOdd`}>No matching items</div>
          )}
        </div>
      )}
    </div>,
    events
  );
};

export default SearchField;
