import { useLoaderData } from "react-router";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import Hero from "../components/Hero";


export default function Home() {
  const shows = useLoaderData();
  const [search,setSearch] = useState("")
  const filterShows = shows.filter((show)=>{
    const match = show.name.toLowerCase().includes(search.toLowerCase())
    return match;
  })


  return (
    <>
       <Hero/>
      <h1>Movie Library.</h1>
      <p>Browse the collection.</p>

      <div className="row">
        <div className="col-fill col">
          <input
            type="search"
            placeholder="Search movie by name" onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* <div>
          <select>
            <option value="">All</option>
            <option value="Scripted">Scripted</option>
            <option value="Reality">Reality</option>
          </select>
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterShows.map((show) => (
          <div key={show.id}>
            <MovieCard show={show} />
          </div>
        ))}
      </div>
    </>
  );
}