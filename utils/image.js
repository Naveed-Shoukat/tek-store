import ImageUrlBuilder from '@sanity/image-url';
import client from './client';

function urlForThumbnail(source) {
  return ImageUrlBuilder(client).image(source).width(250).url();
}

function urlFor(source) {
  return ImageUrlBuilder(client).image(source).width(410).url();
}

export { urlForThumbnail, urlFor };
