export function ImageCircle({
  src,
  alt,
  size = 'lg',
  accentShape = 'triangle',
  align = 'left',
  className = '',
}) {
  return (
    <div
      className={[
        'image-circle',
        `image-circle--${size}`,
        `image-circle--${accentShape}`,
        `image-circle--align-${align}`,
        className,
      ].join(' ')}
    >
      <img src={src} alt={alt} />
      <span className="image-circle__accent" aria-hidden="true" />
    </div>
  );
}
