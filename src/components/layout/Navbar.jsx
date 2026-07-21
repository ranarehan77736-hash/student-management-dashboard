// import { Bell, User } from "lucide-react";

// function Navbar() {
//   return (
//     <nav style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '15px 30px',
//       backgroundColor: '#1e293b',
//       color: 'white'
//     }}>
//       <h2 style={{ margin: 0, fontSize: '20px' }}>Student Management Dashboard</h2>
//       <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
//         <Bell size={20} style={{ cursor: 'pointer' }} />
//         <User size={20} style={{ cursor: 'pointer' }} />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { useState } from "react";
import { GraduationCap, Menu, X, User } from "lucide-react";

function Navbar({ onToggleSidebar }) {
  return (
    <header
      style={{
        height: "60px",
        backgroundColor: "#1e293b",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      {/* Left side: Brand Logo & Mobile Toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Toggle Button for Mobile */}
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Menu size={22} />
          </button>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <GraduationCap size={28} color="#38bdf8" />
          <span style={{ fontSize: "18px", fontWeight: "bold", letterSpacing: "0.5px" }}>
            StudentDash
          </span>
        </div>
      </div>

      {/* Right side: User Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: "#0284c7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff"
          }}
        >
          <User size={20} />
        </div>
        <span style={{ fontSize: "14px", fontWeight: "500" }}>Admin</span>
      </div>
    </header>
  );
}

export default Navbar;