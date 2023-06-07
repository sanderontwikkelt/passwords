import { PasswordInputState } from './types';

export const PASSWORDS_STORAGE_KEY = 'PASSWORDS_LIST';

export const getPasswords = () => {
  try {
    const passwordsJson = localStorage.getItem(PASSWORDS_STORAGE_KEY);
    if (!passwordsJson) return [];
    const passwords = JSON.parse(passwordsJson);
    return passwords || [];
  } catch (e) {
    return [];
  }
};

export const addPassword = (
  state: PasswordInputState,
  passwords: PasswordInputState[],
  onSuccess?: () => void,
  onError?: () => void
) => {
  try {
    localStorage.setItem(PASSWORDS_STORAGE_KEY, JSON.stringify([...passwords, state]));
    window.dispatchEvent(new Event('storage'));
    onSuccess?.();
  } catch (e) {
    onError?.();
  }
};

export const editPassword = (
  state: PasswordInputState,
  passwords: PasswordInputState[],
  onSuccess?: () => void,
  onError?: () => void
) => {
  try {
    localStorage.setItem(
      PASSWORDS_STORAGE_KEY,
      JSON.stringify(
        passwords.map((pass: PasswordInputState) => (pass.name === state.editing ? { ...state, editing: '' } : pass))
      )
    );
    window.dispatchEvent(new Event('storage'));
    onSuccess?.();
  } catch (e) {
    onError?.();
  }
};

export const deletePassword = (name: string, onSuccess?: () => void, onError?: () => void) => {
  try {
    const passwords = getPasswords();
    localStorage.setItem(
      PASSWORDS_STORAGE_KEY,
      JSON.stringify(passwords.filter((password: PasswordInputState) => password.name !== name))
    );
    window.dispatchEvent(new Event('storage'));
    onSuccess?.();
  } catch (e) {
    onError?.();
  }
};
