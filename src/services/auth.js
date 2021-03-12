import { post } from './request';
import { get } from './request';

export const signup = (fullName, rent, ownerId, email, password) => {
  return post('/api/v1/auth/signup', {
    name: fullName,
    monthlyCost: rent,
    ownerId,
    email,
    password,
  });
};

export const loginPost = (email, password) => {
  return post('/api/v1/auth/login', {
    email,
    password
  });
};

export const logout = () => {
  return get('/api/v1/auth/logout');
};
