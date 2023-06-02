type Props = {
  className?: string;
  onClick?: () => void;
  label: string;
};

function Button({ label, className, onClick }: Props) {
  return (
    <button
      className={`py-2 px-4 bg-black text-white ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
