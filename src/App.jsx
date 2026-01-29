import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AICounsellor from "./pages/AICounsellor";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* AI Counsellor Chat Page */}
        <Route path="/ai" element={<AICounsellor />} />
      </Routes>
    </Router>
  );
}

export default App;
