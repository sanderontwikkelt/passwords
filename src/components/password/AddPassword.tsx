import { FormEvent, useMemo } from 'react';
import { ActionTypes, usePassword } from '../context/PasswordContext';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { PasswordFields } from '../../lib/types';
import { addPassword, editPassword } from '../../lib/store';
import { usePasswords } from '../context/PasswordsContext';
import Select from '../elements/Select';

const AddPassword = () => {
  const { state, dispatch } = usePassword();
  const { passwords, clients } = usePasswords();

  const onSuccess = () => {
    dispatch({ type: ActionTypes.CLEAR });
  };
  const onError = () => {
    dispatch({ type: ActionTypes.ERROR, payload: 'Something went wrong, please try again!' });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    if (passwords.some(({ name }) => name === state.name)) return alert('Please pick a unique name');
    return (state.editing ? editPassword : addPassword)(state, passwords, onSuccess, onError);
  };

  const inputProps = (field: 'name' | 'password' | 'clientName') => ({
    onChange: (payload: string) => dispatch({ type: ActionTypes.UPDATE_STATE, field: PasswordFields[field], payload }),
    value: state[PasswordFields[field]],
    label: field,
    name: field,
    'data-testid': field,
    required: true,
  });

  const clientOptions = useMemo(() => {
    return clients.map((client) => ({ key: client.name, value: client.name }));
  }, [clients]);

  return (
    <div className="relative">
      {state.editing ? (
        <div className="flex mb-3 p-2 justify-between border border-primary rounded-xl bg-primary bg-opacity-20">
          <p className="text-primary">Editing {state.editing}</p>
          <button className="text-sm ml-2" onClick={() => dispatch({ type: ActionTypes.CLEAR })}>
            Cancel
          </button>
        </div>
      ) : null}
      <form onSubmit={onSubmit} data-testid="add-password-form" className="flex w-full items-end gap-3">
        <Input {...inputProps('name')} placeholder="e.g. GMAIL_ACCOUNT" />
        <Input {...inputProps('password')} placeholder="e.g. XYHTGN3@556S!" />
        <Select {...inputProps('clientName')} options={clientOptions} defaultOption="No client" />
        <Button type="submit" disabled={!(state.name && state.password)}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddPassword;
