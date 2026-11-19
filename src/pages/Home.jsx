import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHead from '../components/SectionHead.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { categories, projects } from '../data/projects.js';
import {
  profile, marquee, services, experience, education, coursework,
  certifications, leadership, awards, about,
} from '../data/profile.js';

function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero__text">
        <p className="eyebrow eyebrow--accent">{profile.role}</p>
        <h1 className="hero__name">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="btn-row">
          <Link to="/#work" className="btn btn--primary">See my work</Link>
          <Link to="/#contact" className="btn btn--ghost">Get in touch</Link>
        </div>
        <p className="small muted">{profile.location}</p>
      </div>
      <div className="hero__photo">
        <img src={profile.photo} alt={`Portrait of ${profile.firstName} ${profile.lastName}`} />
        {profile.available && (
          <span className="badge">
            <span className="badge__dot" aria-hidden="true" />
            Available for work
          </span>
        )}
      </div>
    </section>
  );
}

function Marquee() {
  const row = marquee.flatMap((name) => [name, '✦']);
  return (
    <section className="marquee" aria-label="Where I have worked and studied">
      <div className="marquee__track">
        {[...row, ...row].map((item, i) => (
          <span key={i} className={item === '✦' ? 'accent' : ''} aria-hidden={i >= row.length || undefined}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="container section">
      <SectionHead eyebrow="What I do" before="One engineer, the whole" em="product" />
      <div className="grid grid--4">
        {services.map((s, i) => (
          <div key={s.title} className="card service">
            <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="h3 h3--sm">{s.title}</h3>
            <p className="muted small-text">{s.text}</p>
            <p className="service__tools">{s.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  const [filter, setFilter] = useState('all');
  const tabs = categories.filter(
    (c) => c.id === 'all' || projects.some((p) => p.categories.includes(c.id))
  );
  const shown = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="work" className="container section">
      <div className="section-head section-head--row">
        <SectionHead eyebrow="Selected work" before="Things I have" em="shipped" />
        <a href={profile.github} target="_blank" rel="noreferrer" className="small muted">
          All repositories on GitHub ↗
        </a>
      </div>
      <div className="filters" role="group" aria-label="Filter projects">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`chip ${filter === t.id ? 'is-active' : ''}`}
            aria-pressed={filter === t.id}
            onClick={() => setFilter(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid grid--projects">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="container section">
      <SectionHead eyebrow="Experience" before="Where I have" em="worked" />
      <div className="timeline">
        {experience.map((e) => (
          <div key={e.title + e.dates} className="timeline__row">
            <span className="timeline__dates">{e.dates}</span>
            <div className="timeline__body">
              <h3 className="h3 h3--sm">{e.title}</h3>
              <p className="accent small">{e.org}</p>
              <p className="muted">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Academics() {
  return (
    <section id="academics" className="container section">
      <SectionHead eyebrow="Academics & leadership" before="Learning, and" em="leading" />

      <div className="grid grid--2">
        <div className="card pad">
          <p className="label">Education</p>
          <div className="edu">
            {education.map((e) => (
              <div key={e.title} className="edu__row">
                <div>
                  <h3 className="h3 h3--sm">{e.title}</h3>
                  <p className="muted small">
                    {e.school}
                    {e.years !== e.title ? ` · ${e.years}` : ''}
                  </p>
                </div>
                <span className="edu__score">{e.score}</span>
              </div>
            ))}
          </div>
          <p className="muted small">Coursework: {coursework}</p>
        </div>

        <div className="card pad stack">
          <div>
            <p className="label">Leadership</p>
            <div className="stack stack--sm">
              {leadership.map((l) => (
                <p key={l.title} className="small-text">
                  <strong>{l.title}</strong> <span className="muted">· {l.detail}</span>
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="label">Certifications</p>
            <div className="tags">
              {certifications.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid--2">
        {awards.map((a) => (
          <figure key={a.title} className="card award">
            <img src={a.image} alt={a.alt} style={{ objectPosition: a.position }} />
            <figcaption className="award__text">
              <span className="accent small">{a.year}</span>
              <span className="h3 h3--sm">{a.title}</span>
              <span className="muted small-text">{a.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container section about">
      <div className="about__head">
        <SectionHead eyebrow="About" before="Design eye," em="engineer's" after=" hands." />
      </div>
      <div className="about__text">
        {about.map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container section">
      <div className="card contact">
        <div className="contact__text">
          <h2 className="contact__title">
            Let's <em className="serif-em">talk</em>.
          </h2>
          <p className="muted lead">
            Open to software, frontend, mobile and AI engineering roles, remote or in Islamabad.
            Tell me what you are building, your stack and your timeline.
          </p>
        </div>
        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">{profile.email}</a>
          <div className="btn-row btn-row--center">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Experience />
      <Academics />
      <About />
      <Contact />
    </>
  );
}
