// src/components/ui/badge.tsx
import { cn } from "../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "danger" | "warning" | "info";
  className?: string;
}

const styles = {
  success: "bg-green-100 text-green-800 border border-green-300",
  danger: "bg-red-100 text-red-800 border border-red-300",
  warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  info: "bg-blue-100 text-blue-800 border border-blue-300",
};

export function Badge({ children, variant = "info", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "px-2 py-0.5 text-xs font-medium rounded-full",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}