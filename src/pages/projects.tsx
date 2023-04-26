import { IconLink } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";

import { SimpleLayout } from "~/components/SimpleLayout";
import { Card } from "~/components/common/Card";
import logoCosmos from "~/images/logos/cosmos.svg";
import logoHelioStream from "~/images/logos/helio-stream.svg";
import logoOpenShuttle from "~/images/logos/open-shuttle.svg";
import logoTide from "~/images/logos/tide.svg";

const projects = [
  {
    name: "Tide Cleaners Campus",
    description:
      "A Next.js web application for Tide Cleaners' campus laundry service used by 5,000+ students across the country.",
    link: { href: "https://campus.tidecleaners.com/", label: "campus.tidecleaners.com" },
    logo: logoTide,
  },
  {
    name: "HelioStream",
    description: "Real-time video streaming library, optimized for interstellar transmission.",
    link: { href: "#", label: "github.com" },
    logo: logoHelioStream,
  },
  {
    name: "cosmOS",
    description: "The operating system that powers our Planetaria space shuttles.",
    link: { href: "#", label: "github.com" },
    logo: logoCosmos,
  },
  {
    name: "OpenShuttle",
    description: "The schematics for the first rocket I designed that successfully made it to orbit.",
    link: { href: "#", label: "github.com" },
    logo: logoOpenShuttle,
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Paul Morris</title>
        <meta name="description" content="Things I’ve made trying to put my dent in the universe." />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/50 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-indigo-500 dark:text-zinc-200">
                <IconLink className="h-5 w-5 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
