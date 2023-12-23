import Events from "./EventModel";

type PaneProps = {
  id?: string;
  style: React.CSSProperties;
  mode: "light" | "dark";
  children: ReactNode;
} & Events;

export default PaneProps;
