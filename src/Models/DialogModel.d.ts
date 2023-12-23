import { ButtonModel } from "./ButtonModel";
import Events from "./EventModel";

type DialogProps = {
  id?: string;
  body: string;
  title: string;
  mode: "dark" | "light";
  buttons: ButtonModel.ButtonProps[];
  style: React.CSSProperties;
} & Events;

export default DialogProps;
