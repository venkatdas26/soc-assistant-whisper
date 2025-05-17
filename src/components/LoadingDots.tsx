
import React from "react";

const dotCommonClasses = "bg-gray-400 mx-0.5 w-2 h-2 rounded-full inline-block animate-bounce";

export default function LoadingDots() {
  return (
    <span aria-label="Loading" className="flex items-center ml-2">
      <span className={`${dotCommonClasses} [animation-delay:-0.32s]`} />
      <span className={`${dotCommonClasses} [animation-delay:-0.16s]`} />
      <span className={dotCommonClasses} />
      <span className="ml-2 text-gray-500 font-medium text-sm">Assistant is typing...</span>
    </span>
  );
}
