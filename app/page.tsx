import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  Laptop,
  Mail,
  Network,
  ShieldCheck,
  UserRoundPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";
import { imgPath } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const supportAreas = [
  {
    title: "Technical support",
    description:
      "Diagnose and resolve hardware, software, and connectivity issues through help desk tickets, phone calls, and email.",
    icon: ClipboardList,
  },
  {
    title: "Devices & applications",
    description:
      "Set up, configure, and maintain computers, laptops, printers, mobile devices, and software.",
    icon: Laptop,
  },
  {
    title: "Accounts & access",
    description:
      "Help users with account administration, password resets, and access permissions.",
    icon: ShieldCheck,
  },
  {
    title: "Employee lifecycle",
    description:
      "Prepare equipment and account access for new hires, and collect company assets during offboarding.",
    icon: UserRoundPlus,
  },
  {
    title: "Guides & escalation",
    description:
      "Document common fixes, train users on standard tools and security practices, and route complex issues to specialist teams.",
    icon: Network,
  },
];

const highlights = ["Help desk support", "Hardware & software setup", "Account administration", "IT documentation"];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="section-spacing page-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col items-start gap-6">
            <p className="eyebrow">IT Technical Engineer · NJIT Information Technology</p>
            <h1 className="max-w-[16ch] text-[var(--foreground)] leading-[1.05]">
              Keeping people and technology{" "}
              <span className="text-[var(--accent-soft)]">moving forward.</span>
            </h1>
            <p className="max-w-[55ch] text-lg leading-relaxed text-[var(--ink-70)]">
              I help people get back to work by resolving technical issues,
              preparing reliable devices, and making everyday technology easier
              to use. My work spans user support, endpoint setup, account
              administration, onboarding, and clear documentation.
            </p>
            <div className="mt-1 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact me <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/projects">Explore my work</Link>
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2" aria-label="Areas of experience">
              {highlights.map((highlight) => (
                <span key={highlight} className="skill-badge">{highlight}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--ink-12)] bg-[var(--surface-1)]" style={{ aspectRatio: "4/5" }}>
              <Image
                src={imgPath("/Profile-Picture.png")}
                alt="Amir Elmahalawy"
                fill
                className="object-cover"
                priority
              />
            </div>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-[var(--radius-lg)] border border-[var(--ink-12)] bg-[var(--background)]/90 p-4 backdrop-blur-md transition-colors hover:border-[var(--accent-border)]"
            >
              <span>
                <span className="block text-sm font-semibold text-[var(--foreground)]">Connect on LinkedIn</span>
                <span className="block text-xs text-[var(--ink-60)]">Let&apos;s talk IT support</span>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="What I Do"
          title="Practical IT support, end to end"
          description="From the first user report to a documented resolution or a well-routed escalation."
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Panel key={area.title} variant="default" className="hover-lift flex flex-col gap-4">
                <div className="w-fit rounded-[var(--radius-sm)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-2">
                  <Icon size={18} className="text-[var(--accent-soft)]" aria-hidden="true" />
                </div>
                <h3 className="text-[var(--foreground)]">{area.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--ink-60)]">{area.description}</p>
              </Panel>
            );
          })}
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="How I Work"
            title="Clear communication. Thoughtful follow-through."
            description="Technical support is about more than fixing a device. It means listening carefully, explaining the next step, protecting access, and leaving useful notes for the next person."
          />
          <div className="flex flex-col gap-3">
            {[
              "Understand the issue and its impact before troubleshooting.",
              "Keep users informed in plain, approachable language.",
              "Document the fix and escalate clearly when specialist help is needed.",
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-[var(--radius-md)] border border-[var(--ink-08)] bg-[var(--surface-1)] p-4">
                <span className="font-mono text-xs text-[var(--accent-soft)]">0{index + 1}</span>
                <p className="text-sm leading-relaxed text-[var(--ink-70)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[var(--radius-xl)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-8 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow mb-2">Opportunities & Connections</p>
            <h2 className="mb-2 text-2xl text-[var(--foreground)]">Looking for an IT support professional?</h2>
            <p className="text-sm text-[var(--ink-70)]">I&apos;d be glad to hear about your team and the challenges you&apos;re solving.</p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <a href={siteConfig.email}>
              <Mail size={16} /> Email me
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
