
import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:3001/api';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    const userId = Cookies.get('userId');
    const userRole = Cookies.get('userRole');
    if (token && userId) {
      fetchUserDetails(userId, token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserDetails = async (userId, token) => {
    try {
      const response = await fetch(`${API_URL}/user/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();
      console.log(data)
      if(data.role != null){
        Cookies.set('userRole', data.role.name, { expires: 7 });
      }
    
      setUser(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
      Cookies.remove('token');
      Cookies.remove('userRole');
    } finally {
      setLoading(false);
    }
  };

  const login = (userData) => {
    console.log(userData)
    const { access_token, user } = userData;
    Cookies.set('token', access_token, { expires: 7 });
    fetchUserDetails(user.sub, access_token);
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('token');
    Cookies.remove('userRole');
    router.push('/inicio');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
