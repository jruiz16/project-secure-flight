
export const UsersIcon = ({ size = 'md' }) => {
  const sm = size === 'sm' && 'size-4'
  const md = size === 'md' && 'size-6'
  const lg = size === 'lg' && 'size-8'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={`${sm || md || lg}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_19_32)">
        <path d="M5 7C5 8.06087 5.42143 9.07828 6.17157 9.82843C6.92172 10.5786 7.93913 11 9 11C10.0609 11 11.0783 10.5786 11.8284 9.82843C12.5786 9.07828 13 8.06087 13 7C13 5.93913 12.5786 4.92172 11.8284 4.17157C11.0783 3.42143 10.0609 3 9 3C7.93913 3 6.92172 3.42143 6.17157 4.17157C5.42143 4.92172 5 5.93913 5 7Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_19_32">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
