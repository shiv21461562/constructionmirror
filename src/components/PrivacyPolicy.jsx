
import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "01",
    title: "Introduction",
    description:
      "Your privacy matters to us. This Privacy Policy explains how Construction Mirror may collect, use, store and protect information when you visit our website or interact with our services.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Information We Collect",
    description:
      "We may collect information you voluntarily provide through contact forms, subscriptions or enquiries, along with technical information such as browser type, device information, IP address and website usage data.",
    icon: "◎",
  },
  {
    number: "03",
    title: "How We Use Information",
    description:
      "Information may be used to respond to enquiries, improve our content, understand readership, maintain website performance, protect our services and communicate relevant updates where permitted.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Cookies & Analytics",
    description:
      "Cookies and analytics tools may help us understand visitor behaviour and improve the browsing experience. You can manage cookies through your browser settings. Any consent requirements will be handled where applicable.",
    icon: "⌘",
  },
  {
    number: "05",
    title: "Data Sharing & Security",
    description:
      "Information may be processed by service providers supporting our website and operations, where necessary. We take reasonable steps to protect information, although no online transmission or storage system can be guaranteed completely secure.",
    icon: "⬡",
  },
  {
    number: "06",
    title: "Your Privacy Choices",
    description:
      "Depending on applicable law, you may have rights to access, correct, delete or otherwise manage your personal information. Contact us to submit a privacy-related request.",
    icon: "✳",
  },
];

const splitPoints = (text) =>
  text
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl text-center sm:text-left">
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1930] sm:text-4xl">
                Privacy Policy
              </h1>

              <p className="mt-4 max-w-xl text-center text-sm leading-7 text-slate-600 sm:text-left">
                Transparency builds trust. Discover how Construction Mirror
                handles information and works to protect your privacy while you
                explore our world of construction and infrastructure.
              </p>
            </div>

            <nav
              aria-label="Privacy policy sections"
              className="hidden w-64 rounded-xl border border-slate-200 p-4 lg:block"
            >
              <p className="px-2 text-xs font-medium text-slate-400">
                Jump to
              </p>

              <ul className="mt-2">
                {sections.map((s) => (
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

      {/* Policy Sections */}
      {sections.map((section, i) => {
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
              {/* Section Heading */}
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

                <div className="mt-4 h-px w-10 bg-amber-400" />
              </div>

              {/* Description Points */}
              <ul
                className={`space-y-3 ${
                  dark ? "lg:order-1" : ""
                }`}
              >
                {splitPoints(section.description).map((point, index) => (
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
                Questions about your privacy?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Our team is available to help with privacy-related questions and
                enquiries.
              </p>
            </div>

            <a
              href="mailto:neha@constructionmirror.com?subject=Privacy%20Policy%20Enquiry"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#0b1930] px-5 py-3 text-sm font-medium text-white transition hover:bg-amber-400 hover:text-[#0b1930]"
            >
              Contact Our Team
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Footer Links */}
          <div className="mt-8 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <Link
              to="/terms"
              className="font-medium text-slate-600 transition hover:text-amber-700"
            >
              Read Terms &amp; Conditions →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
