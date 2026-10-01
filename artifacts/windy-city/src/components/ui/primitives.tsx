import { ReactNode } from "react";

/**
 * Single-return anchor helper.
 * Renders an <a> with target="_blank" rel="noopener noreferrer" and optional
 * onClick / ariaLabel. Used to centralise W3C/security-correct linking.
 */
export function PageAnchor({
  href,
  children,
  className,
  onClick,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

/**
 * Single-return section heading.
 * Renders an index badge + label + title (+ optional accent) with an optional
 * short blurb beside it on large viewports.
 */
export function SectionHeading({
  index,
  label,
  title,
  accent,
  blurb,
}: {
  index: string;
  label: string;
  title: string;
  accent?: string;
  blurb?: string;
}) {
  return (
    <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_auto]">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="display-type text-2xl font-bold text-accent">{index}</span>
          <span className="h-px w-10 bg-primary" />
          <span className="section-label">{label}</span>
        </div>
        <h2 className="display-type text-5xl font-bold uppercase leading-[0.9] md:text-7xl">
          {title}
          {accent && <span className="text-stroke">{accent}</span>}
        </h2>
      </div>
      {blurb && (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
          {blurb}
        </p>
      )}
    </div>
  );
}
