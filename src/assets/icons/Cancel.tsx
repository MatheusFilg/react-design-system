interface CancelProps {
  color?: string
  width?: string
  height?: string
}

export default function Cancel(props: CancelProps) {
  return (
    <svg
      width={props?.width ?? '20'}
      height={props?.height ?? '20'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L4 12M4 4L12 12"
        stroke={props?.color ?? '#1E1E1E'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
