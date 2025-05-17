
import React from "react";

type ChatMessageProps = {
  message: string;
  sender: "user" | "assistant";
  error?: boolean;
  loading?: boolean;
};

export default function ChatMessage({ message, sender, error, loading }: ChatMessageProps) {
  const isUser = sender === "user";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}
      aria-live={loading ? "polite" : undefined}
    >
      <div
        className={`
          max-w-[80%] px-4 py-2 rounded-2xl
          ${isUser
            ? "bg-primary text-white rounded-br-md shadow"
            : error
            ? "bg-red-100 text-red-800 border border-red-200"
            : "bg-gray-100 text-gray-900 rounded-bl-md shadow"}
          font-medium text-base break-words transition-shadow duration-300
        `}
      >
        {message}
      </div>
    </div>
  );
}
