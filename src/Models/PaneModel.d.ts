import Events from "./EventModel";

type PaneProps = {
  id?: string;
  style?: React.CSSProperties;
  mode: "light" | "dark";
  children: ReactNode;
  className?: string;
} & Events;

export default PaneProps;
