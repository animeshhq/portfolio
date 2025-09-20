"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/submitEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message || "Something went wrong.");
      if (res.ok) setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      setMessage("Failed to submit email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
        className="border p-2 rounded"
        required 
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
