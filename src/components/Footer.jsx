import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          {profile.firstName} {profile.lastName} · Software Engineer
        </span>
        <span className="footer__links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
