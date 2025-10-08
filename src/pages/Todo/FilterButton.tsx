function FilterButton({
  name,
  isPressed,
  onClick,
}: {
  name: "All" | "Active" | "Completed";
  isPressed: boolean;
  onClick: (filter: "All" | "Active" | "Completed") => void;
}) {
  return (
    <button
      onClick={() => onClick(name)}
      type="button"
      className="btn toggle-btn"
      aria-pressed={isPressed}
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
