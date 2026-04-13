import { ReactNode } from "react";

interface SectionBadgeProps {
  icon?: ReactNode;
  children: ReactNode;
}

export default function SectionBadge({ icon, children }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-dark shadow-sm">
      {icon ?? <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
      {children}
    </span>
  );
}
