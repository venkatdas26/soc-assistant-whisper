
import React from "react";
import { Plus, Search } from "lucide-react";

export default function Header({ onQuickAction }: { onQuickAction: (message: string) => void }) {
  return (
    <header className="w-full flex flex-row items-center justify-between mb-6">
      <div className="flex items-center">
        <span className="font-bold text-2xl tracking-tight mr-4">SOC Assistant</span>
        {/* Quick action buttons, easily extendable */}
        <button
          className="px-4 py-1 text-sm rounded-full bg-gray-50 border border-gray-200 shadow-sm hover:bg-gray-100 ml-1 font-medium"
          onClick={() => onQuickAction("Show Today's Summary")}
        >
          Show Today's Summary
        </button>
        <button
          className="px-4 py-1 text-sm rounded-full bg-gray-50 border border-gray-200 shadow-sm hover:bg-gray-100 ml-1 font-medium"
          onClick={() => onQuickAction("List All Alerts")}
        >
          List All Alerts
        </button>
      </div>
      {/* Placeholder user/avatar or temp status */}
      <div className="rounded-full bg-secondary p-2 flex items-center">
        <span className="text-xs text-gray-700 font-semibold">Temporary</span>
      </div>
    </header>
  );
}
