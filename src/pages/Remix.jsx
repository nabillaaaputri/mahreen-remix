import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import RemixSymbol from '../components/RemixSymbol'
import { getRemixResult, remixInterests, remixPurposes } from '../data/opportunities'

const optionNumberClass = 'text-xs font-bold leading-none tracking-[0.2em] text-[#14201b]'

function Remix() {
  const [selectedInterest, setSelectedInterest] = useState('technology')
  const [selectedPurpose, setSelectedPurpose] = useState('my-community')
  const [isRemixing, setIsRemixing] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const result = useMemo(() => getRemixResult(selectedInterest, selectedPurpose), [selectedInterest, selectedPurpose])
  const selectedInterestData = remixInterests.find((item) => item.id === selectedInterest)
  const selectedPurposeData = remixPurposes.find((item) => item.id === selectedPurpose)

  useEffect(() => {
    if (!isRemixing) return undefined
    const timer = setTimeout(() => {
      setIsRemixing(false)
      setShowResult(true)
    }, 950)
    return () => clearTimeout(timer)
  }, [isRemixing])

  const chooseInterest = (id) => {
    setSelectedInterest(id)
    setShowResult(false)
  }

  const choosePurpose = (id) => {
    setSelectedPurpose(id)
    setShowResult(false)
  }

  return (
    <main className="overflow-hidden bg-[#f4f0e7] text-[#14201b]">
      <section className="relative overflow-hidden bg-[#17221d] text-[#f3f0e8]">
        <div className="editorial-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1600px] px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#f4b942]">MAHREEN / REMIX LAB</p>
              <h1 className="display-type mt-7 max-w-5xl text-[clamp(3.25rem,6vw,6.75rem)] uppercase leading-[0.9]">TURN TWO<br /><span className="text-[#e3aa35]">INTERESTS</span><br />INTO ONE IDEA.</h1>
            </div>
            <Link to="/" className="hidden border-b border-[#f3f0e8]/50 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f3f0e8] transition hover:border-[#f4b942] hover:text-[#f4b942] sm:block">BACK HOME</Link>
          </div>
          <div className="mt-10 flex items-end justify-between border-t border-[#f3f0e8]/30 pt-5">
            <p className="max-w-sm text-sm leading-6 text-[#f3f0e8]/70">You already have the interest. Let's see what happens when you mix it with something else.</p>
            <span className="hidden text-xs font-bold uppercase tracking-[0.28em] text-[#d9573f] sm:block">INTEREST + IMPACT</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9573f]">STEP 01 / YOUR INTEREST</p>
            <h2 className="display-type mt-6 max-w-md text-[clamp(2.5rem,4vw,4.75rem)] uppercase leading-[0.96]">WHAT ARE<br />YOU INTO?</h2>
            <p className="mt-8 max-w-sm text-sm leading-6 text-[#45534a]">Choose what interests you.</p>
          </div>
          <div className="border-t-2 border-[#17221d]">
            {remixInterests.map((interest, index) => {
              const active = selectedInterest === interest.id
              return (
                  <button key={interest.id} type="button" onClick={() => chooseInterest(interest.id)} className={`group flex w-full items-center justify-between border-b border-[#14201b]/25 py-5 text-left transition sm:py-6 ${active ? 'bg-[#f5b93f] px-4' : 'hover:bg-[#fdfbf5]'}`}>
                  <span className="flex items-center gap-5">
                    <span className={optionNumberClass}>0{index + 1}</span>
                    <span className="display-type text-xl uppercase leading-[0.98] sm:text-3xl">{interest.label}</span>
                  </span>
                  <RemixSymbol type={interest.id} className={`h-9 w-9 border sm:h-10 sm:w-10 ${active ? 'text-[#d9573f]' : 'text-[#17221d]/50 group-hover:text-[#d9573f]'}`} label={`${interest.label} symbol`} />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#14201b]/20 bg-[#f4f0e7]">
        <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9573f]">STEP 02 / YOUR IMPACT</p>
              <h2 className="display-type mt-6 max-w-md text-[clamp(2.5rem,4vw,4.75rem)] uppercase leading-[0.96]">WHERE DO<br />YOU WANT<br />TO MAKE AN IMPACT?</h2>
              <p className="mt-8 max-w-sm text-sm leading-6 text-[#45534a]">Choose where you want to apply your interest.</p>
            </div>
            <div className="border-t-2 border-[#14201b]">
              {remixPurposes.map((purpose, index) => {
                const active = selectedPurpose === purpose.id
                return (
                  <button key={purpose.id} type="button" onClick={() => choosePurpose(purpose.id)} className={`flex w-full items-center justify-between border-b border-[#14201b]/25 py-5 text-left transition sm:py-6 ${active ? 'bg-[#f5b93f] px-4 text-[#14201b]' : 'hover:bg-[#fdfbf5]'}`}>
                    <span className="flex items-center gap-5">
                      <span className={optionNumberClass}>0{index + 1}</span>
                      <span className="display-type text-xl uppercase leading-[0.98] sm:text-3xl">{purpose.label}</span>
                    </span>
                    <span className="text-3xl font-light">{active ? '×' : '+'}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#14201b] text-[#f4f0e7]">
        <div className="relative mx-auto max-w-[1600px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#e2553f]">STEP 03 / MAKE THE CONNECTION</p>
            <h2 className="display-type mt-5 text-[clamp(2.75rem,4.5vw,5rem)] uppercase leading-[0.94] text-[#f4f0e7]">YOUR MIX</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#f4f0e7]/70">You chose one interest and one impact. Bring them together to reveal a possible idea.</p>
          </div>
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className={`flex w-full items-center gap-4 border-t border-[#f4f0e7]/30 pt-5 transition-all duration-700 sm:gap-5 lg:w-[34%] ${isRemixing ? 'translate-x-[18vw] scale-110 opacity-40' : ''}`}>
              <RemixSymbol type={selectedInterest} className="h-16 w-16 border-2 text-[#e2553f] sm:h-24 sm:w-24" label={`${selectedInterestData.label} symbol`} />
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#f5b93f]">YOUR INTEREST</p>
                <span className="display-type mt-2 block max-w-[12rem] text-2xl uppercase leading-[0.94] sm:text-4xl">{selectedInterestData.label}</span>
              </div>
            </div>
            <button type="button" onClick={() => { setShowResult(false); setIsRemixing(true) }} disabled={isRemixing} className="group flex h-28 w-28 shrink-0 flex-col items-center justify-center border-2 border-[#e2553f] text-center text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#f4f0e7] transition hover:bg-[#f5b93f] hover:text-[#14201b] disabled:cursor-wait sm:h-36 sm:w-36">
              <span>{isRemixing ? 'REMIXING...' : 'MAKE IT REMIX'}</span>
              {!isRemixing && <span className="mt-2 text-base">→</span>}
            </button>
            <div className={`flex w-full items-center justify-end gap-4 border-t border-[#f4f0e7]/30 pt-5 text-right transition-all duration-700 sm:gap-5 lg:w-[34%] ${isRemixing ? '-translate-x-[18vw] scale-110 opacity-40' : ''}`}>
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#f5b93f]">YOUR IMPACT</p>
                <span className="display-type mt-2 block max-w-[12rem] text-2xl uppercase leading-[0.94] sm:text-4xl">{selectedPurposeData.label}</span>
              </div>
              <RemixSymbol type="social" className="h-16 w-16 border-2 text-[#e2553f] sm:h-24 sm:w-24" label="Purpose symbol" />
            </div>
          </div>
          <p className="mt-10 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#f3f0e8]/70">{isRemixing ? 'TWO DIRECTIONS / ONE POSSIBILITY' : 'COMBINE BOTH DIRECTIONS INTO A NEW IDEA'}</p>
        </div>
      </section>

      {showResult && (
        <section className="reveal-up bg-[#f3f0e8]">
          <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9573f]">YOUR REMIX / RESULT</p>
                <h2 className="display-type mt-8 max-w-5xl whitespace-pre-line text-[clamp(4rem,6.5vw,6.25rem)] uppercase leading-[0.88]">{result.title}</h2>
                <p className="mt-10 max-w-xl text-lg leading-8 text-[#45534a]">{result.description}</p>
              </div>
              <div className="border-t-2 border-[#17221d] pt-6 lg:border-l-2 lg:border-t-0 lg:pl-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d9573f]">{result.mix}</p>
                <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em]">POSSIBLE DIRECTIONS</p>
                <div className="mt-5 space-y-3">
                  {result.directions.map((direction) => <p key={direction} className="border-b border-[#17221d]/25 pb-3 text-lg font-semibold">{direction}</p>)}
                </div>
                <a href="https://mahreenindonesia.com/" target="_blank" rel="noreferrer" className="mt-10 inline-flex bg-[#17221d] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f3f0e8] transition hover:bg-[#d9573f]">MAKE IT REAL →</a>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default Remix
