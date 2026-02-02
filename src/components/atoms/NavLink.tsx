interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export default function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-primary font-serif text-sm tracking-widest uppercase transition-opacity duration-300 hover:opacity-70 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </a>
  );
}
