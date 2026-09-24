import RemixSymbol from '../components/RemixSymbol'
import { remixInterests } from '../data/opportunities'

function Home() {
  return (
    <main className="overflow-hidden bg-[#f3f0e8] text-[#17221d]">
      <section className="relative min-h-[clamp(620px,78vh,820px)] overflow-hidden bg-[#f4b942]">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="editorial-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid min-h-[clamp(620px,78vh,820px)] max-w-[1600px] items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 lg:py-16">
          <div className="relative z-10 reveal-up">
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.35em]">MAHREEN / REMIX 01</p>
            <h1 className="display-type max-w-5xl text-[clamp(4.5rem,7vw,7rem)] uppercase leading-[0.9] text-[#17221d]">
              WHAT IF<br />YOUR INTEREST<br /><span className="text-[#d9573f]">MET ANOTHER IDEA?</span>
            </h1>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <a href="https://mahreen-remix.vercel.app/remix" className="inline-flex w-fit items-center bg-[#17221d] px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8] transition hover:bg-[#d9573f]">
                START REMIXING →
              </a>
              <p className="max-w-xs text-sm font-semibold leading-6">Take what you're into.<br />Let's see what it can become.</p>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[20rem] items-center justify-center lg:min-h-[32rem]">
            <div className="absolute right-[12%] top-[8%] text-[7rem] font-black leading-none text-[#d9573f]/30 lg:text-[12rem]">+</div>
            <div className="symbol-float absolute left-[6%] top-[12%] text-[#17221d]">
              <RemixSymbol type="technology" framed={false} className="h-24 w-24 rotate-[-8deg] lg:h-40 lg:w-40" label="Technology symbol" />
            </div>
            <div className="symbol-spin absolute bottom-[6%] right-[4%] text-[#d9573f]">
              <RemixSymbol type="design" framed={false} className="h-32 w-32 lg:h-52 lg:w-52" label="Design symbol" />
            </div>
            <div className="absolute left-[16%] top-[39%] flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em]"><span className="h-px w-12 bg-[#17221d]" />INTEREST <span className="text-[#d9573f]">+</span> IMPACT<span className="h-px w-12 bg-[#17221d]" /></div>
            <div className="display-type absolute bottom-[18%] left-[25%] text-6xl uppercase leading-none text-[#17221d] lg:text-9xl">REMIX</div>
            <div className="absolute left-[19%] top-[33%] h-20 w-px rotate-[-28deg] bg-[#d9573f]/70 lg:h-28" />
            <div className="absolute right-[25%] top-[35%] h-20 w-px rotate-[28deg] bg-[#d9573f]/70 lg:h-28" />
          </div>
        </div>
        <div className="absolute bottom-5 right-6 hidden text-xs font-bold uppercase tracking-[0.25em] lg:block">SCROLL TO REMIX ↓</div>
      </section>

      <section className="border-b border-[#17221d]/20 bg-[#f3f0e8]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9573f]">02 / MAHREEN INTRO</p>
            <p className="mt-8 max-w-[12rem] text-sm font-semibold leading-6">A place for ideas, talent, and opportunities to meet.</p>
          </div>
          <div>
            <h2 className="display-type max-w-5xl text-[clamp(2.75rem,4.5vw,5.25rem)] uppercase leading-[0.98]">IDEAS DON'T EXIST IN ISOLATION.</h2>
            <p className="mt-10 max-w-xl text-lg leading-8 text-[#45534a]">Mahreen is a space where young people, communities, and organizations meet through creativity, technology, education, and collaboration.</p>
            <a href="https://mahreen-remix.vercel.app/about" className="mt-8 inline-flex border-b-2 border-[#17221d] pb-2 text-xs font-bold uppercase tracking-[0.2em] transition hover:border-[#d9573f] hover:text-[#d9573f]">DISCOVER MAHREEN →</a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#17221d] text-[#f3f0e8]">
        <div className="editorial-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#f4b942]">03 / THE REMIX CONCEPT</p>
              <h2 className="display-type mt-8 max-w-3xl text-[clamp(3.5rem,5.5vw,5.75rem)] uppercase leading-[0.9]">ONE THING<br /><span className="text-[#f4b942]">MEETS</span><br />ANOTHER.</h2>
            </div>
            <RemixSymbol type="social" framed={false} className="symbol-float h-36 w-36 text-[#d9573f] lg:h-56 lg:w-56" label="Connected ideas symbol" />
          </div>
          <div className="relative mt-14 border-y border-[#f3f0e8]/30 py-8 sm:mt-16">
            <div className="absolute left-[19%] top-1/2 hidden h-px w-[26%] bg-[#d9573f] sm:block" />
            <div className="absolute right-[19%] top-1/2 hidden h-px w-[26%] bg-[#d9573f] sm:block" />
            <div className="grid gap-8 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f4b942]">YOUR INTEREST</p><p className="display-type mt-3 text-3xl uppercase leading-[0.9] sm:text-4xl">TECHNOLOGY</p></div>
              <p className="display-type text-5xl text-[#d9573f] sm:text-6xl">+</p>
              <div className="sm:text-right"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f4b942]">YOUR IMPACT</p><p className="display-type mt-3 text-3xl uppercase leading-[0.9] sm:text-4xl">BUILD COMMUNITIES</p></div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-4 text-center"><span className="h-px w-10 bg-[#f4b942]" /><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f4b942]">REMIX / A NEW IDEA</p><span className="h-px w-10 bg-[#f4b942]" /></div>
          </div>
          <p className="mt-10 max-w-xl text-base leading-7 text-[#f3f0e8]/75">Take what you're into. Mix it with where you want to make an impact.</p>
          <a href="https://mahreen-remix.vercel.app/remix" className="mt-7 inline-flex border-b-2 border-[#f4b942] pb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f4b942] transition hover:border-[#d9573f] hover:text-[#d9573f]">SEE HOW IT WORKS →</a>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#f3f0e8]/30 pt-6">
            {remixInterests.map((interest) => <span key={interest.id} className="text-xs font-bold uppercase tracking-[0.2em] text-[#f3f0e8]/70">{interest.label}</span>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#14201b]/20 bg-[#f4f0e7] text-[#14201b]">
        <div className="mx-auto grid max-w-[1600px] gap-12 border-b border-[#14201b]/20 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-24">
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9573f]">THE IDEA BEHIND THE REMIX</p>
            <h2 className="display-type mt-6 max-w-md text-[clamp(2.75rem,4.5vw,5.25rem)] uppercase leading-[0.9]">WHY<br /><span className="text-[#d9573f]">MAHREEN</span><br />REMIX?</h2>
            <div className="mt-10 hidden h-24 w-px bg-[#d9573f] lg:block" />
          </div>
          <div className="max-w-3xl text-base leading-7 text-[#45534a] sm:text-lg sm:leading-8">
            <div className="border-l-2 border-[#f4b942] pl-5 sm:pl-7">
              <article className="border-t border-[#14201b]/25 py-6 first:border-t-0 first:pt-0">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9573f]">01 — THE CONCEPT</p>
                <p className="mt-3">Mahreen Remix adalah pengalaman interaktif yang mengajak generasi muda mengubah minat menjadi ide yang dapat memberi dampak. Pengguna memilih satu hal yang mereka minati dan satu tujuan yang ingin mereka beri dampak, kemudian menggabungkannya melalui konsep Remix untuk menghasilkan sebuah ide baru.</p>
              </article>
              <article className="border-t border-[#14201b]/25 py-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9573f]">02 — WHY THIS IDEA</p>
                <p className="mt-3">Ide ini dipilih karena setiap anak muda memiliki minat, kemampuan, dan cara berkarya yang berbeda. Dengan menghubungkan ketertarikan pribadi dengan kebutuhan di sekitar, proses berkarya menjadi lebih dekat, relevan, dan mudah dibayangkan.</p>
              </article>
              <article className="border-t border-[#14201b]/25 py-6 last:pb-0">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9573f]">03 — THE IMPACT</p>
                <p className="mt-3">Melalui Mahreen Remix, diharapkan generasi muda dapat melihat bahwa berkarya untuk Indonesia tidak selalu harus dimulai dari sesuatu yang besar. Sebuah ketertarikan sederhana dapat menjadi awal dari ide yang bermanfaat bagi komunitas, bisnis, lingkungan, keterampilan, maupun pengalaman digital.</p>
              </article>
            </div>
            <div className="mt-10 border-t border-[#14201b]/25 pt-6">
              <p className="display-type text-2xl uppercase leading-[0.95] text-[#14201b] sm:text-3xl">YOUR INTEREST. YOUR IDEA. YOUR CONTRIBUTION.</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.28em] text-[#d9573f]">BERKARYA UNTUK INDONESIA.</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[1600px] flex-col gap-10 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9573f]">04 / YOUR NEXT MOVE</p>
            <h2 className="display-type mt-8 max-w-4xl text-[clamp(3rem,5.5vw,5.75rem)] uppercase leading-[0.94]">READY TO<br />MIX THINGS<br />UP?</h2>
          </div>
          <div className="flex flex-col items-start gap-7 lg:items-end">
            <RemixSymbol type="business" className="h-24 w-24 border-2 text-[#d9573f] lg:h-32 lg:w-32" label="Opportunity symbol" />
            <a href="https://mahreen-remix.vercel.app/remix" className="bg-[#14201b] px-7 py-5 text-xs font-bold uppercase tracking-[0.22em] text-[#f4f0e7] transition hover:bg-[#f5b93f] hover:text-[#14201b]">REMIX YOUR INTERESTS →</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
