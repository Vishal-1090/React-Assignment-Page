export function DecorativeScribble({ className = '' }) {
  return <span aria-hidden="true" className={`decorative-scribble ${className}`.trim()} />;
}
