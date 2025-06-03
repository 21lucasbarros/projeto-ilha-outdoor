interface ButtonProps {
  href?: string;
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const sharedProps = {
    className,
    onClick,
  };

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {children}
      </a>
    );
  }

  return <button {...sharedProps}>{children}</button>;
}
