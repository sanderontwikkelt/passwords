import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

it('should add a password record when submitting data', async () => {
  render(<App />);
  const button: HTMLButtonElement = await screen.findByRole('button');
  const form: any = await screen.getByTestId('add-password-form');

  // Pre Expcations
  expect(button.innerHTML).toBe('Save');
  expect(button.disabled).toBe(true);

  const nameInput: any = await screen.getByTestId('name');
  fireEvent.change(nameInput, { target: { value: 'PASSWORD_KEY' } });

  // input event works as intended
  expect(nameInput.value).toBe('PASSWORD_KEY');

  const passwordInput: any = await screen.getByTestId('password');
  fireEvent.change(passwordInput, { target: { value: 'password' } });

  // input event works as intended
  expect(passwordInput.value).toBe('password');

  // should be able to submit after filling in name and password
  expect(button.disabled).toBe(false);

  // submit form
  fireEvent.submit(form);

  // form should be cleared after successful submit
  expect(nameInput.value).toBe('');
  expect(passwordInput.value).toBe('');

  const table = screen.getByTestId('password-table');
  expect(table.querySelectorAll('tr').length).not.toBe(0);
});
