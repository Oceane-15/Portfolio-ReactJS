import React from "react";
import '../App.css';

const MentionsLegales = () => {
    return(
        <main className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Mentions Légales</h1>
                <div className="separation"></div>
            </div>

            <div className="accordion" id="accordionMentions">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#editor">Editeur du site</button>
                    </h2>
                    <div id="editor" className="accordion-collapse collapse show" data-bs-parent="#accordionMentions">
                        <div className="accordion-body">
                            <h3>John Doe</h3>
                            <address className="mb-0">
                                <i className="fa-solid fa-map me-2"></i>40 rue Laure Diebold <br />
                                <i className="fa-solid fa-map-location-dot me-2"></i>69009 Lyon, France <br />
                                <i className="fa-solid fa-mobile-screen-button me-2"></i> <a href="tel:1020304050" className="text-decoration-none text-dark">1020304050</a> <br />
                                <i className="fa-solid fa-envelope me-2"></i> <a href="mailto:john.doe@gmail.com" className="text-decoration-none text-dark">john.doe@gmail.com</a>
                            </address>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#host">Hébergeur</button>
                    </h2>
                    <div id="host" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
                      <div className="accordion-body">
                        <h3 className="fw-bold">alwaysdata</h3>
                        <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                        <i className="fa-solid fa-globe me-2"></i>
                        <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer" className="text-primary">www.alwaysdata.com</a>
                      </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#credits">Crédits</button>
                    </h2>
                    <div id="credits" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
                      <div className="accordion-body">
                        <h3 className="fw-bold">Crédits</h3>
                        <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank"
                        rel="noreferrer">Centre Européen de formation</a></p>
                        <p><em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank"
                        rel="noreferrer">Pixabay</a></em></p>
                        <p><em>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/fr/icones-gratuites/john-doe" target="_blank"
                        rel="noreferrer">John doe Icons erstellt von Freepik - Flaticon</a></em></p>
                      </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MentionsLegales;
