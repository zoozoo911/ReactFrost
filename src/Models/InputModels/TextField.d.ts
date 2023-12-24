import Events from "../EventModel";

type TextFieldProps = {
  id?: string;
  mode?: "light" | "dark";
  placeholder: string;
  style?: React.CSSProperties;
  className?: string;
  responsive: boolean;
  onEdited?: (text: string) => void;
} & Omit<Events, onChange | onKeyPress | onKeyDown | onInput | onKeyUp>;

export default TextFieldProps;
