import axios from 'axios';

import { TUser } from '../types/user';

const apiUrl = 'http://localhost:3000';

export const getUser = (userName: string) => axios.get(`${apiUrl}/users/?name=${userName}`);

export const postUser = (userData: TUser) =>
  axios.post(`${apiUrl}/users/`, userData, { headers: { 'Content-Type': 'application/json' } });
