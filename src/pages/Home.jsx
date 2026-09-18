

import { useLoaderData } from "react-router"


export default function Home() {
  const shows = useLoaderData()
  return (
    <>
    {shows.map((show) =><li>{show.name}</li>)}
    </>
  )
}