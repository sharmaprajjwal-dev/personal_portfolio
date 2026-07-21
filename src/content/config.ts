import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      industry: z.string(),
      location: z.string().optional(),
      summary: z.string(),
      challenge: z.string().optional(),
      approach: z.string().optional(),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

const deliverables = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // Must equal the parent company's project slug, e.g. "shaviv-nail-studio".
      business: z.string(),
      title: z.string(),
      category: z.string(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      stack: z.array(z.string()).default([]),
      location: z.string().optional(),
      project_type: z.string().optional(),
      client_type: z.enum(['real-client', 'demonstration']).optional(),
      confidentiality: z.string().optional(),
      project_date: z.coerce.date().optional(),
      coverImage: image().optional(),
      downloadUrl: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      industry: z.string(),
      problem: z.string(),
      approach: z.string(),
      results: z.array(z.string()).default([]),
      metrics: z.record(z.string()).default({}),
      coverImage: image().optional(),
      // Shown as a small note near the top of the case study — use this for
      // confidentiality context (e.g. "names anonymized / fictionalized client").
      disclaimer: z.string().optional(),
      // Path to a downloadable version of the full report (PDF, .md, etc), placed in
      // /public. If set, a "Download full report" button appears on the case study page.
      downloadUrl: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

const articles = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.string(),
      publishDate: z.date(),
      coverImage: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const certifications = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      institution: z.string(),
      issueDate: z.date(),
      credentialUrl: z.string().url().optional(),
      image: image().optional(),
    }),
});

const prompts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'Business',
      'Marketing',
      'SEO',
      'AI',
      'Automation',
      'Research',
      'Writing',
      'Analysis',
      'Productivity',
    ]),
    tags: z.array(z.string()).default([]),
    useCase: z.string(),
  }),
});

const gallery = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum([
        'canva',
        'creatives',
        'campaigns',
        'websites',
        'infographics',
        'photography',
      ]),
      image: image(),
      client: z.string().optional(),
    }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(), // omit for "current"
    bullets: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = {
  projects,
  deliverables,
  'case-studies': caseStudies,
  articles,
  certifications,
  prompts,
  gallery,
  experience,
};
