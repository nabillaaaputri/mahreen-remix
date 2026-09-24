import { Link, useParams } from 'react-router-dom'

function OpportunityDetail() {
  const { slug } = useParams()

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">MAHREEN REMIX</p>
      <h1 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[-0.08em] text-slate-900 sm:text-5xl">
        THIS IDEA IS READY TO GROW.
      </h1>
      <p className="mt-5 mx-auto max-w-xl text-base leading-7 text-slate-600">
        The remix concept for <span className="font-semibold text-slate-900">{slug}</span> is designed as an editorial concept prototype within the Mahreen ecosystem.
      </p>
      <Link
        to="/remix"
        className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-emerald-700"
      >
        BACK TO REMIX
      </Link>
    </main>
  )
}

export default OpportunityDetail
