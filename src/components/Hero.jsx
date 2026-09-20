import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden rounded-2xl flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80"
        alt="Movie theater"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center text-white">
        
        <p className="mb-4 text-yellow-400 font-semibold uppercase tracking-[0.3em]">
          🎬 MovieExplorer
        </p>

        <h1 className="mb-6 text-4xl md:text-6xl font-extrabold">
          Discover Movies
        </h1>

        <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-200">
          Explore and discover your favorite movies and TV shows
          from around the world. Find ratings, genres, release dates,
          and more.
        </p>

        {/* CTA Button */}
        <Link
          to="/movie"
          className="inline-block rounded-full bg-yellow-500 px-8 py-3
          font-bold text-black transition duration-300
          hover:bg-yellow-400 hover:scale-105"
        >
          Explore Now →
        </Link>

      </div>
    </section>
  );
}