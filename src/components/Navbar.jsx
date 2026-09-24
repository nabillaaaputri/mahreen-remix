import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Remix', to: '/remix' },
  { label: 'About', to: '/about' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium uppercase tracking-[0.18em] transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#e2553f] after:transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2553f] ${
      isActive ? 'text-[#e2553f] after:w-full' : 'text-[#14201b] after:w-0 hover:text-[#e2553f] hover:after:w-full'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-[#17221d]/20 bg-[#f3f0e8]/90 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="display-type whitespace-nowrap text-2xl uppercase tracking-[-0.08em] text-[#17221d]" aria-label="Mahreen Remix home">
          MAHREEN REMIX
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={(navState) => `${linkClass(navState)} min-w-[4.5rem] text-center`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex border border-[#17221d] p-2 text-[#17221d] md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M4 7h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#17221d]/20 bg-[#f3f0e8] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium uppercase tracking-[0.16em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2553f] ${
                    isActive ? 'text-[#e2553f] after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:bg-[#e2553f]' : 'text-[#14201b] hover:bg-white hover:text-[#e2553f]'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
