import Events from "./EventModel";
import RadioButtonProps from "./RadioButtonModel";

type RadioGroupProps = {
  id?: string;
  children: ReactNode;
  onInteracted?: (value: any, index: number, label: string) => void;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  className?: string;
} & Omit<Events, "onChange" | "onSubmit">;

export default RadioGroupProps;
