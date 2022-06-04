import React from 'react'
import Arrows from './Arrows';



class Projects extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section id="proyectos" class="sections-config">
                <div class="row header-sections" >
                    <div class="col">
                        <h1 >PROYECTOS</h1>
                    </div>
                    <div class="col" style={{ position: " relative" }} >
                        <div>
                            <p class="p-note" >Hello</p>
                            <p class="p-note" >world!</p>
                            <p class="p-note" ></p>
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{ color: " var(--secondary)" }} >Categoría</p>
                </div>
                <div class="row" style={{ marginTop: " 2vh", marginBottom: " 2vh" }} >
                    <div class="col-auto">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">C++</h3>
                                <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                                <p class="card-text" style={{ color: " var(--secondary)", fontSize: " 1.2vw" }} >Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">C++</h3>
                                <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                                <p class="card-text" style={{ color: " var(--secondary)", fontSize: " 1.2vw" }} >Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">C++</h3>
                                <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                                <p class="card-text" style={{ color: " var(--secondary)", fontSize: " 1.2vw" }} >Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{ color: " var(--secondary)" }} >Categoría</p>
                </div>
                <div class="row" style={{ marginTop: " 2vh", marginBottom: " 2vh" }} >
                    <div class="col-auto">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">C++</h3>
                                <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                                <p class="card-text" style={{ color: " var(--secondary)", fontSize: " 1.2vw" }} >Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">C++</h3>
                                <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                                <p class="card-text" style={{ color: " var(--secondary)", fontSize: " 1.2vw" }} >Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">C++</h3>
                                <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                                <p class="card-text" style={{ color: " var(--secondary)", fontSize: " 1.2vw" }} >Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Arrows to="#footer" />
            </section>
        );
    }

}

export default Projects;