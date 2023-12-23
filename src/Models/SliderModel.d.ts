import Events from "./EventModel";

type SliderProps = {
  id?: string;
  min: number;
  max: number;
  step: number;
  type: "thin" | "broad";
  style: React.CSSProperties;
} & Events;

export default SliderProps;
