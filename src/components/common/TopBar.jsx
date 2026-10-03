function TopBar() {
  return (
    <div className="w-full border-b border-slate-200 bg-white text-slate-600">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row">

        {/* Left Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] tracking-[0.1em] sm:justify-start sm:text-[11px]">

          <span className="font-medium text-slate-500">
            Monday, Sep 28, 2026
          </span>

          <span className="hidden h-3 w-px bg-slate-300 sm:block" />

          <a
            href="#"
            className="font-semibold transition-colors hover:text-[#258FA1]"
          >
            ABOUT US
          </a>

          <span className="hidden h-3 w-px bg-slate-300 sm:block" />

          <a
            href="#"
            className="font-semibold transition-colors hover:text-[#258FA1]"
          >
            ADVERTISE
          </a>

          <span className="hidden h-3 w-px bg-slate-300 sm:block" />

          <a
            href="#"
            className="font-semibold transition-colors hover:text-[#258FA1]"
          >
            CONTACT US
          </a>

          <span className="hidden h-3 w-px bg-slate-300 sm:block" />

          <a
            href="#"
            className="font-semibold transition-colors hover:text-[#258FA1]"
          >
            SUBSCRIPTION
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-1.5">

          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#0A66C2] text-[10px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            in
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#1877F2] text-[11px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            f
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#E1306C] text-[11px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            ◎
          </a>

          <a
            href="#"
            aria-label="X"
            className="flex h-6 w-6 items-center justify-center rounded-sm bg-black text-[10px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            X
          </a>

          <button className="ml-1 bg-[#F5D66A] px-3 py-1.5 text-[9px] font-bold tracking-[0.1em] text-slate-900 transition-colors hover:bg-[#eacb55] sm:px-4">
            SUBSCRIBE
          </button>

        </div>
      </div>
    </div>
  );
}

export default TopBar;