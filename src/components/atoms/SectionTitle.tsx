interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`font-display text-3xl md:text-4xl text-primary text-center mb-2 ${className}`}
    >
      {children}
    </h2>
  );
}
