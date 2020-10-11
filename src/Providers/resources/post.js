import axios from 'axios';
import { stringify } from 'query-string';
import { DELETE, GET_LIST, GET_ONE, CREATE, UPDATE, DELETE_MANY, GET_MANY } from 'react-admin';
import moment from 'moment';

const uploadImage = (formData) =>
  fetch('https://api.cloudinary.com/v1_1/dmckzsz3u/image/upload', {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    body: formData,
  }).then((x) => x.json());

const getFormData = (image, location) => {
  const formData = new FormData();
  const uniqueFileName = image.name + '-' + new Date().toISOString();

  formData.append('file', image);
  formData.append('tags', 'posts');
  formData.append('upload_preset', 'qzc6powb');
  formData.append('api_key', '631366814312264');
  formData.append('timestamp', (Date.now() / 1000) | 0);
  formData.append('public_id', `${location}/${uniqueFileName}`);
  return formData;
};

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
        data: { id, titleLT, titleEN, category, date, contentLT, contentEN, image },
      } = await axios.get(`/post/${params.id}`);

      return {
        data: { id, titleLT, titleEN, category, date, contentLT, contentEN, image },
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
        const { titleLT, titleEN, category, contentLT, contentEN, image } = params.data;

        const uploadedImageData = await uploadImage(getFormData(image.rawFile, 'services'));
        const uploadedImage = {
          imageUrl: uploadedImageData.secure_url,
          imageId: uploadedImageData.public_id,
        };

        const { data } = await axios.post('/post', {
          titleLT,
          titleEN,
          category,
          date: moment(),
          contentLT,
          contentEN,
          image: uploadedImage,
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
        const { id, titleLT, titleEN, category, contentLT, contentEN, image } = params.data;

        let uploadedImage = {};

        if (image.rawFile) {
          const uploadedImageData = await uploadImage(getFormData(image.rawFile, 'services'));
          uploadedImage = {
            imageUrl: uploadedImageData.secure_url,
            imageId: uploadedImageData.public_id,
          };
        } else {
          uploadedImage = {
            imageUrl: image.imageUrl,
            imageId: image.imageId,
          };
        }

        await axios.put(`/post/${id}`, {
          titleLT,
          titleEN,
          category,
          date: moment(),
          contentLT,
          contentEN,
          image: uploadedImage,
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
