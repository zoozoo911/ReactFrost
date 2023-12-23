type RadioButtonProps = {
  label: string;
  // checked: boolean;
  value: any;
  onSelect?: (label: string, value: any, key: number, checked: boolean) => void;
  index?: number;
  classname?: string;
  style?: {
    color?: string;
  };
  checked: boolean;
};

export default RadioButtonProps;
