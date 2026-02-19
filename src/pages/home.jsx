import React , {useState, useEffect} from "react";
import '../App.css';
import heroBg from "../assets/image/hero-bg.jpg";
import aboutImg from "../assets/image/john-doe-about.jpg";

const Home = () => {
    const [user, setUser] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/users/github-john-doe")
             .then(res => res.json())
             .then(data => setUser(data))
             .catch(err => console.error(err));
    }, []);

    return (
        <div className="home">
        <section className="hero d-flex align-items-center justify-content-center text-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}>
            
            <div className="hero-overlay"></div>
            <div className="container position-relative">
                <h1 className="display-3 fw-bold">Bonjour, je suis John Doe</h1>
                <h2 className="fs-2 mb-4">Développeur web full stack</h2>
                <button className="btn btn-danger btn-lg px-4" onClick={() => setShowModal(true)}>En savoir plus</button>
            </div>
        </section>

        {showModal && (
            <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1050}}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content bg-dark text-white border-secondary">
                        <div className="modal-header border secondary">
                            <h5 className="modal-title">Mon Profil GitHub</h5>
                            <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body p-4">
                                <div className="row align-items-center">
                                    <div className="col-md-5 text-center">
                                       <img src={user.avatar_url} alt="Avatar" className="img-fluid rounded mb-3"/>
                            </div>
                            <div className="col-md-7">
                                <ul className="list-unstyled">
                                    <li className="border-bottom py-2"><i className="bi bi-person"></i><a href={user.html_url} target="_blank" rel="noreferrer" className="text-primary text-decoration-none fw-bold ms-2 border-bottom border-primary"> {user.name}</a></li>
                                    <li className="border-bottom py-2"><i className="bi bi-geo-alt"></i>{user.location}</li>
                                    <li className="border-bottom py-2 small"><i className="bi bi-card-text"></i> {user.bio}</li>
                                    <li className="border-bottom py-2"><i className="bi bi-box"></i> Repositories : {user.public_repos}</li>
                                    <li className="border-bottom py-2"><i className="bi bi-people"></i> Followers : {user.followers}</li>
                                    <li className="border-bottom py-2"><i className="bi bi-people"></i> Following : {user.following}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-secondary">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )}

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