export function NewsletterSection({
  id,
  title,
  subtitle,
  buttonLabel,
  footerColumns,
  copyright,
}) {
  return (
    <section className="newsletter-section" id={id}>
      <div className="newsletter-section__inner">
        <div className="newsletter-section__hero">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <button type="button" className="newsletter-section__button">
            {buttonLabel}
          </button>
        </div>

        <footer className="newsletter-section__footer">
          {footerColumns.map((column) => (
            <div key={column.title} id={column.id}>
              <h3>{column.title}</h3>
              {column.items.map((item) =>
                item.href ? (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ) : (
                  <p key={item.label}>{item.label}</p>
                ),
              )}
            </div>
          ))}
        </footer>

        <p className="newsletter-section__copyright">{copyright}</p>
      </div>
    </section>
  );
}
