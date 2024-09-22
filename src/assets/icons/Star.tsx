interface IconProps {
  color?: string
  width?: string
  height?: string
}

export default function Star(props: IconProps) {
  return (
    <svg
      width={props?.width ?? '20'}
      height={props?.height ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 1.66675L12.5751 6.88341L18.3334 7.72508L14.1667 11.7834L15.1501 17.5167L10.0001 14.8084L4.85008 17.5167L5.83341 11.7834L1.66675 7.72508L7.42508 6.88341L10.0001 1.66675Z"
        stroke={props?.color ?? '#1E1E1E'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
