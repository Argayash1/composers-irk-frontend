import axios from 'axios';
import { News } from '../redux/news/types';
import { mainApi } from '../utils/constants';

const dataProvider = {
  getList: async (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const query = resource !== 'ourHistory' ? `?page=${page}&limit=${perPage}` : '';

    try {
      const { data: response } = await axios.get(`${mainApi}/${resource}${query}`);

      if (response && response.data) {
        const adaptedData = response.data.map((item: News) => {
          return { id: item._id, ...item };
        });

        const totalPages = response.totalPages || 0;

        return { data: adaptedData, total: totalPages };
      } else {
        throw new Error('Response does not contain the expected "data" key');
      }
    } catch (error) {
      console.error('Error in customDataProvider:', error);
      throw error;
    }
  },

  getOne: async (resource: string, params: any) => {
    try {
      const { data: response } = await axios.get(`${mainApi}/${resource}/${params.id}`);

      if (response && response.data) {
        const adaptedData = { id: response.data._id, ...response.data };

        return { data: adaptedData };
      } else {
        throw new Error('Response does not contain the expected "data" key');
      }
    } catch (error) {
      console.error('Error in customDataProvider:', error);
      throw error;
    }
  },

  delete: async (resource: string, params: any) => {
    try {
      const { data: response } = await axios.delete(`${mainApi}/${resource}/${params.id}`);

      return { data: { id: params.id } }; // Возвращаем объект с удаленным ID
    } catch (error) {
      console.error('Error in customDataProvider:', error);
      throw error;
    }
  },

  // delete: async (resource: string, params: any) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/${resource}/${params.id}`);

  //     return { data: { id: params.id } }; // Возвращаем объект с удаленным ID
  //   } catch (error) {
  //     console.error('Error in customDataProvider:', error);
  //     throw error;
  //   }
  // },
};

export default dataProvider;
