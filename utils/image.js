import ImageUrlBuilder from '@sanity/image-url';
import client from './client';

function urlForThumbnail(source) {
  const singleImgSrc = source[0];
  return ImageUrlBuilder(client).image(singleImgSrc).width(250).url();
}

function urlFor(source) {
  return ImageUrlBuilder(client).image(source).width(410)?.url();
}

export { urlForThumbnail, urlFor };
