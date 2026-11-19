import { Link } from 'react-router-dom';

export function BrowserFrame({ src, alt }) {
  return (
    <div className="browser">
      <div className="browser__bar" aria-hidden="true">
        <span /> <span /> <span />
      </div>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function Cover({ cover }) {
  if (cover.type === 'browser') {
    return (
      <div className="card__cover card__cover--browser">
        <BrowserFrame src={cover.image} alt={cover.alt} />
      </div>
    );
  }
  if (cover.type === 'phones') {
    return (
      <div className="card__cover card__cover--phones" style={{ background: cover.bg }}>
        {cover.images.map(([src, alt], i) => (
          <img key={src} src={src} alt={alt} loading="lazy" className={i === 1 ? 'is-middle' : ''} />
        ))}
      </div>
    );
  }
  // flow
  return (
    <div className="card__cover card__cover--flow" role="img" aria-label={cover.steps.join(', then ')}>
      <div className="flow">
        {cover.steps.map((s, i) => (
          <span key={s} className="flow__item">
            <span className={`flow__step ${i === cover.steps.length - 1 ? 'is-last' : ''}`}>{s}</span>
            {i < cover.steps.length - 1 && <span className="flow__arrow" aria-hidden="true">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const hasScreens = project.cover.type !== 'flow';
  return (
    <article className="card project">
      <Cover cover={project.cover} />
      <div className="project__body">
        <div className="project__meta">
          <span>{project.code}</span>
          <span>{project.org}</span>
        </div>
        <h3 className="h3">{project.title}</h3>
        <p className="muted">{project.summary}</p>
        <div className="tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="project__links">
          <Link to={`/work/${project.slug}`} className="link-accent">
            {hasScreens ? 'Case study & screens →' : 'Case study →'}
          </Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>
          )}
        </div>
      </div>
    </article>
  );
}
