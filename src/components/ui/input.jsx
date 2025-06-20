// src/components/ui/input.jsx
export function Input({ ...props }) {
  return (
    <input
      {...props}
      className={`rounded-lg px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
    />
  );
}
