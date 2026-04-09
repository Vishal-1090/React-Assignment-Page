export function SiteHeader({ brand, links }) {
  return (
    <header className="site-header">
      <a href="#home" className="site-header__brand">
        {brand}
      </a>

      <nav className="site-header__nav" aria-label="Primary">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button className="site-header__menu" type="button" aria-label="Open menu">
        <span />
        <span />
      </button>
    </header>
  );
}
