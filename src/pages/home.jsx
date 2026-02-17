import React from "react";
import heroBg from "../assets/img/hero-bg.jpg";
import aboutImg from "../assets/img/john-doe-about.jpg";

const Home = () => {
    return (
        <div className="home">
        <section className="hero d-flex align-items-center justify-content-center text-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}>
            
            <div className="hero-overlay"></div>
            <div className="container position-relative">
                <h1 className="display-3 fw-bold">Bonjour, je suis John Doe</h1>
                <h2 className="fs-2 mb-4">Développeur web full stack</h2>
                <button className="btn btn-danger btn-lg px-4">En savoir plus</button>
            </div>
        </section>

        <section className="container py-5 my-5 shadow-lg bg-white rounded">
            <div className="row p-4">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
                <h3 className="border-bottom border-primary border-3 pb-2 mb-4">A propos</h3>
                <img src={aboutImg} alt="John Doe" className="img-fluid rounded mb-3"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae ea praesentium cupiditate quia. Magni fuga inventore laudantium perferendis praesentium alias quasi nisi delectus sapiente nam, facilis vitae, maiores eligendi?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quae aut officiis, reiciendis culpa dolorem, ipsum voluptates delectus iste autem distinctio quia explicabo, incidunt expedita aperiam rem numquam debitis. Officia!</p>
            </div>

            <div className="col-12 col-md-6">
                <h3 className="border-bottom border-primary border-3 pb-2 mb-4">Mes compétences</h3>
                <div className="mb-3">
                    <span>HTML5 90%</span>
                    <div className="progress rounded-0 mt-2" style={{height:'8px'}}>
                        <div className="progress-bar bg-danger" style={{width:'90%'}}></div>
                    </div>
                </div>
                <div className="mb-3">
                    <span>CSS3 80%</span>
                    <div className="progress rounded-0 mt-2" style={{height:'8px'}}>
                        <div className="progress-bar bg-info" style={{width:'80%'}}></div>
                    </div>
                </div>
                <div className="mb-3">
                    <span>JAVASCRIPT 70%</span>
                    <div className="progress rounded-0 mt-2" style={{height:'8px'}}>
                        <div className="progress-bar bg-warning" style={{width:'70%'}}></div>
                    </div>
                </div>
                <div className="mb-3">
                    <span>PHP 60%</span>
                    <div className="progress rounded-0 mt-2" style={{height:'8px'}}>
                        <div className="progress-bar bg-success" style={{width:'60%'}}></div>
                    </div>
                </div>
                <div className="mb-3">
                    <span>REACT 50%</span>
                    <div className="progress rounded-0 mt-2" style={{height:'8px'}}>
                        <div className="progress-bar bg-primary" style={{width:'50%'}}></div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
};

export default Home;