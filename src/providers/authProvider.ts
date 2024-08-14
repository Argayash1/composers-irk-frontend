import axios from 'axios';
import { AuthProvider } from 'react-admin';
import { dataProviderErrorMessage } from './dataProvider';
import { localApi, mainApi } from '../utils/constants';

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    if (!password) {
      return;
    }

    try {
      const { data } = await axios.post(`${mainApi}/signin`, { password, email: 'jankrul1901@gmail.com' })
      if (data.message) {
        localStorage.setItem('auth', 'true');
      }

      return data.message
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const { data } = await axios.get(`${mainApi}/signout`)
      localStorage.removeItem('auth');
      return Promise.resolve();
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject()
  },

  checkError: async (error) => {
    const status = error.status;
    try {
      if (status === 401 || status === 403) {
        await axios.get(`${mainApi}/signout`)
        localStorage.removeItem('auth');
        return Promise.reject();
      }
      // other error code (404, 500, etc): no need to log out
      return Promise.resolve();
    } catch {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  getIdentity: () =>
    Promise.resolve({
      id: 'user',
      fullName: 'Ян Круль',
    }),

  getPermissions: () => Promise.resolve(''),
};

export default authProvider;
