// src/components/ui/button.jsx
export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl px-4 py-2 text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 text-black transition ${className}`}
    >
      {children}
    </button>
  );
}
