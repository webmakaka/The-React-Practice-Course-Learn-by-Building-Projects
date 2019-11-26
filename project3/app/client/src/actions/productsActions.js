import axios from 'axios';

import {
  GET_PRODUCTS_BY_SELL,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_BRANDS,
  GET_WOODS
} from 'actions/types';

import { PRODUCT_SERVER } from 'components/utils/misc';

export function getProductsBySell() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then(response => response.data.articles);

  return {
    type: GET_PRODUCTS_BY_SELL,
    payload: request
  };
}

export function getProductsByArrival() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data.articles);

  return {
    type: GET_PRODUCTS_BY_ARRIVAL,
    payload: request
  };
}

///////////////////////////////////
//            CATEGOREIS
//////////////////////////////////

export function getBrands() {
  const request = axios
    .get(`${PRODUCT_SERVER}/brands`)
    .then(response => response.data.brands);

  return {
    type: GET_BRANDS,
    payload: request
  };
}

export function getWoods() {
  const request = axios
    .get(`${PRODUCT_SERVER}/woods`)
    .then(response => response.data.woods);

  return {
    type: GET_WOODS,
    payload: request
  };
}
