import Events from "./EventModel";

type SliderProps = {
  id?: string;
  min: number;
  max: number;
  step: number;
  type: "thin" | "broad";
  mode?: "light" | "dark";
  style: React.CSSProperties;
} & Events;

export default SliderProps;
