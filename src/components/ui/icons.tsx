type IconProps = {
  size?: number
}

export function ArrowRight({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 8h11m0 0L9.2 4.2M13.5 8l-4.3 3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Check({ size = 15 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.6 6.3 12 13 4.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MenuIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        className="menu-icon__line menu-icon__line--top"
        d="M2.5 6.5h13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        className="menu-icon__line menu-icon__line--bottom"
        d="M2.5 11.5h13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CloseIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4.5 4.5l9 9m0-9l-9 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function WhatsApp({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.5 11.6a8.1 8.1 0 0 1-11.8 7.2L4 20.2l1.5-4.6A8.1 8.1 0 1 1 20.5 11.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.7c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.6 1.3c.1.2 0 .4-.1.6l-.4.4c-.1.2-.1.3 0 .5.3.5.7.9 1.2 1.2.2.1.4.1.5 0l.4-.4c.2-.2.4-.2.6-.1l1.3.6c.2.1.4.3.3.5-.2.5-.5 1.1-1.1 1.2-.6.1-1.4.1-2.8-.6-1.3-.7-2.2-1.9-2.4-2.6-.2-.6-.1-1.3.3-1.9Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Mail({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4.5 7.75 7.5 4.9 7.5-4.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function Clock({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.2v5.1l3.2 1.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function MapPin({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 10.4c0 5.3-7 11.1-7 11.1s-7-5.8-7-11.1a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.2" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconBusiness({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6.5" cy="6.75" r="0.9" fill="currentColor" />
      <circle cx="9.4" cy="6.75" r="0.9" fill="currentColor" />
      <path d="M7 13h6M7 16h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconLanding({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.5 12.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="6.5" y="15" width="6" height="2" rx="1" fill="currentColor" />
      <path d="M6.5 8.2h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconRedesign({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19.8 12a7.8 7.8 0 1 1-2.3-5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M19.8 4.4v4.4h-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8.6V12l2.4 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconCode({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.4 7.4 4 12l4.4 4.6M15.6 7.4 20 12l-4.4 4.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m13.4 5.4-2.8 13.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
