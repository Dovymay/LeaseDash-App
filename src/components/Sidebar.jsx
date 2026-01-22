import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">Home</Link>
        {/* <Link to="/listings" className="sidebar-link">Listings</Link> */}
        <Link to="/add-listing" className="sidebar-link">Add a listing</Link>
        <Link to="/about" className="sidebar-link">About</Link>
        <Link to="/settings" className="sidebar-link">Settings</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
