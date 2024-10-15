import { useState } from 'react'

import { TagProps } from './tag'

interface TagToggleProps extends TagProps {
  isActive?: boolean
  quantity: number
}

export default function TagToggle(props: TagToggleProps) {
  const { defaultstyle, icon, children, quantity } = props
  const [activeIndex, setActiveIndex] = useState(0)

  function handleActiveTag(index: number) {
    setActiveIndex(index)
    console.log(activeIndex)
  }

  return (
    <div className="flex flex-row gap-6">
      {Array.from({ length: quantity }, (_, index) => (
        <div
          className={`${defaultstyle} ${activeIndex === index ? 'bg-[#2C2C2C] text-white' : 'bg-[#F5F5F5] text-[#757575]'} flex h-8 w-auto items-center gap-2 rounded-lg p-2`}
          onClick={() => handleActiveTag(index)}
          key={index}
        >
          {activeIndex === index ? icon : null}
          <p>{children}</p>
        </div>
      ))}
    </div>
  )
}
