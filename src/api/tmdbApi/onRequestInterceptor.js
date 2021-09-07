/* eslint-disable no-param-reassign */
import { API_KEY } from "./apiInfo";

export const onSuccessRequest = (config) => {
  const queryParams = [];
  queryParams.push(`api_key=${API_KEY}`);
  if (config.genre) {
    queryParams.push(`with_genres=${config.genre}`);
  }
  if (config.page && config.page >= 1 && config.page <= 100) {
    queryParams.push(`page=${config.page}`);
  }
  config.url += queryParams.join("&");
  console.log(config.url);
  return config;
};

export const onFailedRequest = (error) => Promise.reject(error);
