import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }} className="max-w-3xl mx-auto p-4">
      <Link to="/" style={{ marginRight: '10px' } }>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}

export default Navbar
