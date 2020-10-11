import { benefit, profile, service, question, contacts, post, postCategory } from './resources';

const actions = async (type, resource, params) => {
  switch (resource) {
    case 'service': {
      return service(type, params, resource);
    }
    case 'benefit': {
      return benefit(type, params, resource);
    }
    case 'contacts': {
      return contacts(type, params, resource);
    }
    case 'question': {
      return question(type, params, resource);
    }
    case 'post': {
      return post(type, params, resource);
    }
    case 'profile': {
      return profile(type, params, resource);
    }
    case 'post-category': {
      return postCategory(type, params, resource);
    }
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
};

export default (type, resource, params) => {
  return actions(type, resource, params);
};
