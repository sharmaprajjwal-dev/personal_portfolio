export type SkillGroup = {
  category: string;
  skills: { name: string; level: number }[]; // level: 0-100
};

export const SKILLS_MATRIX: SkillGroup[] = [
  {
    category: 'Marketing & Growth',
    skills: [
      { name: 'Digital Marketing & Paid Media', level: 92 },
      { name: 'SEO & Organic Growth', level: 88 },
      { name: 'Email & Lifecycle Marketing', level: 84 },
      { name: 'Marketing ROI Optimisation', level: 90 },
    ],
  },
  {
    category: 'Business & Operations',
    skills: [
      { name: 'Procurement & Vendor Sourcing', level: 90 },
      { name: 'Inventory & Logistics Management', level: 86 },
      { name: 'Budget Management', level: 85 },
      { name: 'Business Process Improvement', level: 87 },
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Workflow Automation (Zapier, Make, n8n)', level: 86 },
      { name: 'AI Content Tools (ChatGPT, Claude, Gemini)', level: 88 },
      { name: 'Applied AI for Business', level: 87 },
    ],
  },
];

export const CORE_EXPERTISE = [
  {
    title: 'Business Strategy',
    description: 'Turning ambiguous problems into structured plans — from procurement to product roadmapping.',
  },
  {
    title: 'Digital Growth',
    description: 'Paid and organic marketing that grows revenue while cutting cost-per-acquisition, not just spend.',
  },
  {
    title: 'Applied AI & Automation',
    description: 'ChatGPT, Claude, Gemini, Zapier, Make.com and n8n woven into real workflows, not novelty.',
  },
  {
    title: 'Operations & Procurement',
    description: 'International vendor sourcing, inventory, and logistics — the operating side of the business.',
  },
];
