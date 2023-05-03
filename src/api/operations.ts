import axios from '@/core/axios';

export const getAll = async () => {
  const { data } = await axios.get('/operations');
  return data;
};
