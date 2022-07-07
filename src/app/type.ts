export interface IColor {
  hex: string;
}

export interface IAction {
  type: string;
  payload?: IColor;
}

export interface IButtonColor {
  backgroundColor: string;
}

export interface IState {
  buttonSize: string;
  btnState: boolean;
  btnColor: IButtonColor;
}
