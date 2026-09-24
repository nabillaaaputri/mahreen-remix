import RemixSymbol from '../components/RemixSymbol'

function About() {
  return (
    <main className="overflow-hidden bg-[#f3f0e8] text-[#17221d]">
      <section className="relative overflow-hidden bg-[#f4b942]">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9573f]">ABOUT / MAHREEN INDONESIA</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="display-type max-w-6xl text-[clamp(3.25rem,6vw,6.75rem)] uppercase leading-[0.9]">WHAT IS<br /><span className="text-[#d9573f]">MAHREEN?</span></h1>
            <div className="flex flex-col items-start gap-8 lg:items-end">
              <RemixSymbol type="education" className="h-36 w-36 border-2 text-[#17221d] lg:h-52 lg:w-52" label="Education and growth symbol" />
              <p className="max-w-sm text-lg font-semibold leading-7 lg:text-right">A space to grow, build, and contribute through creativity, technology, education, and collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#17221d]/20">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9573f]">01 / THE ECOSYSTEM</p>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#45534a]">People / Learning / Action</p>
          </div>
          <div>
            <h2 className="display-type max-w-5xl text-[clamp(2.5rem,4vw,4.75rem)] uppercase leading-[0.96]">CONNECTING<br />POTENTIAL<br /><span className="text-[#d9573f]">WITH POSSIBILITY.</span></h2>
            <div className="mt-8 grid gap-8 border-t border-[#17221d]/30 pt-7 md:grid-cols-3">
              <p className="text-base leading-7 text-[#45534a]">Mahreen is a collaborative ecosystem for students, communities, and organizations.</p>
              <p className="text-base leading-7 text-[#45534a]">It creates room for learning, experimentation, and collaboration across creativity, technology, and education.</p>
              <p className="text-base leading-7 text-[#45534a]">Its work helps people build confidence, community, and practical experience to act on opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#17221d] text-[#f3f0e8]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#f4b942]">02 / WHY REMIX EXISTS</p>
              <h2 className="display-type mt-7 max-w-4xl text-[clamp(2.75rem,4.5vw,5rem)] uppercase leading-[0.94]">CURIOSITY<br />NEEDS A<br /><span className="text-[#f4b942]">CONNECTION.</span></h2>
            </div>
            <div className="max-w-md lg:pt-16">
              <RemixSymbol type="social" className="h-28 w-28 border-2 text-[#d9573f]" label="Connection symbol" />
              <p className="mt-8 text-lg leading-8 text-[#f3f0e8]/70">Mahreen Remix turns that spirit into a simple starting point: connect what you enjoy with the change you care about, then see what new direction can emerge.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d9573f] text-[#f3f0e8]">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:px-12 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em]">03 / OUR DIRECTION</p>
            <p className="display-type mt-6 max-w-5xl text-[clamp(2.75rem,4.5vw,5rem)] uppercase leading-[0.94]">MAKE IDEAS<br />FEEL POSSIBLE.</p>
          </div>
          <p className="max-w-xs text-sm font-semibold leading-6">Learning, collaboration, and impact become more meaningful when people have a place to start.</p>
        </div>
      </section>
    </main>
  )
}

export default About
