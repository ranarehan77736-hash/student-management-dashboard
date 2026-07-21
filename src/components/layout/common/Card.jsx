function Card({ title, value, icon: Icon, color = "#2563eb" }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flex: "1",
        minWidth: "200px"
      }}
    >
      <div>
        <p style={{ margin: 0, fontSize: "14px", color: "#64748b", fontWeight: "500" }}>{title}</p>
        <h2 style={{ margin: "5px 0 0 0", fontSize: "28px", color: "#0f172a", fontWeight: "bold" }}>{value}</h2>
      </div>
      {Icon && (
        <div
          style={{
            backgroundColor: `${color}15`,
            padding: "12px",
            borderRadius: "50%",
            color: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon size={24} />
        </div>
      )}
    </div>
  );
}

export default Card;