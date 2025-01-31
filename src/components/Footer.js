export const Footer = () => {
    return (
      <>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h2 className="footer-title">About Me</h2>
              <p className="footer-text">
                A passionate Full-Stack Developer who thrives on building websites and
                applications. Explore my work and discover how I can help you
                transform your digital ideas into reality.
              </p>
            </div>
  
            <div className="footer-section">
              <h2 className="footer-title">Quick Links</h2>
              <ul className="footer-list">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="#skills" className="footer-link">Skills</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
  
            <div className="footer-section">
              <h2 className="footer-title">Follow Me</h2>
              <div className="footer-socials">
                <ul>
                  <li><a href="https://github.com/Vaibhavghugretkar" className="footer-link">Github</a></li>
                  <li><a href="https://x.com/Vaibhav_Gh7" className="footer-link">Twitter</a></li>
                  <li><a href="https://www.instagram.com/vaibhav_gh7/" className="footer-link">Instagram</a></li>
                  <li><a href="https://www.linkedin.com/in/vaibhav-ghugretkar-97b024257/" className="footer-link">Linkedin</a></li>
                </ul>
              </div>
            </div>
  
            <div className="footer-section">
              <h2 className="footer-title">Contact Me</h2>
              <p className="footer-text">Email: vaibhavghugretkar23@gmail.com</p>
              <p className="footer-text">Phone: +91 7676317955</p>
            </div>
          </div>
          
          <p className="footer-copy">© 2024 Vaibhav Gh | All rights reserved.</p>
        </footer>
      </>
    );
  }
  