import http from '../http-common';

export const getUsers = () => {
  return http.get('/users');
}

export const getUser = (id) => {
  return http.get(`/users/${id}`);
}

export const createUser = (data) => {
  return http.post('/users', data)
}