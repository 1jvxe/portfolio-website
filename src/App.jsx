import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

const THEME_KEY = "abudy-portfolio-theme";
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Contacts = lazy(() => import("./pages/Contacts.jsx"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <div className="page-shell">
        <NavBar theme={appTheme.theme} toggleTheme={appTheme.toggleTheme} />
        <main className="pb-8 pt-28 md:pt-32">
          <Suspense
            fallback={
              <div className="section-wrap">
                <div className="glass-panel rounded-[36px] px-6 py-12 text-center text-base font-semibold text-[var(--muted)]">
                  Loading...
                </div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contacts />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
