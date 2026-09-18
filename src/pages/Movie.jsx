import { Link } from "react-router"

export default function Movie() {
  return (
  <>
  <h1>Hello Movie</h1>
  <Link to="/">
  <button className="btn-success">Back to the Home </button>
  </Link>
  </>
  )
}
