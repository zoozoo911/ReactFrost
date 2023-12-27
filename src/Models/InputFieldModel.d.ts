import Events from "../EventModel";

type AlphanumbericFieldProps = {
  charMode?: "text" | "number" | "password";
  id?: string;
  mode?: "light" | "dark";
  placeholder: string;
  style?: React.CSSProperties;
  className?: string;
  responsive: boolean;
  isValidated?: (validated: boolean) => void;
  validator?: {
    charLimit: number;
    correctString: string;
  };
  onEdited?: (text: string) => void;
} & Omit<
  Events,
  "onChange" | "onKeyPress" | "onKeyDown" | "onInput" | "onKeyUp"
>;

type SearchFieldProps = {
  searchItems: any[];
  selectedSearchItem?: (value: string) => void;
} & Omit<AlphanumbericFieldProps, "responsive" | "charMode" | "onClick">;

type InputProps = {
  type: "text" | "number" | "password" | "search";
};

export { InputProps, AlphanumbericFieldProps, SearchFieldProps };
