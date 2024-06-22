import '../styles/Login.css'
import login from '../images/login-gambar.png'
import logo from '../images/logo.png'
import google from '../images/logo-google.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className="wrapper-login">
    <section className="login-section">
          <div className="login1">
            <img src={logo} alt="logo" className="logo-img" />
            <h3 className="size-daftar-akun">Masuk Akun Anda</h3>
            <div className="google-login">
              <img src={google} alt="Google logo" className="google-img" />
              <h3 className="size-daftar">Google</h3>
            </div>
            <div className="separator">
              <h3 className="size-daftar">Atau</h3>
            </div>
            <div className="form-group">
              <label htmlFor="name" className="size-form">Nama</label>
              <input type="text" id="name" name="name" placeholder="Masukkan nama anda" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="size-form">Alamat Email</label>
              <input type="email" id="email" name="email" placeholder="Masukkan alamat email" />
            </div>
            <div className="form-group">
              <label htmlFor="telepon" className="size-form">Nomor Telepon</label>
              <input type="telepon" id="telepon" name="telepon" placeholder="Masukkan nomor telepon" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="size-form">Password</label>
              <input type="password" id="password" name="password" placeholder="Masukkan password" />
            </div>
            <div className="form-group">
              <button type="submit" className="signup-button"><Link to= "/Home">Masuk</Link></button>
            </div>
          </div>
          <div className="login2">
            <img src={login} alt="Login illustration" className="login2-img" />
          </div>
        </section>
    </div>
    </>
  )
}

export default Login
