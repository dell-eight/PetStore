type IconButtonProps = {
  label: string;
  children: React.ReactNode;
};

export function IconButton({ label, children }: IconButtonProps) {
  return (
    <button className="icon-button" type="button" aria-label={label}>
      {children}
    </button>
  );
}
