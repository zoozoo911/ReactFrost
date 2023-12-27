import React, { useCallback, useState, useEffect, useMemo } from "react";
import "./InputField.css";
import { SearchFieldProps } from "../../Models/InputFieldModel";
import SearchIcon from "../../Assets/search-line.svg";

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
  const [searchButtonState, setSearchButtonState] =
    useState<string>("SearchButton");
  const [searchBoxVisibleState, setSearchBoxVisibleState] =
    useState<boolean>(false);
  const handleContentChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextValue(event.target.value);
      if (event.target.value != "") setSearchBoxVisibleState(true);
      else setSearchBoxVisibleState(false);
    },
    []
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
        setSearchButtonState("SearchButton");
      }}
    >
      <div className={searchButtonState}>
        <img style={{ width: "10px" }} src={SearchIcon}></img>
      </div>
      <input
        onFocus={() => {
          setSearchButtonState("SearchButtonActive");
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
          paddingLeft: "50px",
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
