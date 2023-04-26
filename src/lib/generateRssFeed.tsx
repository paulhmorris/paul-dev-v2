import { Feed } from "feed";
import { mkdir, writeFile } from "fs/promises";
import { withRouter } from "next/router";
import ReactDOMServer from "react-dom/server";

import { getAllWritings } from "./getAllWritings";

export async function generateRssFeed() {
  let writings = await getAllWritings();
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  let author = {
    name: "Paul Morris",
    email: "spencer@planetaria.tech",
  };

  let feed = new Feed({
    title: author.name,
    description: "Your blog description",
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  });

  for (let writing of writings) {
    let url = `${siteUrl}/writings/${writing.slug}`;
    // @ts-ignore
    let html = ReactDOMServer.renderToStaticMarkup(withRouter(<writing.component isRssFeed />));

    feed.addItem({
      title: writing.title,
      id: url,
      link: url,
      description: writing.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(writing.date),
    });
  }

  await mkdir("./public/rss", { recursive: true });
  await Promise.all([
    writeFile("./public/rss/feed.xml", feed.rss2(), "utf8"),
    writeFile("./public/rss/feed.json", feed.json1(), "utf8"),
  ]);
}
