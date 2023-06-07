import { PasswordProvider } from '../context/PasswordContext';
import { PasswordsProvider } from '../context/PasswordsContext';
import AddPassword from '../password/AddPassword';
import PasswordList from '../password/PasswordList';

const Main = () => {
  return (
    <PasswordsProvider>
      <PasswordProvider>
        <AddPassword />
        <PasswordList />
      </PasswordProvider>
    </PasswordsProvider>
  );
};

export default Main;
