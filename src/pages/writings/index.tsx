import { GetStaticProps } from "next";
import Head from "next/head";

import { Card } from "~/components/common/Card";
import { SimpleLayout } from "~/components/SimpleLayout";
import { formatLongDate } from "~/lib/formatDate";
import type { Writing } from "~/lib/getAllWritings";
import { getAllWritings } from "~/lib/getAllWritings";

function Writing({ writing }: { writing: Writing }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/writings/${writing.slug}`}>{writing.title}</Card.Title>
        {/* @ts-ignore */}
        <Card.Eyebrow as="time" dateTime={new Date(writing.date).toISOString()} className="md:hidden" decorate>
          {formatLongDate(writing.date)}
        </Card.Eyebrow>
        <Card.Description>{writing.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      {/* @ts-ignore */}
      <Card.Eyebrow as="time" dateTime={new Date(writing.date).toISOString()} className="mt-1 hidden md:block">
        {formatLongDate(writing.date)}
      </Card.Eyebrow>
    </article>
  );
}

export default function WritingsIndex({ writings }: { writings: Writing[] }) {
  return (
    <>
      <Head>
        <title>Writings - Paul Morris</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Writing on software design, company building, and the aerospace industry."
        intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {writings.map((writing) => (
              <Writing key={writing.slug} writing={writing} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ writings: Writing[] }> = async () => {
  return {
    props: {
      writings: (await getAllWritings()).map(({ component, ...meta }) => meta),
    },
  };
};
