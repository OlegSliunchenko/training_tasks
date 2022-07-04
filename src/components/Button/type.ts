export interface StyleType {
  background: string;
}

export interface ButtonType {
  title: string;
  color: StyleType;
  onClick?: () => void;
  disabled?: boolean;
  btnSize: string;
}
