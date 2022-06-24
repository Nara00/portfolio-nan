import React from 'react'

class CustomNavbar extends React.Component {
    constructor(props) {
        super(props)

        
    }


    render() {
        const items = 5
        var classes = []
        for (var i = 0; i < items; i++) {
            if(i === this.props.section){
                classes[i] = 'nav-link active'
            }
            else{
                classes[i] = 'nav-link'
            }
        }
        this.state = {className: classes}
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
                            <li class="nav-item"><a class={this.state.className[0]} href="#">Inicio</a></li>
                            <li class="nav-item"><a class={this.state.className[1]} href="#skills">Skills</a></li>
                            <li class="nav-item"><a class={this.state.className[2]} href="#sobre-mi">Sobre mi</a></li>
                            <li class="nav-item"><a class={this.state.className[3]} href="#proyectos">Proyectos</a></li>
                            <li class="nav-item"><a class={this.state.className[4]} href="#footer">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default CustomNavbar;