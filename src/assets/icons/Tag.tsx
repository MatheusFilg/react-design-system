interface IconProps {
  className?: string
  width?: string
  height?: string
}

export default function Tag(props: IconProps) {
  return (
    <svg
      width={props?.width ?? '20'}
      height={props?.height ?? '20'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33329 9.33342H9.34663M27.4533 17.8801L17.8933 27.4401C17.6456 27.688 17.3515 27.8847 17.0278 28.0189C16.7041 28.1531 16.3571 28.2222 16.0066 28.2222C15.6562 28.2222 15.3092 28.1531 14.9855 28.0189C14.6617 27.8847 14.3676 27.688 14.12 27.4401L2.66663 16.0001V2.66675H16L27.4533 14.1201C27.95 14.6197 28.2287 15.2956 28.2287 16.0001C28.2287 16.7046 27.95 17.3804 27.4533 17.8801Z"
        className={`stroke-[#757575] ${props.className}`}
        // stroke="#1E1E1E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
