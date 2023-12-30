import Events from "./EventModel";

type SliderProps = {
  id?: string;
  min: number;
  max: number;
  step: number;
  type: "thin" | "broad";
  mode?: "light" | "dark";
  onValueUpdate?: (value: number) => void;
  style?: React.CSSProperties;
  className?: string;
} & Omit<Events, "onChange">;

export default SliderProps;
