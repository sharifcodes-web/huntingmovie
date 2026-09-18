// import { useEffect, useState } from "react"
// import { data } from "react-router"


// // export default function Home() {

// //   const [movies, setMovies] = useState([])
// //   useEffect(() =>{
// //     fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
// //     .then(res => res.json())
// //     .then((data)=>{
// //       setMovies(data)
// //   })},[])
// //   console.log(movies);
// export default function Home() {
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState(""); // ইউজারের ইনপুট রাখার জন্য স্টেট

//   useEffect(() => {
//     // যদি ইনপুট ফিল্ড ফাঁকা থাকে, তাহলে API কল করবো না
//     if (query.trim() === "") {
//       setMovies([]); // মুভি লিস্ট খালি করে দেবো
//       return;
//     }

//     // URL-এর সাথে ?q=${query} যুক্ত করা হয়েছে
//     fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMovies(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [query]); // query পরিবর্তন হলে useEffect আবার চলবে

//   console.log(movies);

//   return (
//      <div>
//       <h1>Movie Explorer</h1>
      
//       {/* ইনপুট ফিল্ড তৈরি করা হলো */}
//       <input
//         type="text"
//         placeholder="Search for a movie..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)} // ইনপুট পরিবর্তন হলে query স্টেট আপডেট হবে
//       />

//       {/* ডেটা লিস্ট আকারে দেখানোর জন্য */}
//       <div>
//         {movies.map((item) => (
//           // TVMaze API রেসপন্সে প্রতিটি আইটেমের ভেতরে 'show' অবজেক্ট থাকে
//           <div key={item.show.id}>
//             <h3>{item.show.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



export default function Home() {
  
  return (
    <div>Home</div>
  )
}
