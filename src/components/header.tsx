export function Header() {
  return (
    <div className="flex w-screen flex-row gap-6 bg-[#2C2C2C] px-4 py-2 text-white">
      <a href="/" className="hover:underline">
        Button
      </a>

      <a href="/navigation" className="hover:underline">
        Navigation
      </a>

      <a href="/avatar" className="hover:underline">
        Avatar
      </a>

      <a href="/tag" className="hover:underline">
        Tag
      </a>

      <a href="/card" className="hover:underline">
        Card
      </a>

      <a href="/tooltip" className="hover:underline">
        Tooltip
      </a>

      <a href="/notification" className="hover:underline">
        Notification
      </a>
    </div>
  )
}
