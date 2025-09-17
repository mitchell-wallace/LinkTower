import type { CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

const REVISION_PATTERN = /^revision-(\d+)$/;

type GroupedEntries = {
  baseSlug: string;
  original?: BlogEntry;
  revisions: BlogEntry[];
};

export interface RevisionMeta {
  baseSlug: string;
  revisionSegment?: string;
  revisionNumber: number;
  isRevision: boolean;
}

export function getRevisionMeta(entry: BlogEntry): RevisionMeta {
  const segments = entry.slug.split("/");
  const baseSlug = segments[0];
  const revisionSegment = segments.length === 2 ? segments[1] : undefined;
  const match = revisionSegment ? REVISION_PATTERN.exec(revisionSegment) : null;
  const revisionNumber = match ? Number.parseInt(match[1], 10) : 0;
  return {
    baseSlug,
    revisionSegment: match ? revisionSegment : undefined,
    revisionNumber,
    isRevision: Boolean(match),
  };
}

export function isRevisionEntry(entry: BlogEntry): boolean {
  return getRevisionMeta(entry).isRevision;
}

export function groupBlogEntries(entries: BlogEntry[]): Map<string, GroupedEntries> {
  const map = new Map<string, GroupedEntries>();
  for (const entry of entries) {
    const meta = getRevisionMeta(entry);
    const baseSlug = meta.baseSlug;
    if (!map.has(baseSlug)) {
      map.set(baseSlug, { baseSlug, revisions: [] });
    }
    const group = map.get(baseSlug)!;
    if (meta.isRevision) {
      group.revisions.push(entry);
    } else {
      group.original = entry;
    }
  }
  return map;
}

export function sortRevisionsAscending(revisions: BlogEntry[]): BlogEntry[] {
  return [...revisions].sort((a, b) => {
    const aMeta = getRevisionMeta(a);
    const bMeta = getRevisionMeta(b);
    return aMeta.revisionNumber - bMeta.revisionNumber;
  });
}

export function sortRevisionsDescending(revisions: BlogEntry[]): BlogEntry[] {
  return [...revisions].sort((a, b) => {
    const aMeta = getRevisionMeta(a);
    const bMeta = getRevisionMeta(b);
    return bMeta.revisionNumber - aMeta.revisionNumber;
  });
}

export function getLatestEntry(group: GroupedEntries): BlogEntry | undefined {
  if (group.revisions.length === 0) {
    return group.original;
  }
  return sortRevisionsDescending(group.revisions)[0] ?? group.original;
}

export function getBaseEntries(entries: BlogEntry[]): BlogEntry[] {
  return entries.filter((entry) => !isRevisionEntry(entry));
}
