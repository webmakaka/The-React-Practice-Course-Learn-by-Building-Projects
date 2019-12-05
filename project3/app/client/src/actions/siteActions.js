import axios from 'axios';

import { GET_SITE_DATA, UPDATE_SITE_DATA } from 'actions/types';

import { SITE_SERVER } from 'components/utils/misc';

export function getSiteData() {
  const request = axios.get(`${SITE_SERVER}/site_data`).then(response => {
    return response.data.siteInfo;
  });

  return {
    type: GET_SITE_DATA,
    payload: request
  };
}

export function updateSiteData(dataToSubmit) {
  const request = axios
    .post(`${SITE_SERVER}/site_data`, dataToSubmit)
    .then(response => {
      return response.data;
    });

  return {
    type: UPDATE_SITE_DATA,
    payload: request
  };
}
