import "./footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="main">
        <a href="https://www.instagram.com/zaferkalik" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com/developerofgod" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/zafer-kalik-a8183621b"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/zafercode" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://zaferkalik.com" target="_blank">
          <i class="fa-solid fa-link"></i>
        </a>
      </div>
      <div className="desc">
        All rights reserved. ©2022{" "}
        <a href="https://zaferkalik.com/">@zafercode</a>
      </div>
    </div>
  );
};

export default Footer;
