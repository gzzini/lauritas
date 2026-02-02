interface SocialIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function SocialIcon({
  href,
  label,
  children,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 text-primary transition-all duration-300 hover:bg-primary hover:text-secondary"
    >
      {children}
    </a>
  );
}
