import { ArrowLink } from '../shared/ArrowLink';
import { ImageCircle } from '../shared/ImageCircle';

export function StorySplitSection({
  id,
  title,
  body,
  image,
  reverse = false,
  accentShape = 'triangle',
  imageAlign = 'right',
  imageClassName = '',
}) {
  return (
    <section
      className={`story-split ${reverse ? 'story-split--reverse' : ''}`}
      id={id}
    >
      <div className="story-split__visual">
        <ImageCircle
          src={image.src}
          alt={image.alt}
          size={image.size}
          accentShape={accentShape}
          align={imageAlign}
          className={imageClassName}
        />
      </div>

      <div className="story-split__content">
        <h2>{title}</h2>
        <p>{body}</p>
        <ArrowLink href="#newsletter">Read more</ArrowLink>
      </div>
    </section>
  );
}
