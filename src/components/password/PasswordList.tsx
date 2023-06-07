/* eslint-disable array-callback-return */
import { ReactNode } from 'react';
import { usePasswords } from '../context/PasswordsContext';
import PulsingRows from '../elements/PulsingRows';
import PasswordRow from '../elements/PasswordRow';

const PasswordList = () => {
  const { passwords, loading } = usePasswords();

  return (
    <>
      <h2 className="text-3xl text-left mb-6 mt-10">Passwords</h2>
      <div className="min-h-[20rem]">
        {loading || passwords.length ? (
          <table data-testid="password-table" className="w-full text-left border-separate border-spacing-2">
            <tbody>
              {
                (loading ? (
                  <PulsingRows />
                ) : (
                  passwords.map((password) => {
                    <PasswordRow password={password} />;
                  })
                )) as ReactNode
              }
            </tbody>
          </table>
        ) : (
          <p>No passwords saved yet</p>
        )}
      </div>
    </>
  );
};

export default PasswordList;
