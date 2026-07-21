import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedProjects() {
  const items = await getCollection('projects', ({ data }) => !data.draft);
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects() {
  const items = await getPublishedProjects();
  return items.filter((item) => item.data.featured);
}

export async function getDeliverablesForCompany(companySlug: string) {
  const items = await getCollection(
    'deliverables',
    ({ data }) => !data.draft && data.business === companySlug,
  );
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getPublishedCaseStudies() {
  const items = await getCollection('case-studies', ({ data }) => !data.draft);
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedCaseStudy() {
  const items = await getPublishedCaseStudies();
  return items.find((item) => item.data.featured) ?? items[0];
}

export async function getPublishedArticles() {
  const items = await getCollection('articles', ({ data }) => !data.draft);
  return items.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export async function getCertifications() {
  const items = await getCollection('certifications');
  return items.sort((a, b) => b.data.issueDate.valueOf() - a.data.issueDate.valueOf());
}

export async function getPrompts() {
  return getCollection('prompts');
}

export async function getGalleryItems() {
  return getCollection('gallery');
}

export async function getExperienceTimeline() {
  const items = await getCollection('experience');
  return items.sort((a, b) => b.data.startDate.valueOf() - a.data.startDate.valueOf());
}

export type ProjectEntry = CollectionEntry<'projects'>;
export type DeliverableEntry = CollectionEntry<'deliverables'>;
export type CaseStudyEntry = CollectionEntry<'case-studies'>;
export type ArticleEntry = CollectionEntry<'articles'>;
export type CertificationEntry = CollectionEntry<'certifications'>;
