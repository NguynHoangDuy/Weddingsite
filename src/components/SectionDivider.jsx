export function SectionDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 mt-6 ${className}`}>
      <div className="h-px w-20 bg-rose-300" />
      <span className="text-rose-400 text-xl">♥</span>
      <div className="h-px w-20 bg-rose-300" />
    </div>
  );
}
