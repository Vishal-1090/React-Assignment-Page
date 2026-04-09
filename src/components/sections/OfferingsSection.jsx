import { DecorativeScribble } from '../shared/DecorativeScribble';

function OfferingRow({ label, title }) {
  return (
    <article className="offerings-section__row">
      <p>{label}</p>
      <h3>{title}</h3>
      <button type="button" aria-label={`Open ${title}`}>
        <span>→</span>
      </button>
    </article>
  );
}

export function OfferingsSection({ id, title, rows }) {
  return (
    <section className="offerings-section" id={id}>
      <div className="offerings-section__heading">
        <h2>{title}</h2>
        <DecorativeScribble className="offerings-section__scribble" />
      </div>

      <div className="offerings-section__table">
        {rows.map((row) => (
          <OfferingRow key={row.title} label={row.label} title={row.title} />
        ))}
      </div>
    </section>
  );
}
