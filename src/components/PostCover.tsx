import type { PostTag } from "@/lib/posts";

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

/** Plain photo cover — unique per essay. */
export function PostCover({ slug, className = "" }: Props) {
  const photo = SLUG_PHOTO[slug] ?? `/writing/${slug}.jpg`;

  return (
    <div
      className={`relative overflow-hidden bg-[oklch(0.12_0.01_270)] ${className}`}
      aria-hidden
    >
      <img
        src={photo}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
