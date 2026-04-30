import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How long will shipping take?",
      answer:
        "All orders are shipped within 12-36 hours from our warehouse in Bellingham WA.  Delivery times will depend on your shipping option but all orders are tracked from our facility to your door.",
    },
    {
      question: "How do I know if my order is confirmed?",
      answer:
        "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall.",
    },
    {
      question: "Can I change my shipping address after my order is placed?",
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
          <h1 className="faqSection__title">FAQs</h1>
          <p className="faqSection__subtitle">
            Below are some of are common questions
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

export default FAQSection;
