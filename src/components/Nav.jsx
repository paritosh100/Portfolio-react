import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { nav, identity } from '../data.js';
import { Menu, X, Sun, Moon, Briefcase } from 'lucide-react';

export default function Nav({ active }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-theme');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark-theme');
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll for header padding
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`topnav ${scrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Mobile brand logo always visible on topnav */}
      <a
        href="#home"
        className="nav-logo mobile-only-logo"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}
      >
        Paritosh Gandre
      </a>

      {/* Desktop Navigation */}
      <div className="nav-desktop">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Paritosh Gandre
        </a>
        <ul className="navlist">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginLeft: '12px' }}>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={`mailto:${identity.email}?subject=Let's%20Work%20Together`}
              className="nav-open-to-work"
              title="Open to work - Contact me"
            >
              <Briefcase size={18} />
              <span>Open to work</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Top Header Actions */}
      <div className="mobile-actions">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="nav-mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        >
          <ul className="navlist-mobile">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
