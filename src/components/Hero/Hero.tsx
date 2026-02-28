import './Hero.css'


export default function Hero() {
  return (
<section className="hero">
  <div className="container hero-content">
    <div>
      <p className="subtitle">Bursa’nın En Güvenilir Sürücü Kursu</p>

      <h1>
        GÜVENLİ SÜRÜŞE <br />
        <span>SAĞLAM BİR BAŞLANGIÇ</span>
      </h1>

      <p className="text">
        Alanında uzman eğitmenler, modern araç filosu ve esnek ders saatleriyle
        ehliyetini <strong>hızlı</strong> ve <strong>güvenli</strong> şekilde al.
      </p>

      <div className="hero-buttons">
        <button className="btn primary">Hemen Başla</button>
        <button className="btn outline">Kurslarımız</button>
      </div>
    </div>
  </div>
</section>
  );
}