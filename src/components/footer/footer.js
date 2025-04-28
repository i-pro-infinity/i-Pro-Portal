import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          <strong>I-Pro Infinity Insurance Broking Pvt. Ltd.</strong> is Regulated by Insurance Regulatory and Development Authority of India.
        </p>
        {/* <p className="footer-text">
          <strong>Direct Insurance Brokers – General & Life, Principal Officer:</strong> Ms. Priyanka Desai 
          (Contact: <a href="tel:+919773684899">+91 9773684899</a>, Email ID: 
          <a href="mailto:po@oasisinsurance.in"> po@oasisinsurance.in</a>)
        </p> */}
        <p className="footer-text disclaimer">
          <strong>Disclaimer:</strong> For more details on risk factors, terms, conditions, and exclusions, please read the sales brochure of the respective insurer carefully before concluding a sale.
        </p>
      </div>

      <hr className="footer-divider" />

      <div className="footer-links">
        <a href="#">IRDAI</a>
        <a href="#">IBAI</a>
        <a href="#">Policy Holder Website</a>
        <a href="#">SNP Process Contact</a>
        <a href="#">Disclaimer</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Grievance Redressal</a>
      </div>

      <p className="footer-copyright">
        &copy; 2023. I-Pro Infinity Insurance Broking Pvt. Ltd.
      </p>

      {/* WhatsApp Floating Button */}
      <div className="whatsapp-float">
        <a href="https://wa.me/919380029170" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
        {/* <div className="whatsapp-tooltip">Need Help? <strong>Chat with us</strong></div> */}
      </div>
    </footer>
  );
};

export default Footer;