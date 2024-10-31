import { HTMLAttributes, ReactNode } from 'react'

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right'
}

export default function Tooltip({ children, direction = 'top' }: TooltipProps) {
  return (
    <div className="flex h-fit w-fit flex-col items-center">
      <div className="z-0 h-3 w-3 translate-y-2 rotate-45 border border-[#D9D9D9] bg-white shadow-lg" />
      <div className="z-10 flex h-fit w-fit flex-col rounded-lg border border-[#D9D9D9] bg-white px-3 py-2 shadow-lg">
        {children}
      </div>
    </div>
  )
}
