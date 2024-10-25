"use client";

export default function Footer() {
  return (
    <div id="footer">
      <div className="containerr">
        <div className="footer-list">
          <div className="list">
            <h3>navigate</h3>
            <ul>
              <li>
                <a href="#">shop</a>
              </li>
              <li>
                <a href="#">account</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h3>help</h3>
            <ul>
              <li>
                <a href="#">shipping & delivery</a>
              </li>
              <li>
                <a href="#">exchange & return</a>
              </li>
              <li>
                <a href="#">terms & privacy</a>
              </li>
              <li>
                <a href="#">faq</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h3>social</h3>
            <ul>
              <li>
                <a href="#">facebook</a>
              </li>
              <li>
                <a href="#">instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-icon">
          <a href="#">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="#">
            <i className="ri-instagram-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
