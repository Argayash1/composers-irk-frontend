import axios from 'axios';
import { AuthProvider } from 'react-admin';
import { dataProviderErrorMessage } from './dataProvider';
import { mainApi } from '../utils/constants';

const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    if (!password) {
      return;
    }

    try {
      const { data } = await axios.post(`${mainApi}/signin`, { password, email })
      const authData = { fullName: data.fullName, avatar: data.avatar, id: data.id }

      if (data.message) {
        localStorage.setItem('auth', JSON.stringify(authData));
      }

      return data.message
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await axios.get(`${mainApi}/signout`)
      localStorage.removeItem('auth');
      return Promise.resolve();
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject({ message: 'Неправильные логин или пароль' })
  },

  checkError: (error) => {
    const status = error.status;

    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getIdentity: () => {
    try {
      const authData = localStorage.getItem('auth');
      const parsedAuthData = authData && JSON.parse(authData);

      return Promise.resolve({ ...parsedAuthData });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getPermissions: () => Promise.resolve(''),
};

export default authProvider;
