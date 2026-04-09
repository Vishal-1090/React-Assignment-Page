export function ArrowLink({ href, children }) {
  return (
    <a className="arrow-link" href={href}>
      <span>{children}</span>
      <span className="arrow-link__line" aria-hidden="true" />
      <span className="arrow-link__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
