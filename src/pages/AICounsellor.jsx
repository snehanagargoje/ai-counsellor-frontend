import { useState } from "react";

export default function AICounsellor() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const getAdvice = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        "https://ai-counsellor-backend-q34y.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: message,
            language: "en",
          }),
        }
      );

      if (!res.ok) {
        throw new Error("API failed");
      }

      const data = await res.json();

      setResponse(
        `💬 ${data.reply}

🧠 Emotion: ${data.emotion}
🎯 Career Interest: ${data.career_interest}
📍 Current Stage: ${data.current_stage}
➡️ Next Stage: ${data.next_stage}

🎓 Universities:
${data.universities
  .map(
    (u, i) =>
      `${i + 1}. ${u.name} (${u.country}) | Cost: ${u.cost} | Risk: ${u.risk}`
  )
  .join("\n")}
`
      );
    } catch (error) {
      console.error(error);
      setResponse("❌ Backend not connected. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h2>🎓 AI Career Counsellor</h2>

      <textarea
        rows="4"
        style={{ width: "100%", padding: "10px" }}
        placeholder="Type your career concern..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      <button onClick={getAdvice} disabled={loading}>
        {loading ? "Thinking..." : "Get Career Advice"}
      </button>

      {response && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>AI Response:</strong>
          <br />
          {response}
        </div>
      )}
    </div>
  );
}
