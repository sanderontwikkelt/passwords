import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { ClientType, PasswordInputState } from '../../lib/types';
import { getPasswords } from '../../lib/store';
import { mockClients } from '../../lib/mockClients';

type PasswordsContextProps = {
  passwords: PasswordInputState[];
  clients: ClientType[];
  loading: boolean;
};

export const PasswordsContext = createContext<PasswordsContextProps>({
  passwords: [],
  clients: [],
  loading: true,
});

const PasswordsProvider = ({ children }: { children: ReactNode }) => {
  const [passwords, setPasswords] = useState<PasswordInputState[]>([]);
  const [clients, setClients] = useState<ClientType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStorage = () => {
      setPasswords(getPasswords());
    };

    const dataFetch = async () => {
      // helaas een cors blokkade waardoor ik geen directe toegang heb vanuit de frontend naar de api
      // const response = await fetch('http://pastebin.com/raw/zSFTiVWr');
      return new Promise((resolve) => {
        setTimeout(() => {
          setClients(mockClients);
          setLoading(false);
          resolve(null);
        }, 1000);
      });
    };

    handleStorage();
    dataFetch();

    // luister naar storage updates uit localStorage
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const store = useMemo(
    () => ({
      passwords,
      clients,
      loading,
    }),
    [passwords, clients, loading]
  );
  return <PasswordsContext.Provider value={store}>{children}</PasswordsContext.Provider>;
};

const usePasswords = () => {
  return useContext(PasswordsContext);
};

export { usePasswords, PasswordsProvider };
