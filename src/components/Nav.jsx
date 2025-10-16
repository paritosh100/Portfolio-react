import { useEffect, useState } from "react";
import { nav } from "../data.js";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Nav({ active, toggleTheme, theme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`topnav ${open ? "open" : ""}`} role="navigation" aria-label="Main">
      {/* Desktop nav (centered) */}
      <nav className="nav-desktop" aria-label="Primary">
        <ul className="navlist">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="btn nav">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme toggle (always visible) */}
      {/* <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button> */}

      {/* Mobile hamburger */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71L12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29 6.29-6.3 1.42 1.42z"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
        )}
      </button>

      {/* Mobile menu (only shows when open) */}
      <nav id="mobile-menu" className="nav-mobile" aria-label="Mobile">
        <ul className="navlist-mobile" role="menu">
          {nav.map((item) => (
            <li key={item.id} role="none">
              <a role="menuitem" href={`#${item.id}`} className={active === item.id ? "active" : ""} onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
