import "./footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          <strong>I-Pro Infinity Insurance Broking Pvt. Ltd.</strong> is Regulated by Insurance Regulatory and Development Authority of India.
        </p>

        <div className="footer-info-row">
          <div className="info-item">
            IRDAI Regn No #925 valid upto 6th Dec 2026
          </div>
          <div className="info-item">
            <span className="footer-icon">📂</span>
            <span><strong>Category:</strong> (Life and General)</span>
          </div>
          <div className="info-item">
            <span className="footer-icon">📞</span>
            <span>Customer Support: 080 23414133</span>
          </div>
          <div className="info-item">
            <span className="footer-icon">📧</span>
            <span>Email: customerfirst@iproinfinity.com</span>
          </div>
          
          <div className="info-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>#18, 3rd Cross, RMV 2nd Stage, 4th Block, MLA Layout, Sanjaynagar, Bengaluru-94</span>
          </div>
          
          
        </div>

        <div className="disclaimer">
          Disclaimer: The content here is for informational purposes only. Always consult with licensed professionals for any insurance decisions.
        </div>

        <p className="footer-text disclaimer">
          <strong>Disclaimer:</strong> For more details on risk factors, terms, conditions, and exclusions, please read the sales brochure of the respective insurer carefully before concluding a sale.
        </p>
      </div>

      <hr className="footer-divider" />

      <div className="footer-links">
        <a href="https://policyholder.gov.in/" target="_blank" rel="noopener noreferrer">IRDAI</a>
        <a href="#">IBAI</a>
        <a href="https://bimabharosa.irdai.gov.in/" target="_blank" rel="noopener noreferrer">Policy Holder Website</a>
        
        <a href="#">SNP Process Contact</a>
        <a href="#">Disclaimer</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="https://www.cioins.co.in/" target="_blank" rel="noopener noreferrer">Grievance Redressal</a>
      </div>

      <p className="footer-copyright">
        &copy; 2023. I-Pro Infinity Insurance Broking Pvt. Ltd.
      </p>

      <div className="whatsapp-float">
        <a href="https://wa.me/919380029170" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
