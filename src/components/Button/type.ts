export interface StyleType  {
    backgroundColor: string,
}
export interface ButtonType {
    title: string;
    color: StyleType;
    onClick?: () => void;
    disabled?: boolean;
    className: string;
}
