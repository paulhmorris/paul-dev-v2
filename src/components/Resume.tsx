import { IconBriefcase, IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import logoCratebind from "~/images/logos/cratebind.svg";
import logoStone from "~/images/logos/stone.svg";
import logoTide from "~/images/logos/tide.svg";
import { formatShortDate } from "~/lib/formatDate";

export function Resume() {
  type ResumeItem = {
    company: string;
    title: string;
    logo: string;
    isCurrent: boolean;
    start: string;
    end: string;
  };
  let resume: ResumeItem[] = [
    {
      company: "Tide Cleaners",
      title: "Frontend Developer",
      logo: logoTide,
      isCurrent: true,
      start: "2022-01-01:00:00.000Z",
      end: "Present",
    },
    {
      company: "CrateBind",
      title: "Frontend Developer",
      logo: logoCratebind,
      isCurrent: false,
      start: "2021-03-01:00:00.000Z",
      end: "2022-01-01:00:00.000Z",
    },
    {
      company: "Tide Cleaners",
      title: "QA Analyst",
      logo: logoTide,
      isCurrent: false,
      start: "2018-06-01:00:00.000Z",
      end: "2021-03-01:00:00.000Z",
    },
    {
      company: "Austin Stone",
      title: "Resident",
      logo: logoStone,
      isCurrent: false,
      start: "2016-08-01:00:00.000Z",
      end: "2018-06-01:00:00.000Z",
    },
    {
      company: "Tide Cleaners",
      title: "Operations Coordinator",
      logo: logoTide,
      isCurrent: false,
      start: "2015-08-01:00:00.000Z",
      end: "2016-08-01:00:00.000Z",
    },
  ];
  return (
    <div className="rounded-2xl border border-zinc-700 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <IconBriefcase className="h-6 w-6 flex-none text-zinc-300" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${formatShortDate(role.start)} until ${formatShortDate(role.end)}`}
              >
                <time dateTime={role.start}>{formatShortDate(role.start)}</time> <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end === "Present" ? new Date().toISOString() : new Date(role.end).toISOString()}>
                  {role.end === "Present" ? "Present" : formatShortDate(role.end)}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a
        href="/resume.pdf"
        download
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-900 outline-offset-2 ring ring-zinc-900 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
      >
        Download Resume
        <IconDownload className="h-3.5 w-3.5 transition group-active:text-zinc-600 dark:group-hover:text-zinc-50 dark:group-active:text-zinc-50" />
      </a>
    </div>
  );
}
