
import React, { useRef, useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import LoadingDots from "./LoadingDots";
import { sendChatMessage } from "@/api/chat";

type Message = {
  id: string;
  message: string;
  sender: "user" | "assistant";
  loading?: boolean;
  error?: boolean;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  // Auto-scroll to bottom when new messages
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, loading]);

  async function handleSend(message: string) {
    setMessages((msgs) => [
      ...msgs,
      { id: Date.now() + Math.random() + "", message, sender: "user" },
    ]);
    setLoading(true);

    // Show placeholder "Assistant is typing..."
    setMessages((msgs) => [
      ...msgs,
      {
        id: "assistant-loading",
        message: "",
        sender: "assistant",
        loading: true,
      },
    ]);

    try {
      const response = await sendChatMessage(message);

      setMessages((msgs) =>
        msgs
          .filter((m) => m.id !== "assistant-loading")
          .concat({
            id: Date.now() + Math.random() + "",
            message: response || "(No response)",
            sender: "assistant",
          }),
      );
    } catch (err: any) {
      setMessages((msgs) =>
        msgs
          .filter((m) => m.id !== "assistant-loading")
          .concat({
            id: Date.now() + Math.random() + "",
            message:
              err?.message || "Something went wrong. Please try again later.",
            sender: "assistant",
            error: true,
          }),
      );
    } finally {
      setLoading(false);
    }
  }

  // Optional quick action handlers
  function handleQuickAction(msg: string) {
    handleSend(msg);
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center font-sans">
      {/* Header */}
      <div className="mb-1 w-full">
        {/* Pass quick actions to header */}
        <import src="./Header" as={Header} />
        <Header onQuickAction={handleQuickAction} />
      </div>
      {/* Chat window */}
      <div
        className="flex-1 w-full bg-white/70 rounded-3xl shadow-xl p-6 mb-4 overflow-y-auto border border-gray-100"
        style={{ minHeight: 420, maxHeight: 480 }}
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 text-lg py-12">
            <span>What can I help with?</span>
          </div>
        )}
        {messages.map((msg) =>
          msg.loading ? (
            <div className="flex items-center ml-2 my-2" key={msg.id}>
              <LoadingDots />
            </div>
          ) : (
            <ChatMessage
              key={msg.id}
              message={msg.message}
              sender={msg.sender}
              error={msg.error}
            />
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <div className="w-full">
        <ChatInput onSend={handleSend} disabled={loading} loading={loading} />
      </div>
    </div>
  );
}
