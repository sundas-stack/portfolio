import { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  ['Work', '/#work'],
  ['Experience', '/#experience'],
  ['Academics', '/#academics'],
  ['About', '/#about'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <nav className="container nav__inner" aria-label="Main">
        <Link to="/" className="nav__logo" onClick={close}>
          SMH<span className="accent">.</span>
        </Link>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <div className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([label, to]) => (
            <Link key={to} to={to} className="nav__link" onClick={close}>
              {label}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn--primary btn--sm" onClick={close}>
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
