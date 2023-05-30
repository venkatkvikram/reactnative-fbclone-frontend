import {createContext, useContext, useState} from 'react';
import type {User} from '../../types'


interface AuthContextType {
  user: User | null;
  changeUser: (user: User | null) => void;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);

  const changeUser = (user: User | null) => {
    setUser(user);
  }; 
  return (
    <AuthContext.Provider value={{user, changeUser}}>
     
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};


