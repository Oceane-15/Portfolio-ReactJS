import React from "react";
import '../App.css';
import imgFreshFood from "../assets/portfolio/fresh-food.jpg";
import imgAkira from "../assets/portfolio/restaurant-japonais.jpg";
import imgEspaceBienEtre from "../assets/portfolio/espace-bien-etre.jpg";
import imgSeo from "../assets/portfolio/seo.jpg";
import imgApi from "../assets/portfolio/coder.jpg";
import imgMaquette from "../assets/portfolio/screens.jpg";


const Portfolio = () => {
    const projects = [
        {id: 1, title : "Fresh Food", tech: "Site réalisé avec PHP et MySQL", desc: "Site de vente de produits frais en ligne.", img: imgFreshFood, alt : "image de legumes"},
        {id: 2, title : "Restaurant Akira", tech: "Site réalisé avec WordPress", desc: "Site de vente de produits frais en ligne.", img: imgAkira, alt : "image de sushis"},
        {id: 3, title : "Espace bien-être", tech: "Site réalisé avec LARAVEL", desc: "Site de vente de produits frais en ligne.", img: imgEspaceBienEtre, alt : "image détente"},
        {id: 4, title : "SEO", tech: "Utilisation des outils SEO", desc: "Amélioration du référencement d'un site e-commerce.", img: imgSeo, alt : "image def SEO"},
        {id: 5, title : "Création d'une API", tech: "PHP-SYMFONY", desc: "Création d'une API RESTFULL publique.", img: imgApi, alt : "image de code"},
        {id: 6, title : "Maquette d'un site web", tech: "Réalisé avec Figma", desc: "Création du prototype d'un site.", img: imgMaquette, alt : "image appareils electroniques"},
    ];

    return (
        <main className="page-portfolio">
            <div className="hero-image"></div>

            <section className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Portfolio</h1>
                    <p>Voici quelques-unes de mes réalisations.</p>
                    <div className="separation"></div>
                </div>

                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project.id} className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm">
                                <img src={project.img} className="card-img-top" alt={project.alt}/>
                                <div className="card-body text-center">
                                    <h3 className="h5 card-title fw-bold">{project.title}</h3>
                                    <p className="card-text">{project.desc}</p>
                                    <button className="btn btn-primary mt-auto">Voir le site</button>
                                </div>
                                <div className="card-footer text-center bg-light">
                                    <small className="text-muted">{project.tech}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Portfolio;