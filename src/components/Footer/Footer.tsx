import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { FaCar } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* LOGO & ABOUT */}
        <div>
          <div className="footer-logo">
            <span className="logo-icon"><FaCar aria-hidden /></span>
            <h3>LİDER</h3>
          </div>
          <p className="footer-text">
            Bursa’nın en güvenilir sürücü kursu. Profesyonel eğitmenler ve modern
            araçlar ile güvenli sürüş eğitimi.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Hızlı Menü</h4>
          <ul>
            <li><a href="#">Ana Sayfa</a></li>
            <li><a href="#">Kurslar</a></li>
            <li><a href="#">Eğitmenler</a></li>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>

        {/* COURSES */}
        <div>
          <h4>Kurslar</h4>
          <ul>
            <li><a href="#">B Sınıfı Ehliyet</a></li>
            <li><a href="#">A2 Motosiklet</a></li>
            <li><a href="#">Otomatik Vites</a></li>
            <li><a href="#">Direksiyon Dersi</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4>İletişim</h4>
          <ul className="contact">
            <li><HiOutlineMapPin className="footer-contact-icon" /> Bursa / Türkiye</li>
            <li><HiOutlinePhone className="footer-contact-icon" /> 0 (224) 123 45 67</li>
            <li><HiOutlineEnvelope className="footer-contact-icon" /> info@surucukursu.com</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bursa Lider Sürücü Kursu. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}