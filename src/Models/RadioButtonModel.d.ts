type RadioButtonProps = {
  label: string;
  value: any;
  onSelect?: (label: string, value: any, key: number, checked: boolean) => void;
  index?: number;
  classname?: string;
  style?: {
    color?: string;
  };
  checked: boolean;
  color: string;
  mode?: "light" | "dark";
};

export default RadioButtonProps;
