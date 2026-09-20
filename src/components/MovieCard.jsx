import { Link } from "react-router";

export default function MovieCard({ show, onDetails }) {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300">

      <img
        src={show.image?.medium}
        alt={show.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h4 className="text-xl font-bold truncate mb-3">
          {show.name}
        </h4>

        <div className="flex items-center gap-3 text-gray-600 text-sm mb-4">
          <span>
            ⭐ {show.rating?.average ?? "N/A"}
          </span>

          <span>•</span>

          <span>
            📅 {show.premiered?.slice(0, 4) ?? "N/A"}
          </span>
        </div>


        <button
          onClick={() => onDetails(show)}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Link to={`/shows/${show.id}`}>
            See Details
          </Link>
        </button>
      </div>
    </div>
  );
}