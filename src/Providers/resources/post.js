import axios from 'axios';
import { stringify } from 'query-string';
import { DELETE, GET_LIST, GET_ONE, CREATE, UPDATE, DELETE_MANY, GET_MANY } from 'react-admin';

export const post = async (type, params, resource) => {
  switch (type) {
    case GET_LIST: {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: field,
        order,
        page,
        perPage,
      };

      const url = `/${resource}?${stringify(query)}`;
      const {
        data: { items, total },
      } = await axios.get(url);

      return {
        data: items,
        total: total,
      };
    }
    case GET_ONE: {
      const {
        data: { id, title, category, date, content },
      } = await axios.get(`/post/${params.id}`);

      return {
        data: { id, title, category, date, content },
      };
    }
    case GET_MANY: {
      const {
        data: { items },
      } = await axios.get(`/post`);
      return { data: items };
    }
    case CREATE: {
      try {
        const { title, category, content } = params.data;

        const { data } = await axios.post('/post', {
          title,
          category,
          date: '2020-09-30',
          content,
        });

        return { data };
      } catch (error) {
        if (error.response) {
          throw new Error(error.response.data.error);
        }
        throw new Error('Server error');
      }
    }
    case UPDATE: {
      try {
        const { id, title, category, content } = params.data;

        await axios.put(`/post/${id}`, {
          title,
          category,
          date: '2020-09-30',
          content,
        });

        return { data: params };
      } catch (err) {
        throw new Error('Server error');
      }
    }
    case DELETE: {
      const { id } = params;
      const { data } = await axios.delete(`/post/${id}`);
      return { data };
    }
    case DELETE_MANY: {
      const { ids } = params;
      await axios.delete(`/post`, { data: { ids } });
      return { data: ids };
    }
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
};
