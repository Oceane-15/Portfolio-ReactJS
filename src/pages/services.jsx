import React from "react";
import '../App.css';
import {Brush, CodeSlash, Search} from 'react-bootstrap-icons';

const Services = () => {
    return (
        <main className="page-services">
            <div className="hero-image"></div>

            <section className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Mon offre de services</h1>
                    <p>Voici les préstations sur lesquelles je peux intervenir</p>
                    <div className="separation"></div>
                </div>

                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm text-center p-4">
                            <div className="mb-4 text-primary">
                                <Brush size={40}/>
                            </div>
                            <h3 className="h3 fw-bold">UX Design</h3>
                            <p className="small text-muted">L'UX Design est une discipline qui consiste à concevoir des produits (sites web,applications mobiles, logiciels
                                objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus 
                                fluide et agréable possible.</p>
                            </div>
                        </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm text-center p-4">
                            <div className="mb-4 text-primary">
                                <CodeSlash size={40}/>
                            </div>
                            <h3 className="h3 fw-bold">Développement Web</h3>
                            <p className="small text-muted">Le développement de sites web consiste à créer des sites internet en utilisant des langages de
                                programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).</p>
                            </div>
                        </div>
                          
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm text-center p-4">
                            <div className="mb-4 text-primary">
                                <Search size={40}/>
                            </div>
                            <h3 className="h3 fw-bold">Référencement</h3>
                            <p className="small text-muted">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le
                                faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un 
                                maximum de visiteurs qualifiés sur le site.</p>
                            </div>
                        </div>
                </div>
            </section>
        </main>
    );
};

export default Services;