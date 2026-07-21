import { Link } from "react-router-dom";
import { LayoutDashboard, Users, UserPlus } from "lucide-react";

function Sidebar() {
  return (
    <aside style={{
      width: '220px',
      backgroundColor: '#0f172a',
      color: 'white',
      minHeight: 'calc(100vh - 60px)',
      padding: '20px 10px'
    }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginBottom: '15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LayoutDashboard size={18} /> Dashboard
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link to="/students" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Users size={18} /> Students
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link to="/add-student" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <UserPlus size={18} /> Add Student
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;