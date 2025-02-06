import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";

export function GradientButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <div
      className="inline-block group relative bg-gradient-to-b from-blue-400/30 to-purple-400/30 
                 dark:from-blue-600/30 dark:to-purple-600/30 p-px rounded-2xl backdrop-blur-lg 
                 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Button
        variant="ghost"
        className={`rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                   bg-white/80 hover:bg-white/90 dark:bg-black/80 dark:hover:bg-black/90 
                   text-blue-600 dark:text-blue-300 transition-all duration-300 
                   group-hover:-translate-y-0.5 border border-blue-200/50 dark:border-blue-700/50
                   hover:shadow-md dark:hover:shadow-blue-900/30 ${className}`}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}
