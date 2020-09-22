import axios from 'axios';
import { stringify } from 'query-string';
import { DELETE, GET_LIST, GET_ONE, CREATE, UPDATE, DELETE_MANY, GET_MANY } from 'react-admin';

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
  formData.append('tags', 'services');
  formData.append('upload_preset', 'qzc6powb');
  formData.append('api_key', '631366814312264');
  formData.append('timestamp', (Date.now() / 1000) | 0);
  formData.append('public_id', `${location}/${uniqueFileName}`);
  return formData;
};

export const service = async (type, params, resource) => {
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
        data: { image, ...rest },
      } = await axios.get(`/service/${params.id}`);

      return {
        data: {
          ...rest,
          image,
        },
      };
    }
    case GET_MANY: {
      const {
        data: { items },
      } = await axios.get(`/service`);
      return { data: items };
    }
    case CREATE: {
      try {
        const {
          image,
          nameLT,
          nameEN,
          descriptionLT,
          descriptionEN,
          price,
          priceDescriptionLT,
          priceDescriptionEN,
          benefitsTitleLT,
          benefitsTitleEN,
          benefitsDescriptionLT,
          benefitsDescriptionEN,
          benefits,
        } = params.data;

        const uploadedImageData = await uploadImage(getFormData(image.rawFile, 'services'));
        const uploadedImage = {
          imageUrl: uploadedImageData.secure_url,
          imageId: uploadedImageData.public_id,
        };

        const { data } = await axios.post('/service', {
          image: uploadedImage,
          nameLT,
          nameEN,
          descriptionLT,
          descriptionEN,
          price,
          priceDescriptionLT,
          priceDescriptionEN,
          benefitsTitleLT,
          benefitsTitleEN,
          benefitsDescriptionLT,
          benefitsDescriptionEN,
          benefits,
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
        const {
          id,
          image,
          nameLT,
          nameEN,
          descriptionLT,
          descriptionEN,
          price,
          priceDescriptionLT,
          priceDescriptionEN,
          benefitsTitleLT,
          benefitsTitleEN,
          benefitsDescriptionLT,
          benefitsDescriptionEN,
          benefits,
        } = params.data;

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

        await axios.put(`/service/${id}`, {
          image: uploadedImage,
          nameLT,
          nameEN,
          descriptionLT,
          descriptionEN,
          price,
          priceDescriptionLT,
          priceDescriptionEN,
          benefitsTitleLT,
          benefitsTitleEN,
          benefitsDescriptionLT,
          benefitsDescriptionEN,
          benefits,
        });

        return { data: params };
      } catch (err) {
        throw new Error('Server error');
      }
    }
    case DELETE: {
      const { id } = params;
      const { data } = await axios.delete(`/service/${id}`);
      return { data };
    }
    case DELETE_MANY: {
      const { ids } = params;
      await axios.delete('/service', { data: { ids } });
      return { data: ids };
    }
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
};
