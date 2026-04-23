import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FaqSection.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Is the shipping free?",
      answer:
        "Yes. Worldwide shipping is already included in the price. We use DHL express with 3 days delivery time.",
    },
    {
      question: "When will I receive my item?",
      answer: "When we have received your order, you will automatically receive an e-mail confirming your order. Orders made before 2 PM (CET) will be picked, packed and shipped the same day. Delivery time is usually 2-4 working days with DHL Express.",
    },
    {
      question: "Can I change or return my item?",
      answer:
        "If you want to change a product into another model, strap color etc., please contact us so we are able to reserve the new item in our stock immediately. You are always entitled to an exchange or refund within 30 days after you have received your package, as long as the item has not been used.",
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
            Have a question ? We are here to help.
          </p>
        </div>

        <div className="faqSection__faqList">

          {faqs.map((item, index) => (
            <div key={index} className="faqSection__item border-bottom py-3 px-5">

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
                <p className="faqSection__answer mt-3 text-muted">
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

export default FaqSection;