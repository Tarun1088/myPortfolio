import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <footer>
        <div className="footer">
          <a className="footer-link  bi bi-facebook" href>
            facebook
          </a>
          <a
            className="footer-link  bi bi-linkedin"
            href="https://linkedin.com/in/tarun-rawal-8651b2203"
          >
            LinkedIn
          </a>
          <a className="footer-link bi bi-twitter" href="https://twitter.com/">
            Twitter
          </a>
          <a
            className="footer-link bi bi-github gittt"
            href="https://github.com/Tarun1088"
          >
            github
          </a>
          <p className="copy-write">© Tarun Rawal .</p>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
