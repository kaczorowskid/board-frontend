const apiDevelopmentUrl = process.env.VITE_API_DEVELOPMENT_URL;
const apiProdUrl = process.env.VITE_API_PROD_URL;
const environment = process.env.VITE_ENVIRONMENT;
const test = process.env.VITE_TEST;

export const runtimeConfig = {
  apiDevelopmentUrl,
  apiProdUrl,
  environment,
  test
};
