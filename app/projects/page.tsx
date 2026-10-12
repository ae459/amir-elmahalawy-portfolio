import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";
import { imgPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Amir Elmahalawy, including a professional portfolio and MiroAI, an AI-powered research and productivity platform in progress.",
};

type ProjectStatus = "completed" | "in-progress" | "concept";

const projects: {
  id: string;
  title: string;
  status: ProjectStatus;
  description: string;
  what_it_shows: string;
  tech: string[];
  image: string;
  imageAlt: string;
  github?: string;
  live?: string;
}[] = [
  {
    id: "portfolio-site",
    title: "Amir Elmahalawy Portfolio",
    status: "completed",
    image: "/project-protfolio-site.png",
    imageAlt: "Code editor and rendered website side by side, dark theme",
    description:
      "A responsive professional portfolio built with Next.js, TypeScript, and Tailwind CSS. The site organizes technical support experience, skills, and projects into a clear, accessible experience for visitors.",
    what_it_shows:
      "Clear information architecture, attention to detail, and a user-focused approach to presenting technical information.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "GitHub Pages"],
    live: "/",
  },
  {
    id: "miroai",
    title: "MiroAI",
    status: "in-progress",
    image: "/project-prompt-lab.png",
    imageAlt: "Abstract AI interface representing an AI-powered research platform",
    description:
      "An AI-powered platform in development for deep research, problem solving, data analysis, image generation, and workflow automation. The project follows a spec-driven approach, with its initial foundation and architecture in planning.",
    what_it_shows:
      "Product thinking, structured planning, and an interest in building practical AI-powered tools.",
    tech: ["AI research", "Data analysis", "Workflow automation", "Spec-driven development"],
  },
];

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  completed: { label: "Completed", className: "status-badge status-badge--completed" },
  "in-progress": { label: "In Progress", className: "status-badge status-badge--in-progress" },
  concept: { label: "Concept", className: "status-badge status-badge--concept" },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <section className="section-spacing page-shell">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Projects"
            title="Selected projects"
            description="Explore a completed portfolio project and MiroAI, an AI-powered platform currently in development."
          />
        </div>
      </section>

      <section className="page-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const status = statusConfig[project.status];
            return (
              <Panel
                key={project.id}
                variant={project.status === "concept" ? "ghost" : "default"}
                className="hover-lift flex flex-col gap-5"
              >
                {/* Project image */}
                <div className="relative rounded-[var(--radius-md)] overflow-hidden border border-[var(--ink-08)] bg-[var(--surface-2)]" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={imgPath(project.image)}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[var(--foreground)]">{project.title}</h3>
                  <span className={status.className} style={{ whiteSpace: "nowrap" }}>
                    {status.label}
                  </span>
                </div>

                <p className="text-[var(--ink-60)] text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-col gap-3 border-t border-[var(--ink-08)] pt-4">
                  <p className="text-xs text-[var(--accent-soft)] italic">
                    “{project.what_it_shows}”
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-badge">{t}</span>
                    ))}
                  </div>
                  {(project.live || project.github) && (
                    <div className="flex gap-3 mt-1">
                      {project.live && (
                        <Button asChild variant="ghost" size="sm">
                          <Link href={project.live}>
                            View Site <ExternalLink size={12} />
                          </Link>
                        </Button>
                      )}
                      {project.github && (
                        <Button asChild variant="secondary" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub <ArrowRight size={12} />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Panel>
            );
          })}
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="rounded-[var(--radius-xl)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="eyebrow mb-2">Opportunities</p>
            <p className="text-[var(--foreground)] font-semibold">
              Hiring for IT support or technical operations?
            </p>
            <p className="text-[var(--ink-60)] text-sm mt-1">
              I&apos;d be glad to connect and learn more about the role.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href="/contact">
              Get in touch <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
