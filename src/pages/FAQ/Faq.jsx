import { useState } from "react";
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "How Long Will It Take To Get My Package?", answer: "Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings, deep v XOXO chambray sustainable slow-carb raw denim church-key fap chillwave Etsy. +1 typewriter kitsch, American Apparel tofu Banksy Vice." },
    { question: "What Payment Methods Are Accepted?", answer: "We accept credit cards, PayPal, and bank transfers." },
    { question: "How Can I Cancel Or Change My Order?", answer: "Contact support within 24 hours to make changes." },
    { question: "Do I Need An Account To Place An Order?", answer: "No, guest checkout is available." },
    { question: "How Do I Track My Order?", answer: "You can track your order via the tracking link sent to your email." },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqcard">
      {faqs.map((faq, index) => (
        <div key={index} className="faqcard-header" id="heading-faq-0">
          <div
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            <span>{faq.question}</span>
            <span className="plus">{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer" style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
