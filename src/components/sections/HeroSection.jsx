import { DecorativeScribble } from '../shared/DecorativeScribble';

export function HeroSection({ id, title, subtitle, heroImage }) {
  return (
    <section className="hero-section" id={id}>
      <DecorativeScribble className="hero-section__scribble" />

      <h1 className="hero-section__title">{title}</h1>
      <p className="hero-section__subtitle">{subtitle}</p>

      <div className="hero-section__image-wrap">
        <img
          className="hero-section__image"
          src={heroImage.src}
          alt={heroImage.alt}
        />
      </div>
    </section>
  );
}
