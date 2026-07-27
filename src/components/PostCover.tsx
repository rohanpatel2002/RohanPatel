import type { PostTag } from "@/lib/posts";

function seed(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

const TAG_ACCENT: Record<PostTag, string> = {
  "Systems / DevOps": "oklch(0.78 0.16 35)",
  AI: "oklch(0.78 0.12 250)",
  Backend: "oklch(0.78 0.1 180)",
  "Product / Delivery": "oklch(0.8 0.1 80)",
  Career: "oklch(0.8 0.1 55)",
  Research: "oklch(0.78 0.1 300)",
};

/** One unique cover per essay — never shared across posts. */
const SLUG_PHOTO: Record<string, string> = {
  "deployment-gates-read-incidents": "/writing/deployment-gates-read-incidents.jpg",
  "blast-radius-as-a-product-feature": "/writing/blast-radius-as-a-product-feature.jpg",
  "multi-tenant-postgres-rls": "/writing/multi-tenant-postgres-rls.jpg",
  "ci-that-asks-should-we": "/writing/ci-that-asks-should-we.jpg",
  "compliance-engines-in-go": "/writing/compliance-engines-in-go.jpg",
  "ai-reviewing-ai": "/writing/ai-reviewing-ai.jpg",
  "scientific-software-stokes-maps": "/writing/scientific-software-stokes-maps.jpg",
  "offline-first-field-apps": "/writing/offline-first-field-apps.jpg",
  "topology-aware-code-review": "/writing/topology-aware-code-review.jpg",
  "ambiguous-briefs-forward-deployed": "/writing/ambiguous-briefs-forward-deployed.jpg",
  "semantic-search-go-pgvector": "/writing/semantic-search-go-pgvector.jpg",
  "hired-by-an-algorithm-lessons": "/writing/hired-by-an-algorithm-lessons.jpg",
  "rag-in-multi-tenant-production": "/writing/rag-in-multi-tenant-production.jpg",
  "eval-harnesses-before-prompt-tweaks": "/writing/eval-harnesses-before-prompt-tweaks.jpg",
  "tool-calls-need-contracts": "/writing/tool-calls-need-contracts.jpg",
  "idempotency-keys-are-product": "/writing/idempotency-keys-are-product.jpg",
  "bff-keeps-fullstack-honest": "/writing/bff-keeps-fullstack-honest.jpg",
  "slos-before-more-dashboards": "/writing/slos-before-more-dashboards.jpg",
};

type Props = {
  slug: string;
  tag: PostTag;
  className?: string;
  featured?: boolean;
};

/** Unique generated cover per essay + light geometric overlay. */
export function PostCover({ slug, tag, className = "", featured = false }: Props) {
  const s = seed(slug);
  const accent = TAG_ACCENT[tag] ?? "oklch(0.7 0.22 35)";
  const photo = SLUG_PHOTO[slug] ?? `/writing/${slug}.jpg`;
  const rot = (s % 18) - 9;
  const offset = (s % 30) - 15;
  const focusX = 40 + (s % 20);
  const focusY = 35 + ((s >> 3) % 25);

  return (
    <div
      className={`relative overflow-hidden bg-[oklch(0.12_0.01_270)] ${className}`}
      aria-hidden
    >
      <img
        src={photo}
        alt=""
        className="absolute inset-0 h-full w-full scale-[1.03] object-cover"
        style={{ objectPosition: `${focusX}% ${focusY}%` }}
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-black/25" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <g transform={`translate(400 250) rotate(${rot})`} opacity="0.55">
          {s % 3 === 0 && (
            <>
              <circle r="130" fill="none" stroke={accent} strokeOpacity="0.55" strokeWidth="1.25" />
              <circle r="18" fill={accent} fillOpacity="0.85" />
            </>
          )}
          {s % 3 === 1 && (
            <>
              <rect
                x="-110"
                y="-110"
                width="220"
                height="220"
                fill="none"
                stroke={accent}
                strokeOpacity="0.55"
                strokeWidth="1.25"
                transform="rotate(12)"
              />
              <polygon points="0,-24 21,13 -21,13" fill={accent} fillOpacity="0.9" />
            </>
          )}
          {s % 3 === 2 && (
            <>
              <path
                d="M-140 0 L0 -88 L140 0 L0 88 Z"
                fill="none"
                stroke={accent}
                strokeOpacity="0.55"
                strokeWidth="1.25"
              />
              <circle r="14" fill={accent} fillOpacity="0.9" />
            </>
          )}
        </g>

        <path
          d={`M ${50 + (s % 60)} 430 Q 400 ${300 + offset} ${740 - (s % 50)} 70`}
          fill="none"
          stroke={accent}
          strokeOpacity="0.35"
          strokeWidth={featured ? 2 : 1.4}
        />

        <path d="M44 44 H96 M44 44 V96" stroke="white" strokeOpacity="0.3" strokeWidth="1.25" fill="none" />
        <path d="M756 456 H704 M756 456 V404" stroke="white" strokeOpacity="0.3" strokeWidth="1.25" fill="none" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
      <p className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.28em] text-white/75 sm:bottom-5 sm:left-5">
        {tag}
      </p>
    </div>
  );
}
