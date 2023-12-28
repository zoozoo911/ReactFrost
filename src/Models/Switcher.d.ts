import Events from "./EventModel";

type SwitcherProps = {
  mode: "light" | "dark";
  onSwitch?: (switchValue: boolean) => void;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
} & Omit<Events, "onClick" | "onChange">;

export default SwitcherProps;
