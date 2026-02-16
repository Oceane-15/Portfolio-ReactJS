import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
          <div className="container text-center text-md-start">
            <div className="row">
                <div className="col-md-3 mb-4 mx-auto">
                    <h5>John Doe</h5>
                    <address>
                        40 Rue Laure Diebold<br/>
                        69009 Lyon, France<br/>
                        10 20 30 40 50<br/>
                        john.doe@gmail.com
                    </address>
              <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
                <a href="https://github.com" target="_blank" rel="noreferrer nofollow" className="text-light footer-icon">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer nofollow" className="text-light footer-icon">
                   <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer nofollow" className="text-light footer-icon">
                   <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
              <div className="col-md-3 mb-4 mx-auto">
                <h5>Liens utiles</h5>
                <ul className="list-unstyled mt-2">
                    <li><NavLink to="/" className="text-light text-decoration-none">Accueil</NavLink></li>
                    <li><NavLink to="/services" className="text-light text-decoration-none">Services</NavLink></li>
                    <li><NavLink to="/realisations" className="text-light text-decoration-none">Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className="text-light text-decoration-none">Me contacter</NavLink></li>
                    <li><NavLink to="/mentions-legales" className="text-light text-decoration-none">Mentions légales</NavLink></li>
                </ul>
              </div>
              <div className="col-md-3 mb-4 mx-auto">
                <h5>Mes dernières réalisations</h5>
                <ul className="list-unstyled mt-2">
                  <li><NavLink to="/realisations" className="text-light text-decoration-none">Fresh Food</NavLink></li>
                  <li><NavLink to="/realisations" className="text-light text-decoration-none">Restaurant Akira</NavLink></li>
                  <li><NavLink to="/realisations" className="text-light text-decoration-none">Espace bien-être</NavLink></li>
                  <li><NavLink to="/realisations" className="text-light text-decoration-none">SEO</NavLink></li>
                  <li><NavLink to="/realisations" className="text-light text-decoration-none">Créations d'une API</NavLink></li>
                  <li><NavLink to="/realisations" className="text-light text-decoration-none">Maquette d'un site</NavLink></li>
                </ul>
              </div>
              </div>
              </div>
          </footer>
        );
}

export default Footer;