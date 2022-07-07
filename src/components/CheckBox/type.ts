import React from 'react';

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface ICheckBoxProps {
  buttonSize: string;
  checkingSize: (e: ChangeEvent) => void;
  activeButton: (e: ChangeEvent) => void;
}
