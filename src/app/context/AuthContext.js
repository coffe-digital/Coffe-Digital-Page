import React, { createContext, useState, useEffect, useContext } from 'react';


// Criação do contexto
export const AuthContext = createContext();

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verificar se o usuário está logado ao carregar a aplicação
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const login = (email, password) => {
    // Implementar a lógica de login (ex: requisição à API)
    const mockUser = { email, name: 'Mock User' };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
