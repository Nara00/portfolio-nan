import React from 'react'
import Arrows from './Arrows';



class AboutMe extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <section id="sobre-mi" class="sections-config">
                    <div class="row header-sections" >
                        <div class="col">
                            <h1 >SOBRE MI</h1>
                        </div>
                        <div class="col"  style={{ position: " relative"}} >
                            <div>
                                <p class="p-note" >Había una</p>
                                <p class="p-note" >vez...</p>
                                <p class="p-note" > </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="text-center">Nací en Argentina en el 2000</p>
                        <p class="text-center"></p>
                        <p class="text-center"></p>
                        <div class="row">
                            <div class="col">
                                <p></p>
                            </div>
                            <div class="col">
                                <p><br />Obtuve algunos reconocimientos</p>
                                <p><br />2017 - Bandera Argentina<br />2019 - Premio Santander al mérito académico<br />2020 - Premio Santander al mérito académico<br />2021 - Premio Santander al mérito académico<br /><br /></p>
                            </div>
                        </div>
                        <p class="text-center">Ahora me encuentro en el último año de<span style={{ color: " var(--secondary)"}} >&nbsp;ingeniería de sistemas</span></p>
                        <p class="text-center"><strong>en la Universidad Católica de Córdoba</strong><br /></p>
                    </div>
                    <Arrows to="#proyectos"/>
                </section>
        );
    }

}

export default AboutMe;