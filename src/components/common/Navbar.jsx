import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

/*
  LOGO PATH:
  public/logo/cm-logo.webp  ->  src="/logo/cm-logo.webp"

  COLORS (Construction Mirror ke gold logo ke hisaab se):
  Navy bg   : #0A1322
  Navy soft : #111E36
  Gold      : #D4AF5A
*/
const LOGO_SRC = "/logo/cm-logo.webp";

/* Center wala menu */
const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "MAGAZINES", path: "/magazines" },
  {
    name: "NEWS",
    path: "/news",
    children: [
      {
        name: "National News",
        path: "/news/national",
      },
      {
        name: "International News",
        path: "/news/international",
      },
    ],
  },
  { name: "INTERVIEWS", path: "/interview" },
{
  name: "RESOURCES",
  path: "/resources",
  children: [
    {
      name: "Product Info",
      path: "/resources",
    },
    {
      name: "Guest Article",
      path: "/resources/guest-article",
    },
    {
      name: "Quotes",
      path: "/resources/quotes",
    },
  ],
},
  {
    name: "MORE",
    path: "#",
    children: [
      {
        name: "Cover Story",
        path: "/cover-story",
      },
      {
        name: "Editorial Calendar",
        path: "/editorial-calendar",
      },
      {
        name: "Event Calendar",
        path: "/event-calendar",
      },
      {
        name: "Gallery",
        path: "/gallery",
      },
      {
        name: "Advertise",
        path: "/advertise",
      },
      {
        name: "Subscription",
        path: "/subscription",
      },
    ],
  },
];

/* Right side ka button */
const contactItem = { name: "CONTACT", path: "/contact" };

function Chevron({ className = "" }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Arrow({ className = "" }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <div className="relative h-4 w-6">
      <span
        className={`absolute left-0 h-[2px] w-full rounded bg-[#D4AF5A] transition-all duration-300 ${
          open ? "top-[7px] rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] h-[2px] rounded bg-[#D4AF5A] transition-all duration-300 ${
          open ? "w-full opacity-0" : "w-4"
        }`}
      />
      <span
        className={`absolute left-0 h-[2px] w-full rounded bg-[#D4AF5A] transition-all duration-300 ${
          open ? "top-[7px] -rotate-45" : "top-[14px]"
        }`}
      />
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const matches = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  // Dropdown wale item tab active jab uska koi bhi child page khula ho
  const isSectionActive = (item) =>
    item.children
      ? item.children.some((c) => matches(c.path))
      : matches(item.path);

  const contactActive = matches(contactItem.path);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-gradient-to-r from-[#0A1322] via-[#0E1A30] to-[#0A1322] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]" : ""
      }`}
    >
      {/* Top gold accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#D4AF5A] to-transparent" />

      <nav
        className={`mx-auto flex w-full max-w-[1600px] items-center px-4 transition-all duration-300 sm:px-8 xl:px-10 ${
          scrolled ? "h-[76px]" : "h-[85px]"
        }`}
      >
        {/* ============ LEFT: LOGO ============ */}
        <div className="flex items-center xl:flex-1">
          <NavLink
            to="/"
            className="flex shrink-0 items-center"
            aria-label="Home"
          >
            <img
              src={LOGO_SRC}
              alt="Construction Mirror"
              className={`w-auto object-contain drop-shadow-[0_2px_10px_rgba(212,175,90,0.25)] transition-all duration-300 ${
                scrolled ? "h-12 sm:h-14" : "h-14 sm:h-[72px]"
              }`}
            />
          </NavLink>
        </div>

        {/* ============ CENTER: DESKTOP MENU ============ */}
        <ul className="hidden items-center justify-center xl:flex">
          {navItems.map((item) => {
            const active = isSectionActive(item);
            const linkClass = `relative flex items-center gap-1.5 px-3.5 py-8 text-[11px] font-medium tracking-[0.13em] whitespace-nowrap transition-colors duration-300 2xl:px-5 ${
              active
                ? "text-[#D4AF5A]"
                : "text-slate-300 group-hover:text-white"
            }`;

            const content = (
              <>
                <span>{item.name}</span>
                {item.children && (
                  <Chevron className="group-hover:rotate-180 group-focus-within:rotate-180" />
                )}
                <span
                  className={`absolute bottom-5 left-3.5 right-3.5 h-[2px] origin-left rounded bg-[#D4AF5A] transition-transform duration-300 2xl:left-5 2xl:right-5 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </>
            );

            return (
              <li key={item.name} className="group relative">
                {item.path === "#" ? (
                  <button type="button" className={linkClass}>
                    {content}
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    end={!item.children}
                    className={linkClass}
                  >
                    {content}
                  </NavLink>
                )}

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-b-md border-t-2 border-[#D4AF5A] bg-[#0F1A2E] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          end
                          className={({ isActive }) =>
                            `block border-l-2 px-5 py-3 text-[13px] transition-all duration-200 ${
                              isActive
                                ? "border-[#D4AF5A] bg-white/5 font-semibold text-[#D4AF5A]"
                                : "border-transparent text-slate-300 hover:border-[#D4AF5A] hover:bg-white/5 hover:pl-6 hover:text-white"
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* ============ RIGHT: CONTACT + MOBILE BUTTON ============ */}
        <div className="ml-auto flex items-center justify-end xl:ml-0 xl:flex-1">
          {/* Desktop CONTACT button */}
          <NavLink
            to={contactItem.path}
            className="group hidden xl:inline-flex items-center gap-3 rounded-full border border-[#D4AF5A]/80 bg-white/[0.06] px-5 py-2 text-[10px] font-bold tracking-[0.15em] text-[#E6C473] backdrop-blur-xl transition-all duration-500 hover:border-[#E6C473] hover:bg-white/[0.12] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_25px_-8px_rgba(212,175,90,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF5A]"
          >
            <span>{contactItem.name}</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E6C473]/70 bg-[#D4AF5A]/10 transition-all duration-500 group-hover:bg-[#D4AF5A]/20 group-hover:shadow-[0_0_12px_rgba(212,175,90,0.5)]">
              <Arrow className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5" />
            </span>
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF5A] xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* ============ MOBILE MENU ============ */}
      <div
        className={`grid transition-all duration-300 ease-out xl:hidden ${
          mobileOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-h-[calc(100vh-100px)] overflow-y-auto border-t border-white/10 bg-[#0A1322] px-4 pb-8 pt-2 sm:px-8">
            {navItems.map((item) => {
              const active = isSectionActive(item);
              const open = expanded === item.name;

              if (!item.children) {
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end
                    className={`flex items-center justify-between border-b border-white/10 py-4 text-[12px] font-semibold tracking-[0.16em] transition-colors ${
                      active ? "text-[#D4AF5A]" : "text-slate-200"
                    }`}
                  >
                    {item.name}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF5A]" />
                    )}
                  </NavLink>
                );
              }

              return (
                <div key={item.name} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setExpanded(open ? null : item.name)}
                    aria-expanded={open}
                    className={`flex w-full items-center justify-between py-4 text-left text-[12px] font-semibold tracking-[0.16em] transition-colors ${
                      active || open ? "text-[#D4AF5A]" : "text-slate-200"
                    }`}
                  >
                    {item.name}
                    <Chevron className={open ? "rotate-180" : ""} />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-3 ml-1 rounded-md bg-[#111E36] py-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            end
                            className={({ isActive }) =>
                              `block px-4 py-3 text-[13px] transition-colors ${
                                isActive
                                  ? "font-semibold text-[#D4AF5A]"
                                  : "text-slate-300"
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mobile CONTACT button */}
            {/* Mobile CONTACT button */}
            <NavLink
              to={contactItem.path}
              className={`group mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-[#D4AF5A] bg-gradient-to-r px-7 py-3.5 text-[11px] font-bold tracking-[0.16em] text-[#0A1322] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF5A] ${
                contactActive
                  ? "from-[#D4AF5A] to-[#B8862C] shadow-[0_10px_28px_-6px_rgba(212,175,90,0.7)]"
                  : "from-[#E6C473] to-[#C99A3B] shadow-[0_8px_24px_-6px_rgba(212,175,90,0.6)] hover:from-[#D4AF5A] hover:to-[#B8862C] hover:shadow-[0_10px_28px_-6px_rgba(212,175,90,0.7)]"
              }`}
            >
              <span>{contactItem.name}</span>

              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
