import { Link } from "react-router"

export default function Header() {
  return (
    <nav className="border border-6 fixed split-nav" style={{width:"auto"}}> 
     <div className="nav-brand">

    <h3> <Link to={"/"}> Movie Explorer  </Link> </h3>
    </div>
    {/* nav right */}
    <ul className="inline">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/Movie"}>Movie</Link>
      </li>
    </ul>
    </nav>
  )
}
