import { Users, GraduationCap, BookOpen, CheckCircle } from "lucide-react";

// Local Card Component
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
        minWidth: "200px",
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
            justifyContent: "center",
          }}
        >
          <Icon size={24} />
        </div>
      )}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Dashboard Overview
      </h1>

      {/* Stats Cards Row */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
        <Card title="Total Students" value="10" icon={Users} color="#2563eb" />
        <Card title="Total Classes" value="4" icon={GraduationCap} color="#16a34a" />
        <Card title="Active Courses" value="12" icon={BookOpen} color="#d97706" />
        <Card title="Attendance Rate" value="95%" icon={CheckCircle} color="#9333ea" />
      </div>

      {/* Recent Activity Section */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ margin: "0 0 15px 0", fontSize: "18px", color: "#1e293b" }}>
          Quick Info & Rules
        </h3>
        <ul style={{ paddingLeft: "20px", color: "#475569", lineHeight: "1.8" }}>
          <li>Student data is synchronized with API (`jsonplaceholder.typicode.com`).</li>
          <li>You can filter students by <strong>Class 9 to Class 12</strong> in the Students page.</li>
          <li>Use the search bar to find students instantly by name or email.</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;