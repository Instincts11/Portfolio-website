export default function Contact() {
  return (
    <div className="section-container" id="Contact">
      <img src="/ideas.svg" alt="contact-vector" className="vector-image-contact" />
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p className="contact-intro">Let's connect! Feel free to reach out for collaborations or just a friendly hello.</p>
        
        <div className="contact-info-centered">
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">amalvr11@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="info-label">Contact Number:</span>
            <span className="info-value">8590623480</span>
          </div>
          <div className="info-item">
            <span className="info-label">Location:</span>
            <span className="info-value">Thiruvananthapuram,Kerala, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}

