import axios from 'axios';
import { News } from '../redux/news/types';
import { mainApi } from '../utils/constants';

const responseErrorMessage = 'Ответ сервера не содержит данных или не содержит свойства "data"'
const dataProviderErrorMessage = 'Ошибка в дата-провайдере:'

const dataProvider = {
  getList: async (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort
    const adaptedField = field === 'id' ? '_id' : field
    const query = resource !== 'ourHistory' ? `?page=${page}&limit=${perPage <= 100 ? perPage : 10}&sortBy=${adaptedField}&order=${order.toLowerCase()}` : '';

    try {
      const { data: response } = await axios.get(`${mainApi}/${resource}${query}`);

      if (response && response.data) {
        const adaptedData = response.data.map((item: News) => {
          return { id: item._id, ...item };
        });

        return { data: adaptedData, total: response.total || 1 };
      } else {
        throw new Error(responseErrorMessage);
      }
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  getOne: async (resource: string, params: any) => {
    const itemId = resource !== 'ourHistory' ? `/${params.id}` : '';

    try {
      const { data: response } = await axios.get(`${mainApi}/${resource}${itemId}`);

      console.log(response)

      if (response && response.data) {
        const adaptedData =
          resource !== 'ourHistory'
            ? { id: response.data._id, ...response.data }
            : { id: response.data[0]._id, ...response.data[0] };

        return { data: adaptedData };
      } else {
        throw new Error(responseErrorMessage);
      }
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  create: async (resource: string, params: any) => {
    try {
      const { data: response } = await axios.post(`${mainApi}/${resource}`, params.data);

      if (response) {
        const adaptedData =
          resource !== 'ourHistory'
            ? { id: response._id, ...response.data }
            : { id: response.data[0]._id, ...response.data[0] };

        return { data: adaptedData };
      } else {
        throw new Error(responseErrorMessage);
      }
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  update: async (resource: string, params: any) => {
    const { data } = params;

    for (const key in data) {
      if (key === 'id' || key === '_id' || key === 'createdAt') {
        delete data[key];
      }
    }

    try {
      const { data: response } = await axios.patch(`${mainApi}/${resource}/${params.id}`, data);

      if (response) {
        return { data: { id: response._id, ...response } };
      } else {
        throw new Error(responseErrorMessage);
      }
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  delete: async (resource: string, params: any) => {
    try {
      const { data: response } = await axios.delete(`${mainApi}/${resource}/${params.id}`);

      return { data: response.data };
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },
};

export default dataProvider;
