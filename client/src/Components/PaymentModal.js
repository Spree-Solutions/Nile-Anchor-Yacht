import React from "react";
import "../Styles/common.css";
import AhlyBankLogo from "../Images/ahly-bank.png";
import PaymentLogo from "../Images/payment_logo.png";
import Instapay from "../Images/instapay.png";
import mobile from "../Icons/mobile.svg";
import whats from "../Icons/whats.svg";
import mail from "../Icons/mail.svg";
import bank from "../Icons/bank.svg";

const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <div className="logo-header">
            <img src={PaymentLogo} alt="" />
            <h2>Payment Methods</h2>
          </div>
          <button onClick={onClose} className="close-btn">
            &times;
          </button>
        </div>

        {/* Bank Transfer Section */}
        <div className="modal-section">
          <div className="radio-group">
            <input type="radio" checked readOnly />
            <div className="radio-group-icon">
              <img src={bank} alt="" />
              <span>Bank Transfer</span>
            </div>
          </div>
          <div className="main-banks">
            <div className="bank-container account-number">
              <h2>
                <img src={AhlyBankLogo} alt="" />
                <span>Account Number</span>
              </h2>
              <div className="bank-account">0313071282596900011</div>
            </div>
            <div className="bank-container">
              <h2>Bank Name</h2>
              <div className="bank-account">Abd-ElAziz Aal So’ud</div>
            </div>
          </div>
          <div className="transfer">
            <p className="transfer-text">You Can Transfer Using:</p>
            <div className="instapay">
              <img src={Instapay} alt="" />

              <h5>Instapay</h5>
            </div>
          </div>
        </div>

        {/* Proof of Payment */}
        <div className="proof-section">
          <p>Please Send copy of proof of payment to us via:</p>
          <div className="contact-info">
            <h2>Email</h2>
            <div>
              <h5>Reservation@thenileanchor.com</h5>
              <img src={mail} alt="" />
            </div>
          </div>
          <div className="or-divider">Or</div>
          <div className="contact-info">
            <h2>What'sApp</h2>
            <div>
              <h5>+201211140222</h5>
              <img src={whats} alt="" />
            </div>
          </div>
        </div>

        {/* Online Payment Section */}
        <div className="online-payment">
          <div className="pay-phone">
            <input type="radio" disabled />
            <div className="radio-group-icon">
              <img src={mobile} alt="" />
              <span className="not-available">Online payment</span>
            </div>
          </div>
          <span className="currently-unavailable">Currently Not Available</span>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="done-btn">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
