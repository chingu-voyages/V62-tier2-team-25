const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export async function askGemini(prompt) {
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to communicate with server");
  }

  const data = await response.json();

  return data.response;
}
