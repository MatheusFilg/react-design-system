interface ClockProps {
  color?: string
  width?: string
  height?: string
}

export function Clock(props: ClockProps) {
  return (
    <svg
      width={props?.width ?? '20'}
      height={props?.height ?? '20'}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9999 10V20L26.6666 23.3333M36.6666 20C36.6666 29.2048 29.2047 36.6667 19.9999 36.6667C10.7952 36.6667 3.33325 29.2048 3.33325 20C3.33325 10.7953 10.7952 3.33334 19.9999 3.33334C29.2047 3.33334 36.6666 10.7953 36.6666 20Z"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
