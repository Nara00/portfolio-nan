import React from 'react'

class CustomNavbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav class="navbar navbar-light navbar-expand-md fixed-top py-3 navbar-custom">
                <div class="container" style={{ padding: " 0px", marginLeft: " 1vw", marginRight: " 1vw", maxWidth: " 100vw" }} >
                    <a class="navbar-brand d-flex align-items-center text-expanded" href="#">
                        <span>NAN</span>
                    </a>
                    <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2">
                        <span class="visually-hidden">Toggle navigation</span>
                        <span class="navbar-toggler-icon">
                            <i class="fas fa-bars" style={{color: "var(--primary)"}}></i>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navcol-2">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link active" href="#">Inicio</a></li>
                            <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                            <li class="nav-item"><a class="nav-link" href="#sobre-mi">Sobre mi</a></li>
                            <li class="nav-item"><a class="nav-link" href="#proyectos">Proyectos</a></li>
                            <li class="nav-item"><a class="nav-link" href="#footer">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default CustomNavbar;