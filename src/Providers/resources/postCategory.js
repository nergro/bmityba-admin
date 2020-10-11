import axios from 'axios';
import { stringify } from 'query-string';
import { DELETE, GET_LIST, GET_ONE, CREATE, UPDATE, DELETE_MANY, GET_MANY } from 'react-admin';

export const postCategory = async (type, params, resource) => {
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

      const url = `/post-category?${stringify(query)}`;
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
        data: { id, nameLT, nameEN },
      } = await axios.get(`/post-category/${params.id}`);

      return {
        data: { id, nameLT, nameEN },
      };
    }
    case GET_MANY: {
      const {
        data: { items },
      } = await axios.get(`/post-category`);
      return { data: items };
    }
    case CREATE: {
      try {
        const { nameLT, nameEN } = params.data;

        const { data } = await axios.post('/post-category', {
          nameLT,
          nameEN,
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
        const { id, nameLT, nameEN } = params.data;

        await axios.put(`/post-category/${id}`, {
          nameLT,
          nameEN,
        });

        return { data: params };
      } catch (err) {
        throw new Error('Server error');
      }
    }
    case DELETE: {
      const { id } = params;
      const { data } = await axios.delete(`/post-category/${id}`);
      return { data };
    }
    case DELETE_MANY: {
      const { ids } = params;
      await axios.delete(`/post-category`, { data: { ids } });
      return { data: ids };
    }
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
};
