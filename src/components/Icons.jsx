// Shared SVG symbols, referenced via <Icon name="..." />
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="i-phone" viewBox="0 0 24 24"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" /></symbol>
      <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" /></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></symbol>
      <symbol id="i-cal" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" /></symbol>
      <symbol id="i-leaf" viewBox="0 0 200 120"><g fill="currentColor"><path d="M10 110C60 70 120 40 195 10" fill="none" stroke="currentColor" strokeWidth="2" /><ellipse cx="50" cy="80" rx="22" ry="8" transform="rotate(-50 50 80)" /><ellipse cx="62" cy="96" rx="22" ry="8" transform="rotate(10 62 96)" /><ellipse cx="95" cy="57" rx="22" ry="8" transform="rotate(-55 95 57)" /><ellipse cx="108" cy="74" rx="22" ry="8" transform="rotate(5 108 74)" /><ellipse cx="140" cy="36" rx="20" ry="7" transform="rotate(-60 140 36)" /><ellipse cx="152" cy="52" rx="20" ry="7" transform="rotate(0 152 52)" /><ellipse cx="182" cy="20" rx="16" ry="6" transform="rotate(-20 182 20)" /></g></symbol>
    </svg>
  )
}

export function Icon({ name, className }) {
  return <svg className={className} aria-hidden="true"><use href={`#i-${name}`} /></svg>
}

export function Divider() {
  return (
    <svg className="divider" viewBox="0 0 120 14" aria-hidden="true">
      <path d="M0 7h48M72 7h48" stroke="currentColor" />
      <path fill="currentColor" d="m60 0 7 7-7 7-7-7z" />
    </svg>
  )
}

export function SectionHead({ eyebrow, title, children, divider }) {
  return (
    <div className="sec-head reveal">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
      {divider && <Divider />}
    </div>
  )
}
