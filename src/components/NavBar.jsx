import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const navLinkClass = ({ isActive }) =>
  [
    "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
    isActive
      ? "bg-[var(--nav-active-bg)] text-[var(--nav-active-text)] shadow-lg"
      : "text-[var(--muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--text)]",
  ].join(" ");

function ThemeToggle({ theme, toggleTheme, compact = false }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={[
        "inline-flex items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--text)] shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
        compact ? "h-11 w-11" : "gap-2 px-4 py-3 text-sm font-semibold",
      ].join(" ")}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
      {!compact && <span>{theme === "light" ? "Dark" : "Light"} mode</span>}
    </button>
  );
}

function NavBar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-panel section-wrap rounded-[28px] px-4 py-3 md:px-6"
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--text)] text-sm font-extrabold text-[var(--bg)] shadow-lg">
              AT
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                Portfolio
              </p>
              <p className="font-semibold text-[var(--text)]">
                Abdal-Rahman Tawakalna
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <a
              href="mailto:abudytawakalna@gmail.com"
              className="primary-button px-5 py-3 text-sm"
            >
              Let&apos;s Talk
              <FiArrowUpRight />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} compact />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--text)]"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-4 rounded-3xl border border-[var(--line)] bg-[var(--surface-strong)] p-3 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="mailto:abudytawakalna@gmail.com"
                className="primary-button mt-2 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Start a Conversation
                <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}

export default NavBar;
