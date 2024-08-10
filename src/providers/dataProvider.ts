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
        throw new Error('Ответ сервера не содержит свойства "data"');
      }
    } catch (error) {
      console.error('Error in customDataProvider:', error);
      throw error;
    }
  },

  getOne: async (resource: string, params: any) => {
    const itemId = resource !== 'ourHistory' ? `/${params.id}` : '';

    try {
      const { data: response } = await axios.get(`${mainApi}/${resource}${itemId}`);

      if (response && response.data) {
        const adaptedData =
          resource !== 'ourHistory'
            ? { id: response.data._id, ...response.data }
            : { id: response.data[0]._id, ...response.data[0] };

        return { data: adaptedData };
      } else {
        throw new Error('Ответ сервера не содержит свойства "data"');
      }
    } catch (error) {
      console.error('Error in customDataProvider:', error);
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
        throw new Error('Ответ сервера не содержит свойства "data"');
      }
    } catch (error) {}
  },

  update: async (resource: string, params: any) => {
    const { data } = params;
    const payload =
      resource === 'news'
        ? { title: data.title, newsText: data.newsText }
        : resource === 'projects'
        ? { title: data.title, description: data.description }
        : {
            surname: data.surname,
            patronymic: data.patronymic,
            name: data.name,
            profession: data.profession,
            // biography: data.biography,
            // shortBiography: data.shortBiography,
            // works: data.works,
            // awards: data.awards,
            // competitions: data.competitions,
            // links: data.limks,
          };

    try {
      const { data: response } = await axios.patch(`${mainApi}/${resource}/${params.id}`, payload);

      if (response) {
        const adaptedData =
          resource !== 'ourHistory'
            ? { id: response._id, ...response.data }
            : { id: response.data[0]._id, ...response.data[0] };

        return { data: adaptedData };
      } else {
        throw new Error('Ответ сервера не содержит данных');
      }
    } catch (error) {
      console.error('Error in customDataProvider:', error);
      throw error;
    }
  },

  delete: async (resource: string, params: any) => {
    try {
      const { data: response } = await axios.delete(`${mainApi}/${resource}/${params.id}`);

      return { data: response.data };
    } catch (error) {
      console.error('Error in customDataProvider:', error);
      throw error;
    }
  },
};

export default dataProvider;
