function Input({ label, type = "text", value, onChange, placeholder, required = false, name }) {
  return (
    <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column", gap: "5px" }}>
      {label && <label style={{ fontWeight: "600", fontSize: "14px", color: "#334155" }}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          padding: "10px 12px",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          fontSize: "14px",
          outline: "none"
        }}
      />
    </div>
  );
}

export default Input;