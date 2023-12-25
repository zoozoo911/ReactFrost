import AlphanumbericField from "./AlphanumericField";
import {
  InputProps,
  AlphanumbericFieldProps,
} from "../../Models/InputFieldModel";
import React from "react";

const InputField: React.FC<InputProps & AlphanumbericFieldProps> = ({
  type,
  ...otherProps
}) => {
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
  }

  // Handle other types or provide a default behavior here
  return <input type={type} {...otherProps} />;
};

export default InputField;
