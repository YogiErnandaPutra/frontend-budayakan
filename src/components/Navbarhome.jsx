import '../styles/Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Navbarhome() {
  return (
    <nav>
      <div className="wrapper-navbar">
        <div className="logo">
          <a href=''>
            <img src={logo} alt="Logo" className='logo-navbar' /> {/* Mengganti teks dengan gambar */}
          </a>
        </div>
        <div className="menu">
          <ul>
            <li><a>Beranda</a></li>
            <li><a>Tentang Kami</a></li>
            <li><a>Informasi</a></li>
            <li><a>Konsultasi</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="login-button"><Link to="/login">Masuk</Link></button>
            <button className="login-button"><Link to="/signup">Daftar</Link></button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbarhome
