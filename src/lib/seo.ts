import { site } from "@/lib/site";
import type { BlogPost } from "@/lib/posts";

type Meta =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

type LinkTag = { rel: string; href: string };

export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteOgImage(path?: string): string {
  return absoluteUrl(path || site.ogImage);
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
    sameAs: [site.github, site.linkedin, site.orcid, site.book],
  };
}

export function blogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Writing — ${site.name}`,
    description:
      "Field notes on systems, AI, backends, and shipping from Rohan Patel.",
    url: absoluteUrl("/blog"),
    author: { "@type": "Person", name: site.name, url: site.url },
  };
}

export function blogPostingJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteOgImage(),
    keywords: post.keywords.join(", "),
    articleSection: post.tag,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function pageSeo({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  tags,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}): { meta: Meta[]; links: LinkTag[] } {
  const url = absoluteUrl(path);
  const image = absoluteOgImage();

  const meta: Meta[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:site_name", content: site.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  if (type === "article") {
    meta.push({
      property: "article:author",
      content: site.name,
    });
    if (publishedTime) {
      meta.push({
        property: "article:published_time",
        content: publishedTime,
      });
    }
    for (const tag of tags ?? []) {
      meta.push({ property: "article:tag", content: tag });
    }
  }

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export function jsonLdScript(data: object | object[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}
