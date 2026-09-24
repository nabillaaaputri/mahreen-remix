import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-[#f3f0e8]/20 bg-[#17221d] text-[#f3f0e8]">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-12">
        <div>
          <p className="display-type text-5xl uppercase leading-none text-[#f4b942]">MAHREEN<br /><span className="text-[#f3f0e8]">REMIX</span></p>
          <p className="mt-6 max-w-md text-sm leading-6 text-[#f3f0e8]/60">Ideas, interests, creativity, and opportunities in motion.</p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d9573f]">Navigate</h3>
          <ul className="space-y-3 text-sm text-[#f3f0e8]/70">
            <li>
              <Link to="/" className="transition hover:text-[#f4b942]">Home</Link>
            </li>
            <li>
              <Link to="/remix" className="transition hover:text-[#f4b942]">Remix</Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-[#f4b942]">About</Link>
            </li>
            <li>
              <a href="https://mahreenindonesia.com/" target="_blank" rel="noreferrer" className="transition hover:text-[#f4b942]">
                Mahreen Official
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="display-type max-w-xs text-3xl uppercase leading-[0.9] text-[#f4b942]">INTERESTS AREN'T MEANT TO STAY STILL.</p>
          <p className="mt-5 max-w-xs text-sm leading-6 text-[#f3f0e8]/60">One idea can lead somewhere else.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
