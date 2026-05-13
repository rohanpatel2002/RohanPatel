export interface Project {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
  meta: string;
  content?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content?: string;
}

export interface Service {
  n: string;
  title: string;
  body: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
}

export const projects: Project[] = [
  {
    slug: "ironclad",
    name: "IronClad",
    tag: "Deployment Safety · Go",
    blurb: "A deployment gate that evaluates deploy intent using live dependencies, incident history, and semantic risk scoring — preventing risky pushes before they ship.",
    meta: "Apache 2.0 · Go",
    content: "IronClad is a sophisticated deployment governance tool designed to minimize production risks. By analyzing the intent of a deployment against historical incident data and current system dependencies, it provides a safety layer that traditional CI/CD pipelines often lack."
  },
  {
    slug: "docentra",
    name: "Docentra",
    tag: "AI Document Assistant · Go",
    blurb: "AI-powered document assistant with semantic search using Go, pgvector, and fastembed for intelligent retrieval across private document libraries.",
    meta: "Open Source · Go · pgvector",
    content: "Docentra leverages the power of vector databases and large language models to provide a seamless document interaction experience. It uses pgvector for efficient semantic search, allowing users to find information based on meaning rather than just keywords."
  },
  {
    slug: "tribunal",
    name: "Tribunal",
    tag: "AI Code Review · TypeScript",
    blurb: "The missing code review layer — AI that reviews what the AI wrote. Detects AI-generated code in PRs, analyzes context blindness, and briefs human reviewers.",
    meta: "MIT · TypeScript",
    content: "Tribunal addresses the growing challenge of AI-generated code. It acts as an intelligent auditor that understands the nuances of code changes, highlighting potential issues that both humans and simple linters might miss."
  },
  {
    slug: "hired-by-algorithm",
    name: "Hired by an Algorithm",
    tag: "Book · 2025",
    blurb: "A self-published guide on perfecting your resume — covering achievements, experience, and the mechanics of modern algorithmic hiring.",
    meta: "Self-published · Jun 2025",
    content: "This book is a distillation of years of research into how modern applicant tracking systems and hiring algorithms work. It provides actionable advice for job seekers to optimize their resumes for the digital age."
  },
];

export const posts: BlogPost[] = [
  {
    slug: "deployment-gates",
    title: "Why Deployment Gates Should Read Incidents",
    date: "May 2026",
    tag: "Systems",
    excerpt: "Most CI gates check syntax. The interesting ones check intent — and the best ones learn from your past outages.",
    content: "In this essay, I explore the evolution of deployment safety. Traditional gates are often too rigid or too simple. By integrating incident history, we can build smarter systems that understand the context of a change..."
  },
  {
    slug: "ai-reviewing-ai",
    title: "AI Reviewing AI: The Missing Layer",
    date: "Apr 2026",
    tag: "AI",
    excerpt: "When LLMs write your PRs, who reviews the context they couldn't see? A field report from building Tribunal.",
    content: "As AI becomes a primary author of code, the role of the reviewer shifts. We need tools that can specifically target the blind spots of LLMs..."
  },
  {
    slug: "pgvector-in-go",
    title: "Building Semantic Search in Go with pgvector",
    date: "Mar 2026",
    tag: "Backend",
    excerpt: "Notes from shipping Docentra — embedding pipelines, query design, and where Postgres genuinely shines.",
    content: "Postgres with pgvector is a powerhouse for semantic search. Here's how we implemented the embedding pipeline in Go..."
  },
  {
    slug: "hired-by-algorithm",
    title: "Hired by an Algorithm: Lessons from Writing the Book",
    date: "Feb 2026",
    tag: "Career",
    excerpt: "What modern hiring algorithms actually look at — and the small structural choices that move resumes through them.",
    content: "Writing 'Hired by an Algorithm' taught me a lot about the intersection of data science and human resources..."
  },
];

export const services: Service[] = [
  { n: "01", title: "Full-Stack Systems", body: "End-to-end web applications built with React, TypeScript, Node, and Go — engineered for scale and clarity." },
  { n: "02", title: "AI Integration", body: "LLMs, RAG, vector search, and LangChain in real products — with guardrails that actually hold." },
  { n: "03", title: "Backend & APIs", body: "Django, REST, gRPC, PostgreSQL, MongoDB. Clean contracts, predictable performance, observable systems." },
  { n: "04", title: "DevOps & CI/CD", body: "Pipelines, infrastructure, and deployment safety nets so teams ship faster without breaking things." },
];

export const processSteps: ProcessStep[] = [
  { n: "01.", title: "DISCOVER", body: "Understand the problem, the users, and the constraints before writing a single line of code." },
  { n: "02.", title: "DESIGN", body: "Map the architecture, data model, and edge cases. Decide what to build — and what not to." },
  { n: "03.", title: "BUILD", body: "Ship in tight iterations with tests, types, and observability built in from day one." },
  { n: "04.", title: "REFINE", body: "Measure, profile, harden. Polish the rough edges until the product feels inevitable." },
];

export const stack = [
  "TypeScript", "React.js", "Node.js", "React Native", "Python", "Go", "SQL", "PostgreSQL",
  "MongoDB", "Django REST", "Supabase", "LangChain", "RAG", "Vector Databases",
  "AI Integration", "Systems Design", "CI/CD", "REST APIs", "Postman", "Git",
];
