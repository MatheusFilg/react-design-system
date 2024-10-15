import TagGroup from '../components/tag-group/tag-group'
import TagToggleGroup from '../components/tag-group/tag-toggle-group'

export default function TagPage() {
  return (
    <div className="flex h-screen w-screen flex-row gap-72 p-6">
      <TagGroup />
      <TagToggleGroup />
    </div>
  )
}
