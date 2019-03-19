import httpService from './http-service';

export const getAll = async () => {
  const { data } = await httpService.get('api/words');
  return data;
};

export const addWord = async params => {
  const { data } = httpService.post('api/word', params);
  return data;
};
