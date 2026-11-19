import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { BrowserFrame } from '../components/ProjectCard.jsx';

function Block({ label, paragraphs, bullets }) {
  return (
    <section className="container cs-block">
      <h2 className="cs-block__label">{label}</h2>
      <div className="cs-block__body">
        {paragraphs?.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        {bullets && (
          <ul className="bullets">
            {bullets.map(([t, d]) => (
              <li key={t}>
                <span className="accent" aria-hidden="true">✦</span>
                <span><strong>{t}</strong> {d}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Gallery({ gallery }) {
  if (gallery.type === 'steps') {
    return (
      <section className="container cs-gallery">
        <h2 className="h2 h2--sm">{gallery.title}</h2>
        <div className="grid grid--3">
          {gallery.steps.map(([t, d], i) => (
            <div key={t} className="card service">
              <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h3 h3--sm">{t}</h3>
              <p className="muted small-text">{d}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  if (gallery.type === 'phones') {
    return (
      <section id="screens" className="container cs-gallery">
        <h2 className="h2 h2--sm">Screens</h2>
        <div className="phones" style={{ background: gallery.bg }}>
          {gallery.shots.map(([src, cap]) => (
            <figure key={src} className="phones__item">
              <img src={src} alt={`${cap} screen`} loading="lazy" />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section id="screens" className="container cs-gallery">
      <h2 className="h2 h2--sm">Screens</h2>
      <div className="grid grid--2">
        {gallery.shots.map(([src, cap]) => (
          <figure key={src} className="shot">
            <BrowserFrame src={src} alt={cap} />
            <figcaption className="muted small">{cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/" replace />;

  const p = projects[index];
  const cs = p.caseStudy;
  const next = projects[(index + 1) % projects.length];
  const links = [
    ...(p.live ? [['Live site', p.live]] : []),
    ...(p.github ? [['GitHub', p.github]] : []),
    ...(cs.links || []),
  ];

  return (
    <article className="case">
      <div className="container">
        <Link to="/#work" className="back">← All work</Link>
      </div>

      <header className="container cs-hero">
        <p className="eyebrow eyebrow--accent">{p.code} · Case study</p>
        <h1 className="cs-hero__title">{p.title}</h1>
        <p className="hero__tagline">{cs.intro}</p>
        {links.length > 0 && (
          <div className="btn-row">
            {links.map(([t, h]) => (
              <a key={h} href={h} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">{t} ↗</a>
            ))}
          </div>
        )}
        <dl className="cs-meta">
          {cs.meta.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      {cs.sections.map((s) => <Block key={s.label} {...s} />)}
      {cs.gallery && <Gallery gallery={cs.gallery} />}
      {cs.after?.map((s) => <Block key={s.label} {...s} />)}
      {cs.note && <Block label="Note" paragraphs={[cs.note]} />}

      {next.slug !== p.slug && (
        <section className="container next">
          <Link to={`/work/${next.slug}`} className="card next__link">
            <span>
              <span className="label">Next project</span>
              <span className="next__title">{next.title}</span>
            </span>
            <span className="accent next__arrow" aria-hidden="true">→</span>
          </Link>
        </section>
      )}
    </article>
  );
}
