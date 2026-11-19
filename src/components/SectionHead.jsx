// "Things I have *shipped*." style headings
export default function SectionHead({ eyebrow, before, em, after = '.' }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">
        {before} <em className="serif-em">{em}</em>
        {after}
      </h2>
    </div>
  );
}
