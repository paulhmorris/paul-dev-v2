import { Card } from "~/components/common/Card";
import { formatLongDate } from "~/lib/formatDate";
import { Writing } from "~/lib/getAllWritings";

export function WritingCard({ writing }: { writing: Writing }) {
  return (
    <Card as="article">
      <Card.Title href={`/writings/${writing.slug}`}>{writing.title}</Card.Title>
      {/* @ts-ignore */}
      <Card.Eyebrow as="time" dateTime={writing.date} decorate>
        {formatLongDate(writing.date)}
      </Card.Eyebrow>
      <Card.Description>{writing.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}
