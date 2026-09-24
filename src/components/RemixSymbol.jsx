const symbolTypes = {
  technology: (
    <>
      <path d="M18 3v7h-7" />
      <path d="M6 21v-7h7" />
      <path d="M18 10 10 18" />
      <path d="M6 14 14 6" />
      <circle cx="18" cy="3" r="2" />
      <circle cx="6" cy="21" r="2" />
    </>
  ),
  design: (
    <>
      <path d="m12 3 9 9-9 9-9-9 9-9Z" />
      <path d="M12 7v10M7 12h10" />
    </>
  ),
  business: (
    <>
      <path d="M4 19h16" />
      <path d="M5 16V9h4v7M10 16V5h4v11M15 16v-4h4v4" />
    </>
  ),
  content: (
    <>
      <path d="M4 5h16v12H8l-4 4V5Z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  social: (
    <>
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="m8.7 10.5 6.6-3M8.7 13.5l6.6 3" />
    </>
  ),
  education: (
    <>
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11v5c2.8 2.2 7.2 2.2 10 0v-5M21 9v7" />
    </>
  ),
}

function RemixSymbol({ type = 'technology', className = '', label, framed = true }) {
  return (
    <span className={`remix-symbol ${framed ? '' : 'border-0'} ${className}`} aria-label={label} role={label ? 'img' : undefined}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="square" strokeLinejoin="miter" aria-hidden={!label}>
        {symbolTypes[type] || symbolTypes.technology}
      </svg>
    </span>
  )
}

export default RemixSymbol