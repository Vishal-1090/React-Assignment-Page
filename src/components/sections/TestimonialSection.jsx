export function TestimonialSection({ image }) {
  return (
    <section className="testimonial-section">
      <img
        className="testimonial-section__image"
        src={image.src}
        alt={image.alt}
      />
    </section>
  );
}
