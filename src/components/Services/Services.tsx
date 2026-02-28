import "./Services.css";

const services = [
  {
    title: "A SINIFI MOTOSİKLET",
    subtitle: "A, A1, A2",
    desc: "Motosiklet kullanımı için gerekli tüm eğitimleri uzman eğitmenlerle alın.",
    image: "/images/motor.jpg",
  },
  {
    title: "B SINIFI OTOMOBİL",
    subtitle: "B1, B, BE",
    desc: "Manuel ve otomatik araçlarla güvenli sürüş eğitimi.",
    image: "/images/otomobil.jpg",
  },
  {
    title: "C SINIFI KAMYON",
    subtitle: "C1, C1E, C, CE",
    desc: "Ağır vasıta kullanımı için profesyonel sürüş eğitimi.",
    image: "/images/kamyon.jpg",
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="center">EHLİYET SINIFLARI</h2>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="card animated-card" key={index}>
              
              {/* IMAGE */}
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <div className="image-overlay" />
              </div>

              <span className="badge">{item.subtitle}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a  href="#">Detayları Gör →</a>
            </div>
          ))}
        </div>
        <a className="see-more" href="#">Devamını Gör</a>
      </div>
    </section>
  );
}