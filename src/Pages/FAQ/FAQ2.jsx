import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQ2.css";

const FAQ2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Do you ship internationally?",
      answer:
        "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.",
    },
    {
      question: "When will my order be shipped?",
      answer:
        "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.",
    },
    {
      question: "What is your return policy?",
      answer:
        "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.",
    },
    {
      question: "How long will it take until I receive my order?",
      answer:
        "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqSection__wrapper py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="faqSection__title">Shipping & Returns</h1>
          <p className="faqSection__subtitle">
            Below are some common questions about <br /> shipping, returns, and exchanges
          </p>
        </div>

        <div className="faqSection__faqList">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="faqSection__item border-bottom py-3 px-5"
            >
              <div
                className="d-flex justify-content-between align-items-center faqSection__question"
                onClick={() => toggleFAQ(index)}
                style={{ cursor: "pointer" }}
              >
                <h5 className="mb-0">{item.question}</h5>
                <span className="faqSection__icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="faqSection__answer mt-3">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ2;
