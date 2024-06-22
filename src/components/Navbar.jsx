import '../styles/Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // Lakukan sesuatu dengan searchQuery, seperti navigasi atau fetch data
    console.log('Search query:', searchQuery)
  }

  return (
    <nav>
      <div className="wrapper-navbar">
        <div className="logo">
          <a href=''>
            <Link to="/profil"><img src={logo} alt="Logo" className='logo-navbar' /></Link>
          </a>
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/beranda">Beranda</Link></li>
            <li><Link to="/tentang-kami">Tentang Kami</Link></li>
            <li><Link to="/informasi">Informasi</Link></li>
            <li><Link to="/konsultasi">Konsultasi</Link></li>
          </ul>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
