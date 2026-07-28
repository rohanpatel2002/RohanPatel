const resume = {
  location: "Vadodara, Gujarat, India",
  phone: "+91 63532 23860",
  summary: "Software Engineer specializing in infrastructure, distributed systems, and cloud-native applications. Core contributor to three production platforms and an enterprise compliance system at Praalak Tech Solutions; independently architected and shipped platforms for freelance clients. Open-source contributor to Grafana, Supabase, and Ollama. Author of two peer-reviewed ML papers.",
  skills: [
    {
      group: "Languages",
      items: ["Go", "Python", "JavaScript (ES6+)", "TypeScript", "SQL"]
    },
    {
      group: "Backend & APIs",
      items: [
        "Go (Fiber, Chi, GORM)",
        "Node.js",
        "Express.js",
        "FastAPI",
        "Django REST Framework",
        "REST APIs",
        "GraphQL",
        "Hasura",
        "JWT",
        "OAuth 2.0",
        "Razorpay",
        "MSG91"
      ]
    },
    {
      group: "AI Engineering",
      items: [
        "LangChain",
        "LangGraph",
        "RAG",
        "OpenAI API",
        "Gemini API",
        "pgvector",
        "Semantic Search",
        "Vector Embeddings",
        "Prompt Engineering"
      ]
    },
    {
      group: "Databases & Storage",
      items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "pgvector"]
    },
    {
      group: "Cloud & DevOps",
      items: [
        "Docker",
        "Git",
        "GitHub",
        "GitHub Actions",
        "CI/CD",
        "Cloudflare",
        "Nginx",
        "Google Cloud Platform",
        "Railway",
        "Vercel",
        "Serverless / Edge Functions"
      ]
    },
    {
      group: "Frontend & Mobile",
      items: [
        "React",
        "React Native",
        "Flutter",
        "Expo",
        "TanStack Start",
        "Tailwind CSS",
        "Framer Motion",
        "Ant Design"
      ]
    },
    {
      group: "Testing & Tooling",
      items: ["Postman", "Playwright", "Vitest"]
    },
    {
      group: "Architecture & Security",
      items: [
        "Multi-tenant SaaS",
        "Distributed Systems",
        "API Design",
        "Authentication",
        "Authorization",
        "Row-Level Security (RLS)"
      ]
    },
    {
      group: "Design & Collaboration",
      items: ["Figma", "Jira"]
    }
  ],
  experience: [
    {
      role: "Software Engineer",
      org: "Praalak Tech Solutions",
      period: "Jul 2025 — Present",
      location: "Vadodara, Gujarat · Hybrid",
      blocks: [
        {
          label: "Core Engineering",
          points: [
            "Architected reusable backend services, authentication/authorization, and CI/CD pipelines — including shared multi-tenant PostgreSQL patterns (Node.js/Deno, Supabase RLS) — powering distributed systems across production platforms."
          ]
        },
        {
          label: "Coach Sophia — AI platform",
          points: [
            "Engineered the multi-tenant backend (Node.js, PostgreSQL, Supabase) for a production AI platform, implementing authentication, authorization, and Row-Level Security across serverless Edge Functions to isolate tenant data.",
            "Implemented production RAG pipelines (LangChain, LangGraph, vector embeddings) powering an AI chat experience with context-aware conversations.",
            "Delivered the React and React Native clients — chat interface, document uploads, real-time workflows — deployed to production across web and mobile."
          ]
        },
        {
          label: "Regenerative Organic Alliance — traceability & compliance",
          points: [
            "Designed a Go backend compliance engine enforcing certificate business rules, validating shipment dates against scope-certificate windows across multi-certificate, multi-site cases.",
            "Extended GraphQL/Hasura queries to support the validation engine and built a React/Ant Design frontend surfacing real-time errors; added test coverage (Go, Vitest) and shipped to production."
          ]
        },
        {
          label: "TTPro — enterprise traceability platform",
          points: [
            "Strengthened an existing enterprise traceability platform: implemented new certificate-validation features, fixed production bugs, and extended backend validation logic, building on the ROA architecture."
          ]
        }
      ]
    },
    {
      role: "Software Engineer Intern",
      org: "Physical Research Laboratory",
      period: "Jan 2026 — Jun 2026",
      location: "Ahmedabad, Gujarat · On-site",
      blocks: [
        {
          points: [
            "Engineered a Python data pipeline and PyQt6/Matplotlib desktop analysis platform for astronomical polarization camera telemetry, delivering visualization comparable to SAOImage DS9.",
            "Optimized a vectorized NumPy calibration engine computing full Stokes parameter maps; resolved rendering bottlenecks via parallel QThread computation, cutting frame-update latency to near real-time."
          ]
        }
      ]
    }
  ],
  freelance: [
    {
      role: "Freelance Software Engineer",
      org: "ClimaGrowth — AgTech advisory platform",
      period: "climagrowth.in",
      blocks: [
        {
          points: [
            "Backend architecture: independently architected a Go/Fiber API gateway with Redis caching and PostgreSQL/Supabase, integrating Open-Meteo, NASA FIRMS, and Agmarknet data sources.",
            "Mobile application: built an offline-first, multilingual (Gujarati/Hindi) React Native app for field-level crop advisory access.",
            "AI infrastructure & deployment: implemented a Gemini-powered RAG voice assistant (ClimaVOICE) and deployed the full stack — marketing site, backend, and mobile — to production."
          ]
        }
      ]
    },
    {
      role: "Freelance Software Engineer",
      org: "Florida Olive Oil — e-commerce platform",
      period: "floridaoliveoil.com",
      blocks: [
        {
          points: [
            "Delivered a production Shopify storefront — catalog, collections, checkout, theme customization — for a Florida specialty foods retailer."
          ]
        }
      ]
    }
  ],
  projects: [
    {
      name: "Docentra",
      slug: "docentra",
      points: [
        "Designed a JWT-authenticated document search API (Go, Chi, GORM) with role-based authentication and authorization over private document libraries.",
        "Containerized a Python FastEmbed semantic embedding pipeline with pgvector similarity search for reproducible deployment."
      ]
    },
    {
      name: "Tribunal",
      slug: "tribunal",
      points: [
        "Developed an AI-assisted code-review platform (TypeScript, LLMs) performing semantic pull-request analysis to detect AI-generated code changes.",
        "Integrated architecture-risk detection using service-topology awareness to surface cross-service risk before merge."
      ]
    },
    {
      name: "IronClad",
      slug: "ironclad",
      points: [
        "Developing a Go-based deployment-intelligence gate that scores blast radius from a dependency graph before release.",
        "Implementing rollback-safety scoring to flag high-risk production deployments ahead of time."
      ]
    }
  ],
  publications: [
    {
      title: "Obesity Level Prediction Using Machine Learning",
      venue: "ICICT 2025",
      detail: "Peer-reviewed paper predicting obesity levels from lifestyle and health data."
    },
    {
      title: "Predictive Analysis of Apple Stock Market Trends",
      venue: "SmartCom 2025",
      detail: "ML framework forecasting stock trends from financial indicators."
    }
  ]
};
export {
  resume as r
};
