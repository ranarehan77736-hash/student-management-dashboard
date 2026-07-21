function Button({ children, onClick, type = "button", variant = "primary" }) {
  const isPrimary = variant === "primary";
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: isPrimary ? "#2563eb" : "#64748b",
        color: "white",
        fontWeight: "600",
        cursor: "pointer",
        fontSize: "14px"
      }}
    >
      {children}
    </button>
  );
}

export default Button;