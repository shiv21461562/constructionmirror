import { Link } from "react-router-dom";

/* =========================================================
   FOOTER DATA
========================================================= */

const LOGO = "/logo/cm-logo.webp";

const TAGLINE =
  "India's monthly magazine on construction equipment and infrastructure: expert interviews, engineering, labour laws, funding, regulations and sustainability.";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Advertise", to: "/advertise" },
      { label: "Contact Us", to: "/contact" },
      { label: "Subscription", to: "/subscription" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "News", to: "/news" },
      { label: "Interviews", to: "/interview" },
      { label: "Cover Story", to: "/cover-story" },
      { label: "Magazines", to: "/magazines" },
      { label: "Event Calendar", to: "/event-calendar" },
    ],
  },
];

const company = {
  name: "Tresub Media Pvt Ltd",
  address: [
    "Gaur City Mall 14th Floor",
    "(Office No. 14130, 14130-A)",
    "Sector-04, Greater Noida-201318",
    "Uttar Pradesh, India",
  ],
  phone: "+91-120-5162126",
  email: "neha@constructionmirror.com",
  web: "constructionmirror.com",
};

const socials = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "X", href: "#", icon: "x" },
];

/* =========================================================
   SOCIAL ICONS
========================================================= */

function SocialIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-[17px] w-[17px]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg {...common}>
        <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5v.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        group relative inline-flex
        w-fit
        text-[14px]
        font-normal
        tracking-[0.01em]
        text-white/65
        transition-colors
        duration-300
        hover:text-white
      "
    >
      <span>{children}</span>

      {/* Animated underline */}
      <span
        className="
          absolute
          -bottom-1
          left-0
          h-px
          w-0
          bg-[#E6C36E]
          transition-all
          duration-300
          ease-out
          group-hover:w-full
        "
      />
    </Link>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#C99A3B]/60 bg-[#081022] text-white">

      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#C99A3B]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#1d3b70]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div
          className="
            grid
            gap-14
            py-14
            sm:py-16
            lg:grid-cols-[1.25fr_2fr]
            lg:gap-20
            lg:py-20
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-[430px]">

            {/* LOGO — NO BACKGROUND */}
            <Link
              to="/"
              aria-label="Construction Mirror home"
              className="
                inline-flex
                items-center
                transition-opacity
                duration-300
                hover:opacity-85
              "
            >
              <img
                src={LOGO}
                alt="Construction Mirror"
                className="
                  h-14
                  w-auto
                  object-contain
                  sm:h-16
                "
              />
            </Link>

            {/* Gold line */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E6C36E]" />
              <span className="h-px w-3 bg-[#E6C36E]/40" />
            </div>

            {/* Tagline */}
            <p
              className="
                mt-5
                max-w-[400px]
                text-[14px]
                leading-[1.8]
                text-white/55
                sm:text-[15px]
              "
            >
              {TAGLINE}
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/55
                    transition-all
                    duration-300
                    hover:border-[#E6C36E]
                    hover:bg-[#E6C36E]
                    hover:text-[#081022]
                  "
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              grid
              gap-12
              sm:grid-cols-2
              lg:grid-cols-[0.8fr_0.8fr_1.4fr]
              lg:gap-10
            "
          >

            {/* QUICK LINKS */}
            <div>
              <h3
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#E6C36E]
                "
              >
                Quick Links
              </h3>

              <ul className="mt-6 space-y-4">
                {columns[0].links.map((link) => (
                  <li key={link.label}>
                    <FooterLink to={link.to}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPLORE */}
            <div>
              <h3
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#E6C36E]
                "
              >
                Explore
              </h3>

              <ul className="mt-6 space-y-4">
                {columns[1].links.map((link) => (
                  <li key={link.label}>
                    <FooterLink to={link.to}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#E6C36E]
                "
              >
                Contact
              </h3>

              <div className="mt-6">

                <p className="text-[15px] font-semibold text-white">
                  {company.name}
                </p>

                <address
                  className="
                    mt-3
                    space-y-1
                    text-[13px]
                    not-italic
                    leading-[1.7]
                    text-white/55
                  "
                >
                  {company.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>

                {/* Contact details */}
                <div className="mt-5 space-y-3">

                  <a
                    href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                    className="
                      group
                      block
                      w-fit
                      text-[13px]
                      text-white/65
                      transition-colors
                      hover:text-[#E6C36E]
                    "
                  >
                    <span className="mr-2 text-[#E6C36E]">T</span>
                    {company.phone}
                  </a>

                  <a
                    href={`mailto:${company.email}`}
                    className="
                      group
                      block
                      w-fit
                      break-all
                      text-[13px]
                      text-white/65
                      transition-colors
                      hover:text-[#E6C36E]
                    "
                  >
                    <span className="mr-2 text-[#E6C36E]">@</span>
                    {company.email}
                  </a>

                  <a
                    href={`https://${company.web}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block
                      w-fit
                      text-[13px]
                      text-white/65
                      transition-colors
                      hover:text-[#E6C36E]
                    "
                  >
                    <span className="mr-2 text-[#E6C36E]">↗</span>
                    {company.web}
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-6
            text-[12px]
            text-white/45
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            Copyright © {new Date().getFullYear()} {company.name}.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <FooterLink to="/terms">
              Terms & Conditions
            </FooterLink>

            <FooterLink to="/privacy-policy">
              Privacy Policy
            </FooterLink>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;