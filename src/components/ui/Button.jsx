function Button({ label, onClick, variant }) {
  return (
    <button
      className={
        variant === "primary"
          ? "bg-amber-400 text-black px-6 py-2"
          : "bg-transparent border border-amber-400 text-amber-400 px-6 py-2"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
