import { useState } from 'react';
import { PasswordFields, PasswordInputState } from '../../lib/types';
import { usePasswords } from '../context/PasswordsContext';
import Dropdown from './PasswordDropdown';
import { ActionTypes, usePassword } from '../context/PasswordContext';
import { addPassword, deletePassword } from '../../lib/store';
import viewIcon from '../../assets/view.svg';

const PasswordRow = ({ password }: { password: PasswordInputState }) => {
  const [showPassword, setShowPassword] = useState('');

  const { dispatch } = usePassword();
  const { clients, passwords } = usePasswords();
  const client = clients.find(({ name }) => name === password.clientName);

  const onEdit = (pass: PasswordInputState) => {
    dispatch({ type: ActionTypes.EDIT, payload: pass });
  };

  const onDuplicate = (pass: PasswordInputState) => {
    addPassword(
      {
        ...pass,
        name: `${pass.name}_copy`,
      },
      passwords
    );
  };

  const onDelete = (pass: PasswordInputState) => {
    deletePassword(pass.name);
  };

  const onSelect = (pass: PasswordInputState, option: 'edit' | 'duplicate' | 'delete') => {
    if (option === 'duplicate') return onDuplicate(pass);
    if (option === 'delete') return onDelete(pass);
    return onEdit(pass);
  };

  return (
    <tr key={password[PasswordFields.name]} className="h-12">
      <td
        className="w-12 h-12 rounded-full"
        style={{
          backgroundColor: client?.color || '#fff',
        }}
      />
      <td className="flex-grow px-3 text-left">
        {password[PasswordFields.name]}
        <p className="text-shaded text-sm">{client?.name || 'No client'}</p>
      </td>
      <td className="flex-grow px-3 text-left items-center flex">
        <button
          onClick={() => setShowPassword((prev) => (prev === password.name ? '' : password.name))}
          className="mr-1 w-12 h-12 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-20 inline-flex items-center justify-center"
        >
          <img
            src={viewIcon}
            alt="view password"
            className={`w-5 h-5 ${showPassword === password.name ? 'opacity-80' : 'opacity-50'}`}
          />
        </button>
        {showPassword === password.name ? password[PasswordFields.password] : '•••••••••••••••'}
      </td>
      <td className="text-right w-10">
        <Dropdown onSelect={(option) => onSelect(password, option)} />
      </td>
    </tr>
  );
};

export default PasswordRow;
