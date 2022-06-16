export type StyleType = {
    backgroundColor: string,
    height?: number,
    width?: number,
};

export type ButtonType = {
    title: string;
    style: StyleType;
    onClick: () => void;
    disabled?: boolean;
    onMouseEnter: any;
    onMouseLeave: any;
    id:string
};
