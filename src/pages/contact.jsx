import React from "react";
import '../App.css';

const Contact = () => {
    return (
        <main className="page-contact">
            <section className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Contact</h1>
                    <p>Pour me contacter en vu d'un entretien ou d'une future collaboration, merci de remplir ce formulaire de contact.</p>
                    <div className="separation"></div>
                </div>

                <div className="row bg-white shadow p-4 rounded">
                    <div className="col-12 col-md-6 mb-4">
                        <h3 className="fw-bold border-bottom border-primary border-4 pb-2 mb-4">Formulaire de contact</h3>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Votre nom" required/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Votre adresse email" required/>
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" required/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Sujet" required/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="4" placeholder="Votre message" required/>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-12 col-md-6">
                        <h3 className="fw-bold border-bottom border-primary border-4 pb-2 mb-4">Mes coordonnées</h3>
                        <address>
                            <strong>John Doe</strong><br />
                            <i className="fa-regular fa-map me-2"></i>40 rue Laure Diebold <br />
                            <i className="fa-solid fa-location-dot me-2"></i>69009 Lyon, France <br />
                            <i className="fa-solid fa-mobile-screen-button me-2"></i>10 20 30 40 50 <br />
                             <i className="fa-solid fa-envelope me-2"></i>john.doe@gmail.com
                        </address>
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754105!2d4.796403976619974!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1771605432129!5m2!1sfr!2sfr"
                            allowFullScreen=""
                            loading="lazy"
                            title="Adresse John Doe"
                            className="map">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;