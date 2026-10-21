
import React from "react";
import { Link } from "react-router-dom";

const termsSections = [
  {
    number: "01",
    title: "Introduction",
    icon: "◈",
    description:
      "Welcome to Construction Mirror. These Terms & Conditions govern your access to and use of our website, articles, publications and related services. By accessing our website, you agree to comply with these terms.",
    points: [
      "Please read these terms before using our website.",
      "If you do not agree with these terms, please discontinue use of the website.",
    ],
  },
  {
    number: "02",
    title: "Use of Website",
    icon: "↗",
    description:
      "Our website provides news, insights and information related to construction equipment, infrastructure and associated industries.",
    points: [
      "Use the website only for lawful purposes.",
      "Do not attempt to disrupt website operations or compromise its security.",
      "Do not misuse forms, services or website content.",
    ],
  },
  {
    number: "03",
    title: "Intellectual Property",
    icon: "✳",
    description:
      "Website materials, including original articles, graphics, logos, photographs and other content, may be protected by copyright and other intellectual property laws.",
    points: [
      "Content may not be reproduced or redistributed without appropriate permission.",
      "Third-party trademarks and materials remain the property of their respective owners.",
      "Proper authorization must be obtained before commercial reuse of protected content.",
    ],
  },
  {
    number: "04",
    title: "News & Content Disclaimer",
    icon: "◎",
    description:
      "Construction Mirror aims to provide informative and relevant industry content. Information is published for general informational purposes and may change over time.",
    points: [
      "Readers should independently verify important information before relying on it.",
      "Industry updates, estimates and opinions may not represent professional advice.",
      "We may correct, update or remove content when necessary.",
    ],
  },
  {
    number: "05",
    title: "Third-Party Websites",
    icon: "⌘",
    description:
      "Our website may contain links to external websites or third-party resources for additional information and convenience.",
    points: [
      "External websites operate under their own terms and privacy policies.",
      "We do not control the availability or content of third-party websites.",
      "Review the relevant website policies before using external services.",
    ],
  },
  {
    number: "06",
    title: "Limitation of Liability",
    icon: "⬡",
    description:
      "To the extent permitted by applicable law, Construction Mirror and its operator shall not be liable for losses arising from reliance on website information or temporary interruptions in website availability.",
    points: [
      "Nothing in these terms excludes liability that cannot legally be excluded.",
      "Users remain responsible for evaluating information before making decisions.",
    ],
  },
];

function TermsConditions() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl text-center sm:text-left">
              <h1 className="mt-3 text-center text-3xl font-semibold tracking-tight text-[#0b1930] sm:text-left sm:text-4xl">
                Terms &amp; Conditions
              </h1>

              <p className="mt-4 max-w-xl text-center text-sm leading-7 text-slate-600 sm:text-left">
                Welcome to Construction Mirror. These terms explain the basic
                rules for accessing our website, exploring our content and
                using our digital services.
              </p>
            </div>

            <nav
              aria-label="Terms sections"
              className="hidden w-64 rounded-xl border border-slate-200 p-4 lg:block"
            >
              <p className="px-2 text-xs font-medium text-slate-400">
                Jump to
              </p>

              <ul className="mt-2">
                {termsSections.map((s) => (
                  <li key={s.number}>
                    <a
                      href={`#section-${s.number}`}
                      className="flex items-center gap-3 rounded-md px-2 py-1.5 text-[13px] text-slate-600 transition hover:text-amber-700"
                    >
                      <span className="w-5 text-xs text-slate-400">
                        {s.number}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="h-px bg-slate-200" />
      </section>

      {/* Terms Sections */}
      {termsSections.map((section, i) => {
        const dark = i % 2 === 1;

        return (
          <section
            key={section.number}
            id={`section-${section.number}`}
            className={`scroll-mt-4 ${
              dark ? "bg-[#0b1930] text-white" : "bg-white text-slate-800"
            }`}
          >
            <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16">
              {/* Section Heading and Description */}
              <div
                className={`flex flex-col items-center text-center sm:items-start sm:text-left ${
                  dark ? "lg:order-2" : ""
                }`}
              >
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${
                      dark
                        ? "bg-amber-300 text-[#0b1930]"
                        : "bg-[#0b1930] text-amber-300"
                    }`}
                  >
                    {section.icon}
                  </div>
                </div>

                <h2
                  className={`mt-5 text-center text-xl font-semibold tracking-tight sm:text-left sm:text-2xl ${
                    dark ? "text-white" : "text-[#0b1930]"
                  }`}
                >
                  {section.title}
                </h2>

                <p
                  className={`mt-3 max-w-lg text-center text-sm leading-7 sm:text-left ${
                    dark ? "text-white/65" : "text-slate-600"
                  }`}
                >
                  {section.description}
                </p>
              </div>

              {/* Terms Points */}
              <ul
                className={`space-y-3 ${
                  dark ? "lg:order-1" : ""
                }`}
              >
                {section.points.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start justify-center gap-3 rounded-lg border px-4 py-3.5 text-center text-[13px] leading-6 sm:justify-start sm:text-left ${
                      dark
                        ? "border-white/10 text-white/80"
                        : "border-slate-200 text-slate-700"
                    }`}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* Contact */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="flex flex-col items-center gap-5 rounded-xl border border-slate-200 p-6 text-center sm:items-start sm:p-8 sm:text-left md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <h2 className="text-lg font-semibold text-[#0b1930] sm:text-xl">
                Need clarification?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Contact our team if you have questions about these terms or
                your use of our website.
              </p>
            </div>

            <a
              href="mailto:neha@constructionmirror.com?subject=Terms%20and%20Conditions%20Enquiry"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#0b1930] px-5 py-3 text-sm font-medium text-white transition hover:bg-amber-400 hover:text-[#0b1930]"
            >
              Contact Our Team
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Footer Link */}
          <div className="mt-8 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/privacy-policy"
              className="text-center font-medium text-slate-600 transition hover:text-amber-700 sm:text-left"
            >
              Read Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TermsConditions;
