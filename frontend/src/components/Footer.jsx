import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">AlloHirafi</h5>
            <p style={{ opacity: 0.8 }}>
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-light text-decoration-none d-block mb-1" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-light text-decoration-none d-block mb-1" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-light text-decoration-none d-block" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact</h5>
            <p className="mb-1">📧 example@email.com</p>
            <p>📞 +212 600000000</p>

            <div className="mt-3 d-flex gap-3">
              <a href="#" className="text-light fs-5">
                <FaFacebook />
              </a>
              <a href="#" className="text-light fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-light fs-5">
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>

        <hr style={{ opacity: 0.2 }} />

        <div className="text-center">
          <p className="mb-0" style={{ fontSize: "14px", opacity: 0.7 }}>
            © 2026 AlloHirafi 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;