import { marked } from "marked";

export type PostTag =
  | "Systems / DevOps"
  | "AI"
  | "Backend"
  | "Product / Delivery"
  | "Career"
  | "Research";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO YYYY-MM-DD
  updated?: string;
  tag: PostTag;
  keywords: string[];
  relatedProject?: string;
  draft?: boolean;
  body: string;
  readingMinutes: number;
  html: string;
}

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  updated?: string;
  tag?: string;
  keywords?: string;
  relatedProject?: string;
  draft?: string | boolean;
  slug?: string;
};

const modules = import.meta.glob("../content/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

marked.setOptions({ gfm: true, breaks: false });

function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw.trim() };

  const data: Frontmatter = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim() as keyof Frontmatter;
    let value = line.slice(i + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: match[2].trim() };
}

function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function slugFromPath(path: string): string {
  const base = path.split("/").pop() ?? path;
  return base.replace(/\.md$/, "");
}

function loadPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, raw] of Object.entries(modules)) {
    const { data, body } = parseFrontmatter(raw);
    const slug = data.slug || slugFromPath(path);
    if (!data.title || !data.description || !data.date || !data.tag) {
      throw new Error(`Post ${slug} is missing required frontmatter`);
    }

    const draft =
      data.draft === true ||
      data.draft === "true" ||
      String(data.draft).toLowerCase() === "true";

    const keywords = (data.keywords ?? "")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);

    posts.push({
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      updated: data.updated,
      tag: data.tag as PostTag,
      keywords,
      relatedProject: data.relatedProject,
      draft,
      body,
      readingMinutes: readingMinutes(body),
      html: marked.parse(body, { async: false }) as string,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

const allPosts = loadPosts();

/** Published posts only, newest first. */
export const posts: BlogPost[] = allPosts.filter((p) => !p.draft);

export const allTags: PostTag[] = [
  ...new Set(posts.map((p) => p.tag)),
].sort() as PostTag[];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): {
  prev?: BlogPost;
  next?: BlogPost;
} {
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return {
    next: posts[i - 1], // newer
    prev: posts[i + 1], // older
  };
}

export function getPostsByProject(projectSlug: string): BlogPost[] {
  return posts.filter((p) => p.relatedProject === projectSlug);
}

export function formatPostDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
