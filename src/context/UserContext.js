import { createContext, useState } from 'react';

export const UserContext = createContext();
const { Provider } = UserContext;

export const UserProvider = ({ children, ...others }) => {
  const [user, setUser] = useState({
    selectedTheme: 'light',
  });

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};
