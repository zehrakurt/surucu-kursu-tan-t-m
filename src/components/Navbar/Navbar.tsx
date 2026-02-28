import { useState } from "react";
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";
import { FaFacebookF, FaXTwitter, FaInstagram, FaCarSide } from "react-icons/fa6";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="top-left">
            <span><HiOutlinePhone className="topbar-icon" /> (0212) 111 22 33</span>
            <span><HiOutlineMapPin className="topbar-icon" /> Lorem ipsum dolor</span>
            <span><HiOutlineEnvelope className="topbar-icon" /> info@dride.com</span>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="container nav-content">

          <a href="#" className="logo">
            <span className="logo-icon-wrap">
              <FaCarSide className="logo-icon" aria-hidden />
            </span>
            <span className="logo-text">
              <span className="logo-brand">LİDER</span>
              <span className="logo-tagline">SÜRÜCÜ KURSU</span>
            </span>
          </a>

          {/* MENU */}
          <nav className={`menu ${menuOpen ? "open" : ""}`}>
            <a href="#" onClick={() => setMenuOpen(false)}>Anasayfa</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Kurslar</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Eğitmenler</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Hakkımızda</a>
            <a href="#" onClick={() => setMenuOpen(false)}>İletişim</a>
          </nav>

          {/* RIGHT */}
          <div className="nav-right">
            <div className="top-right desktop-only">
              <span>Follow Us:</span>
              <a href="#" aria-label="Facebook"><FaFacebookF className="social-icon" /></a>
              <a href="#" aria-label="X"><FaXTwitter className="social-icon" /></a>
              <a href="#" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
            </div>

            {/* HAMBURGER */}
            <button
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
