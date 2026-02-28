import './About.css'

export default function About() {
  return (
    <section className="about-wrap">
    <div className="container">
      <div className="about-row">

        {/* SOL TARAF */}
        <div className="about-col image-col">
          <div className="about-img-wrap">
          <div
className="about-bg"
style={{
  backgroundImage: "url(/images/surucu-kursu-3.jpeg)",
}}
/>

            <div className="about-promo-box">
              <h4>
                2 Yıllık <span>Deneyim</span>
              </h4>
            </div>
          </div>
        </div>

        {/* SAĞ TARAF */}
        <div className="about-col content-col">
          <div className="about-content">
            <p className="subtitle">HAKKIMIZDA</p>
            <h2>Bursa Lider Sürücü Kursu</h2>
            <p className="description">
            Sürüş eğitimini yalnızca bir ehliyet süreci olarak değil, güvenli ve bilinçli bir yaşam becerisi olarak ele alır. Alanında uzman eğitmen kadrosu, modern eğitim araçları ve bireye özel öğretim yaklaşımıyla kursiyerlerine güçlü bir öğrenme deneyimi sunar. Trafikte sorumluluk bilincini merkeze alan eğitim anlayışıyla, her adayın kendine güvenen ve bilinçli bir sürücü olarak yetişmesini hedefler..
            </p>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Devamını oku..
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
}