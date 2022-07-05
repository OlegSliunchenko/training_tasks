export interface color {
    hex: string
}

export interface actionType {
    type: string,
    payload?: color
}

export interface buttonColorType {
    backgroundColor: string
}

export interface stateType {
    buttonSize: string,
    btnState: boolean,
    btnColor: buttonColorType
}
