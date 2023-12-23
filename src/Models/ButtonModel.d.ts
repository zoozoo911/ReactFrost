import Events from "./EventModel";

type CustomCSS = {
  position: string;
  width: string;
  minWidth?: string;
  height?: string;
  minHeight?: string;
  right?: string;
  bottom?: string;
  left?: string;
  top?: string;
  transform?: string;
  color: string;
  backgroundColor?: string;
  borderColor?: string;
};

type ButtonProps = {
  id?: string;
  label: string;
  type: "normal" | "cancel";
  mode: "3D" | "flat";
  style: React.CSSProperties;
} & Events;

export default ButtonProps;
