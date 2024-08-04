import { ReactNode } from 'react'

interface LabelProps {
  children: ReactNode
}

export default function Label({ children }: LabelProps) {
  return (
    <div className="flex flex-row items-center justify-center">
      <label className="flex h-8 w-20 items-center justify-center rounded-lg border border-[#B2B2B2] bg-[#CDCDCD] px-4 py-2">
        {children}
      </label>
      <div className="h-[1px] w-6 bg-[#E3E3E3]" />
    </div>
  )
}
