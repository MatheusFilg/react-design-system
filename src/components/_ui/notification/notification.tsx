import { HTMLAttributes } from 'react'

import Cancel from '../../../assets/icons/Cancel'
import Info from '../../../assets/icons/Info'
import Button from '../button/button'
import ButtonDanger from '../button/button-danger'

interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  text: string
  className?: string
  variant?: 'default' | 'alert'
}

export default function Notification(props: NotificationProps) {
  const { variant } = props

  const style =
    'flex flex-row rounded-lg w-[300px] h-[130px] border p-4 font-inter'

  switch (variant) {
    case 'default':
      return <DefaultNotification className={style} {...props} />
    case 'alert':
      return <AlertNotification className={style} {...props} />
    default:
      return <DefaultNotification className={style} {...props} />
  }
}

export function DefaultNotification(props: NotificationProps) {
  const { className, title, text } = props
  return (
    <div
      className={`${className} gap-3 border-[#757575] bg-[#FFFFFF] text-[#1E1E1E]`}
    >
      <Info />
      <div id="container" className="flex w-full flex-row justify-between">
        <div className="flex h-auto w-auto flex-col gap-1">
          <h1 className="text-base font-semibold">{title}</h1>
          <span className="text-base font-normal">{text}</span>
          <Button size="small" className="translate-y-3">
            Button
          </Button>
        </div>
        <Cancel />
      </div>
    </div>
  )
}

export function AlertNotification(props: NotificationProps) {
  const { className, title, text } = props
  return (
    <div
      className={`${className} gap-3 border-[#EC221F] bg-[#FEE9E7] text-[#900B09]`}
    >
      <Info color="#900B09" />
      <div id="container" className="flex w-full flex-row justify-between">
        <div className="flex h-auto w-auto flex-col gap-1">
          <h1 className="text-base font-semibold">{title}</h1>
          <span className="text-base font-normal">{text}</span>
          <ButtonDanger size="small" className="translate-y-3">
            Button
          </ButtonDanger>
        </div>
        <Cancel color="#900B09" />
      </div>
    </div>
  )
}
