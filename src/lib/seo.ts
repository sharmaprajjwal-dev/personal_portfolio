import { SITE } from '../data/site';

export type SEOInput = {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalPath?: string; // e.g. '/about'
  type?: 'website' | 'article' | 'profile';
};

export function buildMeta(input: SEOInput = {}) {
  const title = input.title ? SITE.titleTemplate.replace('%s', input.title) : SITE.title;
  const description = input.description ?? SITE.description;
  const ogImage = input.ogImage ?? SITE.defaultOgImage;
  const canonical = `${SITE.url}${input.canonicalPath ?? ''}`;
  const type = input.type ?? 'website';

  return { title, description, ogImage, canonical, type };
}
