import './Stats.css'
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  start: boolean;
}
function Counter({ end, start }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end]);

  return <h3>{count.toLocaleString()}+</h3>;
}

export default function Stats() {
  
const leftRef = useRef(null);
const rightRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  if (leftRef.current) observer.observe(leftRef.current);
  if (rightRef.current) observer.observe(rightRef.current);

  return () => observer.disconnect();
}, []);

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container stats-grid">

        <div className="stat-item">
          <Counter end={5400} start={startCount} />
          <p>Mezun Öğrenci</p>
        </div>

        <div className="stat-item">
          <Counter end={1350} start={startCount} />
          <p>Aktif Öğrenci</p>
        </div>

        <div className="stat-item">
          <Counter end={150} start={startCount} />
          <p>Uzman Eğitmen</p>
        </div>

        <div className="stat-item">
          <Counter end={60} start={startCount} />
          <p>Kazanılan Ödül</p>
        </div>
      </div>
      <div>
<div className="contact-section">
<div className="container">
  <div className="contact-row">

    {/* SOL – VİDEO */}
    <div ref={leftRef} className="contact-col video-col animate-left">
      <div className="video-box">
        <iframe
          src="https://www.youtube.com/embed/Y4HVjC2coTQ?autoplay=1&mute=1&rel=0"
          title="Direksiyon Eğitimi - Ehliyet Dersi"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <a
          href="https://www.youtube.com/watch?v=Y4HVjC2coTQ"
          target="_blank"
          rel="noopener noreferrer"
          className="video-click-overlay"
          aria-label="Videoyu YouTube'da izle"
        />
        <div className="video-overlay">
          <h3>
            Güvenli Sürüş <br /> Profesyonel Eğitim
          </h3>
          <span className="video-yt-hint">Tıklayarak YouTube'da izle</span>
        </div>
      </div>
    </div>

    {/* SAĞ – FORM */}
    <div ref={rightRef} className="contact-col form-col animate-right">
      <div className="form-box">
        <h2>Bize Ulaşın</h2>

        <form className="contact-form">
          <input type="text" placeholder="Adınız Soyadınız" />
          <input type="email" placeholder="E-Posta Adresiniz" />
          <input type="tel" placeholder="Telefon" />
          <textarea placeholder="Mesajınız"></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>

  </div>
</div>
</div>
</div>
</section>
  );
}