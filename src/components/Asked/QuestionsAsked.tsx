import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import './QuestionsAsked.css'

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "Ehliyet almak için yaş sınırı nedir?",
    a: "B sınıfı ehliyet için en az 18 yaşını doldurmuş olmanız gerekmektedir.",
  },
  {
    q: "Direksiyon dersleri hangi saatlerde yapılıyor?",
    a: "Direksiyon dersleri hafta içi ve hafta sonu, size uygun saatlere göre planlanmaktadır.",
  },
  {
    q: "Ehliyet süreci ne kadar sürüyor?",
    a: "Genellikle 6–8 hafta içerisinde sınavlar ve direksiyon eğitimleri tamamlanmaktadır.",
  },
  {
    q: "Otomatik vites ehliyet alabilir miyim?",
    a: "Evet, otomatik vites araçlarla özel direksiyon eğitimi verilmektedir.",
  },
  {
    q: "Taksitli ödeme imkanı var mı?",
    a: "Evet, kurs kayıtlarında taksitli ödeme seçenekleri sunulmaktadır.",
  },
];

function QuestionsAsked() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section__titleRow faq-title-center">
          <h2>Sık Sorulan Sorular</h2>
          <p className="section-desc">
            Ehliyet süreciyle ilgili en çok merak edilen soruları sizin için yanıtladık.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden>
                  {activeIndex === index ? <HiMinus /> : <HiPlus />}
                </span>
              </div>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuestionsAsked;
