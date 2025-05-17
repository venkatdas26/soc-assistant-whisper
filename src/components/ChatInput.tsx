
import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ChatInput({
  onSend,
  disabled,
  loading,
}: {
  onSend: (message: string) => void;
  disabled?: boolean;
  loading?: boolean;
}) {
  const [input, setInput] = useState("");

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim().length > 0) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <form
      className="w-full flex items-center gap-2 px-2 py-2 bg-white rounded-xl border border-gray-200 shadow-sm"
      onSubmit={handleSend}
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,.05)" }}
      autoComplete="off"
    >
      <input
        id="chat-input"
        type="text"
        className="flex-1 px-3 py-2 bg-transparent outline-none font-medium text-gray-900 placeholder:text-gray-400"
        placeholder="Ask anything"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled || loading}
        aria-label="Ask anything"
        autoComplete="off"
      />
      <button
        type="submit"
        className="ml-1 p-2 rounded-full bg-black text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-200 disabled:text-gray-400"
        disabled={!input.trim() || disabled || loading}
        aria-label="Send"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
