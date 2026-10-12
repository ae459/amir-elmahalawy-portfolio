import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Amir Elmahalawy, an IT Technical Engineer focused on responsive technical support, reliable device setup, account administration, and user-friendly documentation.",
};

const supportPrinciples = [
  {
    title: "Start with the person",
    description:
      "Ask clear questions, listen to what the user is experiencing, and understand how the issue is affecting their work.",
  },
  {
    title: "Troubleshoot methodically",
    description:
      "Work through hardware, software, and network symptoms step by step, and keep users informed along the way.",
  },
  {
    title: "Leave a useful record",
    description:
      "Document common fixes and communicate what has already been tried when an issue needs escalation.",
  },
  {
    title: "Treat access with care",
    description:
      "Handle account changes, password resets, permissions, and employee transitions with attention to security and process.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="section-spacing page-shell">
        <div className="max-w-4xl">
          <p className="eyebrow mb-3">About Amir</p>
          <div className="accent-line mb-6" />
          <h1 className="mb-6">Making technology work better for people.</h1>
          <p className="max-w-[62ch] text-xl leading-relaxed text-[var(--ink-70)]">
            I&apos;m an IT Technical Engineer and an Information Technology
            graduate from NJIT. I support users through day-to-day technical
            issues, device and software setup, account administration, and the
            practical details that help a team stay productive.
          </p>
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="My Approach"
            title="Reliable support starts with good communication."
          />
          <div className="flex flex-col gap-5 leading-relaxed text-[var(--ink-70)]">
            <p>
              A technical problem is also a disruption to someone&apos;s day. I
              aim to make support straightforward: understand the issue,
              explain what I&apos;m doing, and follow through with a clear
              resolution or escalation.
            </p>
            <p>
              My work covers help desk tickets, calls, and email; troubleshooting
              hardware, software, and network issues; setting up endpoints and
              applications; and helping users maintain the right account access.
            </p>
            <p>
              I also value the work that prevents repeated problems: preparing
              equipment for new hires, collecting assets during offboarding,
              writing troubleshooting guides, updating FAQs, and sharing
              practical training on tools and security practices.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="Support Principles"
          title="What teammates can expect"
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {supportPrinciples.map((principle) => (
            <Panel key={principle.title} variant="default" className="flex flex-col gap-3">
              <h3 className="text-[var(--foreground)]">{principle.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--ink-60)]">{principle.description}</p>
            </Panel>
          ))}
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="grid gap-8 sm:grid-cols-2">
          <Panel variant="ghost" className="flex flex-col gap-3">
            <p className="eyebrow">Education</p>
            <h3 className="text-[var(--foreground)]">B.S. in Information Technology</h3>
            <p className="text-sm text-[var(--ink-60)]">New Jersey Institute of Technology (NJIT)</p>
          </Panel>
          <Panel variant="ghost" className="flex flex-col gap-3">
            <p className="eyebrow">Explore</p>
            <h3 className="text-[var(--foreground)]">See how I put my skills to work.</h3>
            <p className="text-sm text-[var(--ink-60)]">
              Browse selected academic and personal projects, with the scope and tools used for each.
            </p>
            <Button asChild variant="ghost" className="w-fit px-0">
              <Link href="/projects">
                View projects <ArrowRight size={14} />
              </Link>
            </Button>
          </Panel>
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <Button asChild size="lg">
          <Link href="/contact">
            Get in touch <ArrowRight size={16} />
          </Link>
        </Button>
      </section>
    </div>
  );
}
