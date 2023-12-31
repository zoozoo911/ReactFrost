type LoaderProps = {
  className?: string;
  id?: string;
  mode: "light" | "dark";
  style?: React.CSSProperties;
  completionPercentage: number;
};

export default LoaderProps;
