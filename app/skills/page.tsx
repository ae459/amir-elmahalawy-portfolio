import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "IT support capabilities including hardware and software troubleshooting, endpoint setup, account administration, onboarding, documentation, and escalation.",
};

const skillGroups = [
  {
    title: "User & Help Desk Support",
    skills: [
      "Ticket, phone, and email support",
      "Hardware and software troubleshooting",
      "Network and connectivity issue diagnosis",
      "Clear user communication and follow-through",
    ],
  },
  {
    title: "Hardware & Software",
    skills: [
      "Computer and laptop setup",
      "Printer and mobile device support",
      "Software application installation and configuration",
      "Device maintenance and basic issue diagnosis",
    ],
  },
  {
    title: "Accounts & Access",
    skills: [
      "User account administration",
      "Password resets and access permissions",
      "Active Directory and Microsoft 365 environments",
      "Security-conscious access support",
    ],
  },
  {
    title: "Onboarding & Operations",
    skills: [
      "New-hire equipment and account preparation",
      "Employee offboarding and asset collection",
      "Troubleshooting guides and internal FAQs",
      "User training and issue escalation",
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      <section className="section-spacing page-shell">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="IT Support Skills"
            title="The support work that keeps teams productive."
            description="A practical overview of my day-to-day focus across user support, devices, accounts, and IT operations."
          />
        </div>
      </section>

      <section className="page-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <Panel key={group.title} variant="default" className="flex flex-col gap-5">
              <h3 className="border-b border-[var(--ink-08)] pb-3 text-base font-semibold text-[var(--foreground)]">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--ink-70)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Let&apos;s Connect</p>
            <h2 className="text-[var(--foreground)]">Need dependable IT support?</h2>
            <p className="mt-2 text-[var(--ink-70)]">I&apos;d welcome a conversation about your team&apos;s needs.</p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact me <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
