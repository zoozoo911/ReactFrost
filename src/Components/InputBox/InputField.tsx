import AlphanumbericField from "./AlphanumericField";
import {
  InputProps,
  AlphanumbericFieldProps,
  SearchFieldProps,
} from "../../Models/InputFieldModel";
import React from "react";
import SearchField from "./SearchField";

const InputField: React.FC<
  InputProps & (AlphanumbericFieldProps | SearchFieldProps)
> = ({ type, ...otherProps }) => {
  if (type === "text" || type === "number" || type === "password") {
    const { id, placeholder, mode, style, className, responsive, ...events } =
      otherProps;

    return (
      <AlphanumbericField
        charMode={type}
        id={id}
        placeholder={placeholder}
        mode={mode}
        style={style}
        className={className}
        responsive={responsive}
        {...events}
      />
    );
  } else if (type === "search") {
    const { id, placeholder, mode, style, searchItems, className, ...events } =
      otherProps;
    return (
      <SearchField
        id={id}
        searchItems={searchItems}
        placeholder={placeholder}
        mode={mode}
        style={style}
        className={className}
        {...events}
      />
    );
  }

  // Handle other types or provide a default behavior here
  return <input type={type} {...otherProps} />;
};

export default InputField;
