import type { ReactNode } from 'react';

interface OrnamentProps {
  className?: string;
}

export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <div className={`ornament-divider ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/40" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gold-400/50">
        <path d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z" fill="currentColor" opacity="0.6" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/40" />
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true, children }: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="heading-section text-balance">{title}</h2>
      {center && <Ornament className="mt-6" />}
      {subtitle && <p className={`body-serif mt-6 text-ink-300 ${center ? 'max-w-2xl mx-auto' : ''}`}>{subtitle}</p>}
      {children}
    </div>
  );
}

interface PlaceholderTagProps {
  label?: string;
}

export function PlaceholderTag({ label = 'Awaiting Source Material' }: PlaceholderTagProps) {
  return (
    <span className="placeholder-badge">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1" />
        <path d="M5 2.5 V5.5 M5 7 V7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      {label}
    </span>
  );
}

interface EmptyStateProps {
  title: string;
  message: string;
  icon?: ReactNode;
}

export function EmptyState({ title, message, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      {icon && <div className="mb-6 text-ink-600">{icon}</div>}
      <Ornament className="mb-8" />
      <h3 className="heading-section text-2xl mb-4">{title}</h3>
      <p className="body-serif text-ink-400 max-w-md">{message}</p>
      <Ornament className="mt-8" />
    </div>
  );
}
