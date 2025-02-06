import type { ReactNode } from "react";

export function GradientBackground({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative min-h-screen w-full grid items-center justify-center overflow-hidden 
                     bg-gradient-to-br from-blue-100 to-purple-100 
                     dark:from-blue-900 dark:to-purple-900 ${className}`}
    >
      {children}
    </div>
  )
}
