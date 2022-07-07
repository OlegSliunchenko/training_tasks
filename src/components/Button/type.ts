export interface IStyle {
  backgroundColor: string;
}

export interface IButtonProps {
  title: string;
  color: IStyle;
  handleClick: () => void;
  disabled?: boolean;
  buttonSize: string;
}
