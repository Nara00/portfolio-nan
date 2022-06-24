import React from 'react'
import Arrows from './Arrows';



class AboutMe extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(window.innerWidth)
        return (
            <section id="sobre-mi" class="sections-config">
                <div class="row header-sections" >
                    <div class="col-auto">
                        <h1 >SOBRE MI</h1>
                    </div>
                    <div class="col" style={{ position: " relative" }} >
                        <div>
                            <p class="p-note" >Había una</p>
                            <p class="p-note" >vez...</p>
                            <p class="p-note" > </p>
                        </div>
                    </div>
                </div>
                {window.innerWidth > 768 &&
                    <div style={{ fontWeight: 400 }}>
                        <p class="text-center">Nací en Argentina en el 2000</p>
                        <p class="text-center"></p>
                        <p class="text-center"></p>
                        <div class="row">
                            {window.innerWidth > 955 &&
                                <div class="col" style={{ textAlign: "right" }}>
                                    <img src="assets/img/timeline.svg" style={{ height: '14rem', paddingTop: '.5rem' }} />
                                </div>
                            }
                            {window.innerWidth <= 955 &&
                                <div class="col" style={{ textAlign: "right" }}>
                                    <img src="assets/img/timeline.svg" style={{ height: '19rem', paddingTop: '.5rem' }} />
                                </div>
                            }
                            <div class="col">
                                <p><br />Obtuve algunos reconocimientos</p>
                                <p><br />2017 - Bandera Argentina<br />2019 - Premio Santander al mérito académico<br />2020 - Premio Santander al mérito académico<br />2021 - Premio Santander al mérito académico<br /><br /></p>
                            </div>
                        </div>
                        <p class="text-center">Ahora me encuentro en el último año de<span style={{ color: " var(--secondary)", fontWeight: '600' }} >&nbsp;ingeniería de sistemas</span></p>
                        <p class="text-center">en la Universidad Católica de Córdoba<br /></p>
                        <br /><br />
                        <div class="text-center" style={{ textAlign: 'center', wordWrap: "break-word", paddingLeft: "10vw", paddingRight: "10vw" }}>
                            <p class="text-center" style={{ fontWeight: '800' }}>Me gustan muchos caminos pero mi preferido es en el que la tecnología se encuentra con el arte porque admiro cuando la tecnología nos hace sentir más humanos.</p>
                        </div>
                    </div >
                }
                {window.innerWidth <= 768 &&
                    <div style={{ fontWeight: 400 }}>
                        <p class="text-center">Nací en Argentina en el 2000</p>
                        <p class="text-center"></p>
                        <p class="text-center"></p>
                        <p class="text-center"><br />Obtuve algunos reconocimientos:</p>
                        <p class="text-center" style={{ fontSize: "0.9rem" }}>2017 - Bandera Argentina<br />2019 - Premio Santander al mérito académico<br />2020 - Premio Santander al mérito académico<br />2021 - Premio Santander al mérito académico<br /><br /></p>
                        <p class="text-center">Ahora me encuentro en el último año de<span style={{ color: " var(--secondary)", fontWeight: '600' }} >&nbsp;ingeniería de sistemas</span></p>
                        <p class="text-center">en la Universidad Católica de Córdoba<br /></p>
                        <br /><br />
                        <div class="text-center" style={{ textAlign: 'center', wordWrap: "break-word" }}>
                            <p class="text-center" style={{ fontWeight: '800' }}>Me gustan muchos caminos pero mi preferido es en el que la tecnología se encuentra con el arte porque admiro cuando la tecnología nos hace sentir más humanos.</p>
                        </div>
                    </div >
                }
                <Arrows to="#proyectos" />
            </section >
        );
    }

}

export default AboutMe;