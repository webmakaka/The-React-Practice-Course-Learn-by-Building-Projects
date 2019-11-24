import axios from 'axios';

import { LOGIN_USER } from 'actions/types';

import { USER_SERVER } from 'components/utils/misc';

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then(response => response.data);

  return {
    type: LOGIN_USER,
    payload: request
  };
}
