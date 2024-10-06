import NavigationButtonGroup from '../components/navigation-group/navigation-button-group'
import NavigationListGroup from '../components/navigation-group/navigation-list-group'

export default function NavigationPage() {
  return (
    <div className="flex h-screen w-screen flex-row gap-72">
      <NavigationButtonGroup />
      <NavigationListGroup />
    </div>
  )
}
