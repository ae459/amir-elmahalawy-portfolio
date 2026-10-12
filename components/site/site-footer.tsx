import Link from "next/link";
import { GitBranch, ExternalLink, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { footerNavigation } from "@/lib/site-navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--ink-12)] bg-[var(--surface-1)] mt-20">
      <div className="page-shell py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identity */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-bold text-[var(--foreground)] text-base tracking-tight">
                {siteConfig.name}
              </p>
              <p className="font-mono text-[10px] text-[var(--accent-soft)] tracking-widest uppercase mt-1">
                {siteConfig.role}
              </p>
            </div>
            <p className="text-sm text-[var(--ink-60)] leading-relaxed max-w-[28ch]">
              {siteConfig.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-[var(--radius-sm)] text-[var(--ink-60)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
              >
                <GitBranch size={16} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-[var(--radius-sm)] text-[var(--ink-60)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href={siteConfig.email}
                aria-label="Email"
                className="p-2 rounded-[var(--radius-sm)] text-[var(--ink-60)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Explore</p>
            <ul className="flex flex-col gap-2">
              {footerNavigation.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--ink-70)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Connect</p>
            <ul className="flex flex-col gap-2">
              {footerNavigation.connect.map((item) => (
                <li key={item.href}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--ink-70)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {item.label}
                      <ArrowUpRight size={12} className="opacity-60" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--ink-70)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--ink-08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--ink-40)]">
            © {year} {siteConfig.name}. Built with Next.js + Tailwind CSS.
          </p>
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[var(--ink-40)] hover:text-[var(--ink-70)] transition-colors"
          >
            View source on GitHub
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
