import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Gallery from "./Gallery";
import Contacts from "./Contacts";
import Motion from "./Motion";
import useTheme from "./hooks/useTheme";
import { SunIcon, MoonIcon } from "./ThemeIcons";

// Sidebar без кнопки темы
function Sidebar({ selectedCategory, setSelectedCategory }) {
  const location = useLocation();
  const [openCategories, setOpenCategories] = useState([]);

  const categories = {
    projects: {
      label: "Projects",
      subcategories: ["Portraits", "Editorial"],
    },
    works: {
      label: "Works",
      subcategories: ["Golden Age", "mmmesss"],
    },
    motion: {
      label: "Motion",
      path: "/motion",
    },
    contacts: {
      label: "Contacts",
      path: "/contacts",
    },
  };

  const toggleCategory = (key) => {
    setOpenCategories((prev) =>
      prev.includes(key)
        ? prev.filter((k) => k !== key)
        : [...prev, key]
    );
  };

  return (
    <aside
      className="fixed top-0 left-0 h-full flex flex-col bg-white dark:bg-gray-950"
      style={{ width: 200, padding: "40px 24px" }}
    >
      <Link
        to="/"
        className="text-4xl mb-16 block hover:text-yellow-400 transition text-gray-900 dark:text-white"
      >
        hankim studio
      </Link>

      <nav className="flex flex-col gap-4 text-lg text-gray-700 dark:text-gray-300 flex-grow">
        {Object.entries(categories).map(([key, value]) => {
          if (value.subcategories) {
            const isOpen = openCategories.includes(key);
            return (
              <div key={key}>
                <button
                  onClick={() => toggleCategory(key)}
                  className="font-semibold hover:text-yellow-400 transition w-full text-left"
                >
                  {value.label}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <ul className="ml-2 flex flex-col gap-1">
                    {value.subcategories.map((sub) => {
                      const subPath = `/${key}/${sub
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;
                      return (
                        <Link
                          key={sub}
                          to={subPath}
                          className={`transition hover:text-yellow-400 ${
                            location.pathname === subPath
                              ? "text-yellow-400"
                              : ""
                          }`}
                        >
                          {sub}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          } else {
            return (
              <Link
                key={key}
                to={value.path}
                className={`transition hover:text-yellow-400 ${
                  location.pathname === value.path ? "text-yellow-400" : ""
                }`}
              >
                {value.label}
              </Link>
            );
          }
        })}
      </nav>
    </aside>
  );
}

// Переключатель темы — иконки SVG, круглая кнопка
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center border border-gray-400 dark:border-gray-600 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur hover:border-yellow-400 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5 text-black dark:text-white transition-colors" />
      ) : (
        <MoonIcon className="w-5 h-5 text-black dark:text-white transition-colors" />
      )}
    </button>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("projects");
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="relative z-10 min-h-screen font-sans bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <main className="ml-[200px] pt-[110px] px-8 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Gallery category="projects" />} />
            <Route path="/projects/:subcategory?" element={<Gallery category="projects" />} />
            <Route path="/works/:subcategory?" element={<Gallery category="works" />} />
            <Route path="/motion" element={<Motion />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <footer className="p-6 text-center text-sm text-gray-400 dark:text-gray-500">
          © 2025 Han Kim Studio. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
