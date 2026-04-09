export function HighlightWord({ children, tone = 'mint' }) {
  return <span className={`highlight-word highlight-word--${tone}`}>{children}</span>;
}
