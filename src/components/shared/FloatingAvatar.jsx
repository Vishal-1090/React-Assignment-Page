export function FloatingAvatar({ person }) {
  return (
    <figure
      className={`floating-avatar floating-avatar--${person.size || 'md'}`}
      style={{ top: person.top, left: person.left, right: person.right, bottom: person.bottom }}
    >
      <img
        src={person.src}
        alt={person.name}
        style={{
          objectPosition: person.objectPosition,
          transform: person.scale ? `scale(${person.scale})` : undefined,
        }}
      />
    </figure>
  );
}
