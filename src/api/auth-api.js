import http from './http-service';

export const validateToken = async () => {
  const { data } = await http.get('auth/validate');
  return data;
};
