import { ButtonModel } from "./ButtonModel";
import Events from "./EventModel";

type DialogProps = {
  id?: string;
  body: string;
  title: string;
  mode: "dark" | "light";
  buttons: ButtonModel.ButtonProps[];
  style?: React.CSSProperties;
  className?: string;
  mode?: "light" | "dark";
} & Events;

export default DialogProps;
