import Head from "next/head";
import type { Writing } from "~/lib/getAllWritings";

import { Container } from "~/components/common/Container";

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Resume } from "~/components/Resume";
import { WritingCard } from "~/components/Writing";
import { SocialLink } from "~/components/common/SocialLink";
import { generateRssFeed } from "~/lib/generateRssFeed";
import { getAllWritings } from "~/lib/getAllWritings";

export default function Home({ writings }: { writings: Writing[] }) {
  return (
    <>
      <Head>
        <title>Paul Morris - Software designer, founder, and amateur astronaut</title>
        <meta name="description" content={"I’m Paul, a developer based in Dallas, TX. With "} />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Developer, dad, and ?.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Paul, a software designer and entrepreneur based in New York City. I’m the founder and CEO of
            Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://github.com/paulhmorris" aria-label="Follow on GitHub" icon={IconBrandGithub} />
            <SocialLink
              href="https://www.linkedin.com/in/paulmorris27"
              aria-label="Follow on LinkedIn"
              icon={IconBrandLinkedin}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {writings.map((writing) => (
              <WritingCard key={writing.slug} writing={writing} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") {
    await generateRssFeed();
  }

  return {
    props: {
      writings: (await getAllWritings()).slice(0, 4).map(({ component, ...meta }) => meta),
    },
  };
}
