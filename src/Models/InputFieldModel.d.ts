import Events from "../EventModel";

type AlphanumbericFieldProps = {
  charMode?: "text" | "number" | "password";
  id?: string;
  mode?: "light" | "dark";
  placeholder: string;
  style?: React.CSSProperties;
  className?: string;
  responsive: boolean;
  onEdited?: (text: string) => void;
} & Omit<Events, onChange | onKeyPress | onKeyDown | onInput | onKeyUp>;

type InputProps = {
  type: "text" | "number" | "password";
};

export { InputProps, AlphanumbericFieldProps };
