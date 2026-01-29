import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome {user?.name} 👋</h1>
      <p>This is your AI Counsellor Dashboard</p>

      <button onClick={() => navigate("/ai")}>
        Talk to AI Counsellor
      </button>

      <br /><br />
      <button>University Suggestions</button>

      <br /><br />
      <button>My To-Do</button>
    </div>
  );
}

export default Dashboard;
