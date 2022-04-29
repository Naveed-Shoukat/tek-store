import client from '@sanity/client';
import config from './config';

export default client({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: '2022-04-29',
  useCdn: true,
  token: config.token,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
});
