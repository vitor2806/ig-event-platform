import './styles.css';

interface ButtonProps {
  href?: string;
  icon?: {};
  variant: string;
  title: string;
}

export function ButtonLink({ title, href, icon, variant }: ButtonProps) {
  return (
    <a href={href} className={variant}>
      <>
        {icon}
        {title}
      </>
    </a>
  );
}
