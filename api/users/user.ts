import axios from '@/utils/axios'

export const signin = (payload: any) => async () => {
  return axios.post(`/auth/login`, payload);
};