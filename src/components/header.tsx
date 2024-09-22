export function Header() {
  return (
    <div className="flex w-screen flex-row gap-4 bg-[#2C2C2C] px-4 py-2 text-white">
      <a href="/" className="hover:underline">
        Button Page
      </a>

      <a href="/navigation" className="hover:underline">
        Navigation Page
      </a>
    </div>
  )
}
