import React from "react";
import { Modal } from "react-bootstrap";
import "./LoginModal.css";

function LoginModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered className="login-modal">
      <Modal.Body className="position-relative text-center">
        <button className="close-btn" onClick={handleClose}>
          ×
        </button>

        <h2 className="login-title">Login</h2>

        <p className="login-subtitle">Please enter your e-mail and password:</p>

        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <input
            type="email"
            placeholder="Email"
            className="login-input w-100"
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input w-100"
          />

          <div className="text-end mb-3">
            <a href="#" className="forgot-link">
              Forgot your password?
            </a>
          </div>

          <button className="login-btn mb-3">LOGIN</button>

          <p className="register-text text-center">
            New customer? <a href="#">Register</a>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
