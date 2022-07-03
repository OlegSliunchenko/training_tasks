export interface StyleType {
    backgroundColor: string,
}
export interface ButtonType {
    title: string;
    color: StyleType;
    onClick: () => void;
    disabled?: boolean; //FIXME: (Dowe need ? sign) It could accept - size and disable properties. What will be if i not pass this props? undefined? null? false?
    buttonSize: string;
}