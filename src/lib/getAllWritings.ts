import glob from "fast-glob";
import * as path from "path";

export type Writing = {
  slug: string;
  date: string;
  title: string;
  description: string;
  author: string;
  component?: any;
};

async function importWriting(writingFilename: string) {
  const { meta, default: component } = await import(`../pages/writings/${writingFilename}`);
  return {
    slug: writingFilename.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllWritings() {
  const writingFilenames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: path.join(process.cwd(), "src/pages/writings"),
  });

  const writings: Writing[] = await Promise.all(writingFilenames.map(importWriting));
  return writings.sort((a, z) => new Date(z.date).getTime() - new Date(a.date).getTime());
}
