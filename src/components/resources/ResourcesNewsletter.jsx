import { Mail } from "lucide-react";

const ResourcesNewsletter = () => {
  return (
    <section className="mx-auto max-w-[1220px] px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-[#0A1128] px-6 py-9 sm:px-10 sm:py-11">

        {/* Background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#C99A3B]/20 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Content */}
          <div className="max-w-md">
            <div className="mb-3 flex items-center gap-2 text-[#E6C473]">
              <Mail size={16} strokeWidth={1.8} />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
                Newsletter
              </span>
            </div>

            <h2 className="font-serif text-2xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
              Get new resources in your inbox
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              New editions, reports and guides, sent when they are published.
            </p>
          </div>

          {/* Subscribe Form */}
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-md">
            <label className="flex-1">
              <span className="sr-only">Email address</span>

              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#C99A3B] focus:outline-none"
              />
            </label>

            <button
              type="button"
              className="rounded-full bg-[#C99A3B] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0A1128] transition-colors duration-300 hover:bg-[#E6C473] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResourcesNewsletter;