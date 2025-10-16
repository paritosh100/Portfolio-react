import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Certificates from "./components/Certifications.jsx";
import Publications from "./components/Publications.jsx";
import Footer from "./components/Footer.jsx";
import { nav, education } from "./data.js";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  // Theme persistence
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Active section highlight (optional: keep if you want)
  const [active, setActive] = useState("home");
  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) { setActive(e.target.id); break; }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav active={active} toggleTheme={toggleTheme} theme={theme} />
      <main>
        <section id="home"><Hero /></section>
        {/* <section id="about" className="section"><About /></section> */}

        {/* Education (container + stacked cards) */}
        <section id="education" className="section">
          <div className="container">
            <header className="section-header center-text"><h2>Education</h2></header>
            <div className="stack gap-m">
              {education.map((ed, i) => (
                <article key={i} className="card">
                  <h3 className="card-title">{ed.school}</h3>
                  <p className="muted">{ed.degree} — {ed.dates}</p>
                  {ed.details && <p>{ed.details}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section"><Experience /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="skills" className="section"><Skills /></section>
        <section id="certifications" className="section"><Certificates /></section>
        <section id="publications" className="section"><Publications /></section>
        {/* <section id="footer" className="section"><Footer/></section> */}
        {/* No contact section here; footer is outside main so it stays a thin strip */}
      </main>
      <Footer />
      <Analytics/>
    </>
  );
}
