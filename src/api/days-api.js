import httpService from './http-service';

export const getAll = async () => {
  const { data } = await httpService.get('api/days');
  return data;
};

