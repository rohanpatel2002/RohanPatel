export interface Project {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
  meta: string;
  content?: string;
  specs?: Record<string, string>;
  codeSnippet?: string;
  repoUrl?: string;
  productUrl?: string;
  outcomes?: string[];
  roles?: string[];
  problem?: string;
  solution?: string;
  architecture?: string[];
  stackLayers?: { layer: string; tech: string }[];
  highlights?: string[];
  status?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content?: string;
  draft?: boolean;
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
    blurb:
      "A deployment gate that evaluates deploy intent using live dependencies, incident history, and semantic risk scoring — preventing risky pushes before they ship.",
    meta: "Apache 2.0 · Go · Python · TypeScript",
    repoUrl: "https://github.com/rohanpatel2002/IronClad",
    roles: ["SWE / SDE", "DevOps", "Systems"],
    status: "Open source · monorepo in active build",
    problem:
      "Modern CI pipelines answer whether code compiles, tests pass, and lint is clean. They rarely ask whether a change is semantically dangerous for current production conditions — blast radius, reversibility, or historically bad deploy windows.",
    solution:
      "IRONCLAD sits in front of CI/CD promotion as a semantic deployment risk engine. For each candidate it maps affected services, correlates incident/deploy history, scores risk across blast radius, reversibility, and timing, then returns ALLOW, WARN, or BLOCK with a plain-English explanation and mitigation.",
    outcomes: [
      "Validates safety of deployment intent — not just correctness of code",
      "Scores blast radius, reversibility, and timing risk as first-class axes",
      "Emits ALLOW / WARN / BLOCK with actionable explanations for operators",
    ],
    highlights: [
      "Blast radius: how many downstream services and journeys are exposed if the change fails",
      "Reversibility: can the deploy be rolled back within an org-defined SLO (e.g. under 60 seconds)",
      "Timing risk: peak traffic, post-migration windows, thin on-call coverage",
      "Immutable decision explanations for audit and post-mortems",
    ],
    architecture: [
      "Ingest deploy request + diff metadata from CI/CD",
      "Classify change intent (functional, infra, migration, rollout)",
      "Resolve impact graph from changed components",
      "Score risk axes and consult historical failure grammar / incidents",
      "Emit decision + explanation; log outcome for learning",
    ],
    stackLayers: [
      { layer: "Gate + interceptors", tech: "Go" },
      { layer: "Topology / blast radius", tech: "Go" },
      { layer: "Semantic + scoring", tech: "Python" },
      { layer: "Dashboard", tech: "TypeScript + React" },
      { layer: "Data store", tech: "PostgreSQL" },
    ],
    specs: {
      License: "Apache 2.0",
      Decision: "ALLOW / WARN / BLOCK",
      Latency: "P95 goal < 2s",
      Layout: "Monorepo services + dashboard",
    },
    codeSnippet: `func (g *Gate) Evaluate(intent DeploymentIntent) (RiskScore, error) {\n\t// Fan-out check across incident history and live dependencies\n\tg.mu.RLock()\n\tdefer g.mu.RUnlock()\n\n\tscore := g.RiskModel.Calculate(intent)\n\tif score > g.Threshold {\n\t\treturn score, ErrHighRiskDeployment\n\t}\n\treturn score, nil\n}`,
    content:
      "IRONCLAD is a semantic production risk gate: it asks whether what the code is trying to do matches what the system can safely absorb right now. Traditional pipelines validate correctness; IRONCLAD validates deploy intent against dependency topology, incident history, and timing intelligence.",
  },
  {
    slug: "docentra",
    name: "Docentra",
    tag: "AI Document Assistant · Go",
    blurb:
      "AI-powered document assistant with semantic search using Go, pgvector, and fastembed for intelligent retrieval across private document libraries.",
    meta: "Open Source · Go · pgvector · Docker",
    repoUrl: "https://github.com/rohanpatel2002/Docentra",
    roles: ["AI Engineer", "Backend", "Full-Stack"],
    status: "Open source · Docker Compose ready",
    problem:
      "Teams need meaning-based search over private TXT/PDF libraries without shipping documents into a third-party black box. Keyword search misses intent; managed RAG often means data leaving your boundary.",
    solution:
      "Docentra is a secure Go API for JWT-authenticated document upload, parsing, background embedding, and semantic search/query over Postgres with pgvector. A Python FastEmbed CLI produces embeddings; Docker Compose runs the full stack locally.",
    outcomes: [
      "JWT-authenticated APIs for document management and vector search",
      "Upload → extract → chunk → embed → store pipeline for TXT/PDF",
      "Similarity search via pgvector without outsourcing the corpus",
    ],
    highlights: [
      "POST /api/documents uploads a file and triggers async processing",
      "Python FastEmbed CLI with model BAAI/bge-small-en-v1.5",
      "POST /api/search and POST /api/query embed the query and rank chunks",
      "Health endpoint and Compose-first local development",
    ],
    architecture: [
      "Client hits Go API (Chi + GORM)",
      "API stores uploads and document metadata in Postgres",
      "Background processing extracts text, chunks it, and calls FastEmbed CLI",
      "Chunk embeddings land in document_chunks via pgvector",
      "Search/query embeds the question and runs similarity (`<=>`)",
    ],
    stackLayers: [
      { layer: "API", tech: "Go · Chi · GORM" },
      { layer: "Embeddings", tech: "Python · fastembed · bge-small-en-v1.5" },
      { layer: "Database", tech: "Postgres + pgvector" },
      { layer: "Runtime", tech: "Docker + Docker Compose" },
    ],
    specs: {
      Auth: "JWT",
      Search: "pgvector similarity",
      Formats: "TXT / PDF",
      Runtime: "Docker Compose",
    },
    codeSnippet: `func (s *Search) Query(text string) ([]Document, error) {\n\tvector, err := s.Embedder.Generate(text)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\n\t// Cosine similarity search via pgvector\n\treturn s.DB.SearchVectors("embeddings", vector, 10)\n}`,
    content:
      "Docentra is a private-document semantic search stack: Go for auth and orchestration, FastEmbed for vectors, and Postgres/pgvector for retrieval. Built for RAG-style workflows where the library stays under your control.",
  },
  {
    slug: "tribunal",
    name: "Tribunal",
    tag: "AI Code Review · Go · Python · TS",
    blurb:
      "The missing code review layer — AI that reviews what the AI wrote. Detects AI-generated code in PRs, analyzes context blindness, and briefs human reviewers.",
    meta: "MIT · Go · Python · TypeScript",
    repoUrl: "https://github.com/rohanpatel2002/Tribunal",
    roles: ["AI Engineer", "Full-Stack", "Forward Deployed"],
    status: "Early development · beta targeted Q2 2026",
    problem:
      "AI tools write syntactically impressive code that is often semantically dangerous — migrations that ignore table scale, retries against non-idempotent APIs, config flips with wide blast radius. Linters catch syntax; they miss operational context. Human senior review does not scale with Copilot volume.",
    solution:
      "TRIBUNAL acts as an automated senior engineer in CI: DETECT AI authorship, ANALYZE context blindness against topology/incidents/runbooks, BRIEF the human reviewer so review time drops from roughly 30 minutes to about 30 seconds per change with full operational context.",
    outcomes: [
      "Three-phase pipeline: detect → analyze → brief",
      "Flags scale, idempotency, cascade, incident-pattern, and race-condition blindness",
      "Posts human-readable briefings into the PR review flow",
    ],
    highlights: [
      "Scale blindness — e.g. migrations on multi-billion-row tables with zero-downtime constraints",
      "Idempotency blindness — retries against non-idempotent payment/API calls",
      "Cascade blindness — config/flag changes spanning dozens of services",
      "Incident pattern blindness — repeating known failure modes",
      "Dependency and race-condition blindness in shared libraries and concurrent code",
    ],
    architecture: [
      "PR event from GitHub / GitLab / Gitea",
      "Go interceptor: webhook, changed files, 3-signal AI authorship detection",
      "Go context graph: topology, incidents, dependencies",
      "PostgreSQL context layer for persistent correlations",
      "Python semantic analyzer (Claude) + briefing generator",
      "TypeScript PR overlay: check runs, annotations, risk heatmap",
    ],
    stackLayers: [
      { layer: "PR interceptor / detector", tech: "Go 1.21+" },
      { layer: "Context graph", tech: "Go" },
      { layer: "Semantic analyzer", tech: "Python 3.11+ · Claude API" },
      { layer: "PR UI overlay", tech: "TypeScript + React" },
      { layer: "Data layer", tech: "PostgreSQL 15+" },
    ],
    specs: {
      License: "MIT",
      Detect: "~2ms / file (Go)",
      Analyze: "~5s high-risk section",
      Runtime: "Docker Compose",
    },
    codeSnippet: `async function analyzePR(diff: string) {\n\tconst analysis = await tribunal.analyze(diff);\n\t\n\tif (analysis.isAiGenerated && analysis.riskFactor > 0.7) {\n\t\tawait github.postComment(analysis.brief);\n\t}\n}`,
    content:
      "TRIBUNAL fills the gap between perfect syntax and catastrophic semantics. It specializes in what AI-generated diffs did not know — service scale, incident history, dependency blast radius — and briefs humans so review capacity can keep up with AI authorship.",
  },
  {
    slug: "hired-by-algorithm",
    name: "Hired by an Algorithm",
    tag: "Book · 2025",
    blurb:
      "A self-published guide on perfecting your resume — covering achievements, experience, and the mechanics of modern algorithmic hiring.",
    meta: "Self-published · Jun 2025",
    productUrl:
      "https://www.amazon.in/Hired-Algorithm-Rohan-Patel-ebook/dp/B0FG3DSQ7W",
    roles: ["Systems Thinking", "Research", "Writing"],
    status: "Published",
    problem:
      "Applicants write for humans. Hiring funnels first parse resumes with ATS and ranking systems that flatten layout, map section headers to taxonomies, and weigh proximity of verbs to metrics.",
    solution:
      "Hired by an Algorithm turns parser behavior into concrete document contracts: context density, canonical section schemas, and optical stream flattening — so resumes survive the algorithmic gate without sacrificing clarity.",
    outcomes: [
      "Distills ATS and hiring-algorithm behavior into actionable writing rules",
      "Informed by research across 60+ document parsers",
      "Published as a system-centric guide for modern job search",
    ],
    highlights: [
      "Context density — action verbs coupled with absolute metrics",
      "Canonical headers that map to standard taxonomy nodes",
      "Single-column flow that survives OCR / stream flattening",
    ],
    architecture: [
      "Study how parsers extract and score resume text",
      "Encode rules as document engineering contracts",
      "Publish actionable guidance for applicants and builders",
    ],
    stackLayers: [
      { layer: "Research", tech: "60+ document parsers" },
      { layer: "Format", tech: "System-centric writing" },
      { layer: "Distribution", tech: "Amazon Kindle" },
    ],
    specs: {
      Topic: "ATS Optimization",
      Research: "60+ Document Parsers",
      Format: "Ebook",
      Status: "Published",
    },
    codeSnippet: `// Rule: Optical Stream Flattening\nfunc Normalize(layout Node) string {\n\tif layout.IsMultiColumn() {\n\t\treturn Flatten(layout)\n\t}\n\treturn layout.Text()\n}`,
    content:
      "Hired by an Algorithm is a field guide to how applicant tracking systems and hiring algorithms actually parse resumes. It turns parser quirks into engineering-style contracts.",
  },
];

export const posts: BlogPost[] = [
  {
    slug: "deployment-gates",
    title: "Why Deployment Gates Should Read Incidents",
    date: "May 2026",
    tag: "Systems",
    excerpt:
      "Most CI gates check syntax. The interesting ones check intent — and the best ones learn from your past outages.",
    content:
      "In this essay, I explore the evolution of deployment safety. Traditional gates are often too rigid or too simple. By integrating incident history, we can build smarter systems that understand the context of a change.",
    draft: true,
  },
  {
    slug: "ai-reviewing-ai",
    title: "AI Reviewing AI: The Missing Layer",
    date: "Apr 2026",
    tag: "AI",
    excerpt:
      "When LLMs write your PRs, who reviews the context they couldn't see? A field report from building Tribunal.",
    content:
      "As AI becomes a primary author of code, the role of the reviewer shifts. We need tools that can specifically target the blind spots of LLMs.",
    draft: true,
  },
  {
    slug: "pgvector-in-go",
    title: "Building Semantic Search in Go with pgvector",
    date: "Mar 2026",
    tag: "Backend",
    excerpt:
      "Notes from shipping Docentra — embedding pipelines, query design, and where Postgres genuinely shines.",
    content:
      "Postgres with pgvector is a powerhouse for semantic search. Here's how we implemented the embedding pipeline in Go.",
    draft: true,
  },
  {
    slug: "hired-by-algorithm",
    title: "Hired by an Algorithm: Lessons from Writing the Book",
    date: "Feb 2026",
    tag: "Career",
    excerpt:
      "What modern hiring algorithms actually look at — and the small structural choices that move resumes through them.",
    content:
      "Writing 'Hired by an Algorithm' taught me a lot about the intersection of data science and human resources.",
    draft: true,
  },
];

/** Kept for the unlinked /services route; not sold as agency offerings on the homepage. */
export const services: Service[] = [
  {
    n: "01",
    title: "Full-Stack Systems",
    body: "End-to-end web applications built with React, TypeScript, Node, and Go — engineered for scale and clarity.",
  },
  {
    n: "02",
    title: "AI Integration",
    body: "LLMs, RAG, vector search, and LangChain in real products — with guardrails that actually hold.",
  },
  {
    n: "03",
    title: "Backend & APIs",
    body: "Django, REST, gRPC, PostgreSQL, MongoDB. Clean contracts, predictable performance, observable systems.",
  },
  {
    n: "04",
    title: "DevOps & CI/CD",
    body: "Pipelines, infrastructure, and deployment safety nets so teams ship faster without breaking things.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    n: "01.",
    title: "DISCOVER",
    body: "Understand the problem, the users, and the constraints before writing a single line of code.",
  },
  {
    n: "02.",
    title: "DESIGN",
    body: "Map the architecture, data model, and edge cases. Decide what to build — and what not to.",
  },
  {
    n: "03.",
    title: "BUILD",
    body: "Ship in tight iterations with tests, types, and observability built in from day one.",
  },
  {
    n: "04.",
    title: "REFINE",
    body: "Measure, profile, harden. Polish the rough edges until the product feels inevitable.",
  },
];

export const stack = [
  "TypeScript",
  "React.js",
  "Node.js",
  "React Native",
  "Python",
  "Go",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Django REST",
  "Supabase",
  "LangChain",
  "RAG",
  "Vector Databases",
  "AI Integration",
  "Systems Design",
  "CI/CD",
  "REST APIs",
  "Postman",
  "Git",
];
