import sanityClient from '@sanity/client';
import config from './config';

const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: '2022-04-29',
  useCdn: true,
  token: config.token,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
});

export default client;
