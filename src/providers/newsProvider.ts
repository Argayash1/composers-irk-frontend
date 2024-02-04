import axios from 'axios';
import { News } from '../redux/news/types';

const customDataProvider = {
  getList: async (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const query = `?page=${page}&limit=${perPage}`;

    try {
      const { data: response } = await axios.get(`http://localhost:3001/${resource}${query}`);

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
};

export default customDataProvider;
