import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuestionSection.css";

const QuestionSection = () => {
  return (
    <div className="QuestionSection_container">
      <div className="container text-center">
        
        <p className="QuestionSection_subtitle">QUESTIONS?</p>
        <h1 className="QuestionSection_title mb-5">Send us an email</h1>

        <form className="QuestionSection_form">
          <div className="row mb-3">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <input
                type="text"
                className="form-control QuestionSection_input"
                placeholder="Name"
              />
            </div>

            <div className="col-lg-6">
              <input
                type="email"
                className="form-control QuestionSection_input"
                placeholder="Email *"
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control QuestionSection_input"
              placeholder="Phone Number"
            />
          </div>

          <div className="mb-4">
            <textarea
              className="form-control QuestionSection_textarea"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>

          <button type="submit" className="btn QuestionSection_button">
            SEND →
          </button>
        </form>

        <p className="QuestionSection_footer mt-4">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="QuestionSection_link"
            >
                Privacy Policy
            </a>{" "}
            and{" "}
            <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="QuestionSection_link"
            >
                Terms of Service
            </a>{" "}
            apply.
        </p>
      </div>
    </div>
  );
};

export default QuestionSection;