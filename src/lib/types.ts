export enum PasswordFields {
  name = 'name',
  password = 'password',
  clientName = 'clientName',
  suggestion = 'suggestion',
  error = 'error',
  editing = 'editing',
}

export type PasswordInputState = {
  [PasswordFields.name]: string;
  [PasswordFields.password]: string;
  [PasswordFields.clientName]: string;
  [PasswordFields.editing]: string;
};

export type ClientType = {
  name: string;
  color: string;
};

export interface PasswordState extends PasswordInputState {
  [PasswordFields.suggestion]: string;
  [PasswordFields.error]: string;
  [PasswordFields.editing]: string;
}

export type PasswordField =
  | PasswordFields.name
  | PasswordFields.password
  | PasswordFields.clientName
  | PasswordFields.suggestion
  | PasswordFields.error
  | PasswordFields.editing;

export const initialPasswordState = {
  [PasswordFields.name]: '',
  [PasswordFields.password]: '',
  [PasswordFields.suggestion]: '',
  [PasswordFields.clientName]: '',
  [PasswordFields.error]: '',
  [PasswordFields.editing]: '',
};
