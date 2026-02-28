import { useEffect, useRef } from "react";
import { HiStar, HiOutlineStar, HiCheckBadge } from "react-icons/hi2";
import "./StudentComment.css";

const reviews = [
  {
    name: "Burak K.",
    role: "B Sınıfı Ehliyet",
    text: "İlk denemede ehliyetimi aldım. Eğitmenlerin yaklaşımı gerçekten çok güven vericiydi.",
    stars: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Elif A.",
    role: "Otomatik Vites",
    text: "Direksiyon dersleri çok rahat geçti. Kendime olan güvenim inanılmaz arttı.",
    stars: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mehmet D.",
    role: "A2 Sınıfı",
    text: "Başta çok heyecanlıydım ama eğitim süreci sayesinde trafikte çok daha rahatım.",
    stars: 4,
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

function StudentComment() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="premium-testimonials">
      <div className="container">
        <div className="section__titleRow center">
          <span className="badge-top">GERÇEK DENEYİMLER</span>
          <h2>Öğrencilerimiz Ne Diyor?</h2>
        </div>

        <div className="testimonial-showcase">
          {reviews.map((r, i) => (
            <div className="testimonial-glass" key={i}>
              <div className="big-quote">“</div>

              <p className="text">{r.text}</p>

              <div className="stars" aria-label={`${r.stars} yıldız`}>
                {[...Array(r.stars)].map((_, i) => <HiStar key={i} className="star-filled" />)}
                {[...Array(5 - r.stars)].map((_, i) => <HiOutlineStar key={i} className="star-outline" />)}
              </div>

              <div className="user">
                <img src={r.img} alt={r.name} />
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>

              <div className="verified"><HiCheckBadge className="verified-icon" /> Onaylı Öğrenci</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentComment;
