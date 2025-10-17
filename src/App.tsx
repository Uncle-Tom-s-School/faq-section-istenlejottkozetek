import React, { useState, useEffect } from "react";
import "./index.css";

import bgDesktop from "./assets/images/background-pattern-desktop.svg";
import bgMobile from "./assets/images/background-pattern-mobile.svg";
import iconStar from "./assets/images/icon-star.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, allowing you to improve your skills at your own pace.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Definitely! Using these projects in your portfolio is a great way to show your skills to potential employers.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The community forum is a great place to ask questions, share your solutions, and get feedback from other developers.",
  },
];

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    document.body.style.backgroundColor = "hsl(275, 100%, 97%)";
    document.body.style.backgroundImage = `url(${isMobile ? bgMobile : bgDesktop})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top center";
    document.body.style.backgroundSize = "contain";
  }, [isMobile]);

  return (
    <main className="page">
      <article className="faq-card">
        <header className="faq-header">
          <img src={iconStar} alt="Star Icon" />
          <h1>FAQs</h1>
        </header>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                {item.question}
                <img
                  className="icon"
                  src={activeIndex === index ? iconMinus : iconPlus}
                  alt="Toggle Icon"
                />
              </button>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
};

export default App;
