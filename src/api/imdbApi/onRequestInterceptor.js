import { API_KEY } from "./apiInfo";

export const onSuccessRequest = (config) => {
  // eslint-disable-next-line no-param-reassign
  config.url += `api_key=${API_KEY}`;

  return config;
};

export const onFailedRequest = (error) => Promise.reject(error);
