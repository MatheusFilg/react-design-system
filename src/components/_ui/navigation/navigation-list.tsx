import Navigation, { NavigationProps } from './navigation'

interface NavigationList extends NavigationProps {
  quantity: number
}

export default function NavigationList({
  quantity,
  href,
  children,
  icon,
}: NavigationList) {
  return (
    <>
      {Array.from({ length: quantity }, (_, index) => (
        <Navigation href={href} key={index} icon={icon}>
          {children}
        </Navigation>
      ))}
    </>
  )
}
