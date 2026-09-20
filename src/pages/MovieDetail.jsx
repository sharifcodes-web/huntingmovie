import { useLoaderData, useNavigate  } from "react-router"

export default function MovieDetail() {
  
  const show = useLoaderData()
   const navigate = useNavigate();

  return (
    <div>
      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-3xl bg-[#080f18] text-white shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-2xl text-white hover:bg-slate-800 transition"
        >
          ✕
        </button>

        {/* Hero / Backdrop */}
        <div className="relative h-[360px] overflow-hidden">

          <img
            src={show.image?.original || show.image?.medium}
            alt={show.name}
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to from-[#080f18] via-black/30 to-transparent" />

          {/* Movie title */}
          <div className="absolute bottom-6 left-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              {show.name}
            </h1>
          </div>
        </div>


        {/* Movie Information */}
        <div className="p-6 md:p-8">

          {/* Info Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-gray-400">

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-xl text-yellow-400">★</span>

              <span className="text-yellow-400 font-semibold">
                {show.rating?.average ?? "N/A"}
              </span>

              <span>/ 10</span>
            </div>

            {/* Release */}
            <div className="flex items-center gap-2">
              <span>▣</span>
              <span>
                {show.premiered?.slice(0, 4) ?? "N/A"}
              </span>
            </div>

            {/* Runtime */}
            <div className="flex items-center gap-2">
              <span>◷</span>
              <span>
                {show.runtime ? `${show.runtime} min` : "N/A"}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-7">

            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-gray-400">
              Overview
            </h2>

            <div
              className="text-base md:text-lg leading-8 text-gray-300"
              dangerouslySetInnerHTML={{
                __html:
                  show.summary ||
                  "No overview available.",
              }}
            />

          </div>


          {/* Bottom */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-700 pt-6">

            {/* Official Site */}
            {show.officialSite && (
              <a
                href={show.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition"
              >
                Official site ↗
              </a>
            )}

            {/* Close */}
            <button
              onClick={() => navigate(-1)}
              className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600 transition"
            >
              Close
            </button>

          </div>

        </div>

      </div>
    </div>
  
    </div>
  )
}