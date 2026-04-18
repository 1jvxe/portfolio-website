import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";

const THEME_KEY = "abudy-portfolio-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);

    const themeColor = theme === "dark" ? "#07111f" : "#f4efe7";
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", themeColor);
    }
  }, [theme]);

  const appTheme = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === "light" ? "dark" : "light")),
    }),
    [theme],
  );

  return (
    <BrowserRouter>
      <div className="page-shell">
        <NavBar theme={appTheme.theme} toggleTheme={appTheme.toggleTheme} />
        <main className="pb-8 pt-28 md:pt-32">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contacts />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
