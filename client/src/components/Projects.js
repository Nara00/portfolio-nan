import React from 'react';
import axios from 'axios';
import Arrows from './Arrows';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



class Projects extends React.Component {

    state = {
        allProjects: []
    }

    componentDidMount = () => {
        // this.getAllProjects();
        const projects_hardcode = [{"_id":"62b48680fd532558f5a9c2e7","title":"Tankey!","description":"Juego programado en C++ aplicando 5 patrones de programación para la materia arquitectura de software I.","link":"https://github.com/UCC-ArquitecturaSoftwareI/primer-parcial-cobresi-nanfara","language":"C++"},{"_id":"62b48a10fd532558f5a9c2e8","title":"Portfolio","description":"Página full-stack personal.","link":"https://github.com/Nara00/portfolio-nan","language":"JavaScript"},{"_id":"62b48aaafd532558f5a9c2e9","title":"Técnicas de DR","description":"Comparación de técnicas de reducción de dimensionalidad no lineales.","link":"https://github.com/Nara00/comparacion-tecnicas-DR","language":"python"},{"_id":"62b4941bfd532558f5a9c2ea","title":"StaySafe","description":"Aplicación web orientada a la prevención de delitos en la ciudad de Córdoba.","link":"https://github.com/Nara00/stay-safe","language":"JavaScript"},{"_id":"62b49510fd532558f5a9c2eb","title":"Portal Barrio el Milagro","description":"Página web para la gestión de donaciones para el grupo de voluntarios que ayuda en el Barrio el Milagro.","link":"https://github.com/voluntariado-ucc-ing/web-donaciones","language":"JavaScript"},{"_id":"62b4c7898fd14767acdbc92a","title":"SparkAR portfolio","description":"Efectos de realidad aumentada publicados para Meta","link":"https://www.facebook.com/sparkarhub/portfolios/fb/abril.nanfara/","language":"SparkAR"},{"_id":"62b4c91d8fd14767acdbc92c","title":"Ingeniería de sw III","description":"Prácticos sobre gestión de la configuración, microservicios, analisis de arquitectura, test, docker, etc.","link":"https://github.com/Nara00/Ingenieria-sw-iii","language":"Java"}];
        this.setState({ allProjects: projects_hardcode });
    };

    getAllProjects = () => {
        axios.get('/api/projects')
            .then((response) => {
                const data = response.data;
                this.setState({ allProjects: data });
                // console.log('Data has been received!!');
            })
            .catch(() => {
                // alert('Error retrieving data!!!');
            });
    };

    getCard(data) {
        return (

            <div class="col-auto" style={{ padding: ".75rem", width:"20rem"}}>
                <div class="card-project">
                    <a target="_blank" href={data.link}>
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <div class="row" style={{ margin: "0", padding: "0", marginTop: " 0.2vw", height: "6rem" }} >
                            <p class="card-text" style={{ color: "var(--tertiary)", fontWeight: '400' , padding: "0"}} >{data.description}</p>
                            </div>
                            <p class="card-text" style={{ paddingTop: ".5rem" }} >&lt;/&gt;{data.language}</p>
                        </div>
                    </a>
                </div>
            </div>

        );
    }


    init = () => {
        let result = []
        result.push(this.getCategoryCards(this.state.allProjects))
        return (
            result
        );
    }



    getCategoryCards = (filtered) => {
        let result = []
        filtered.forEach(element => {
            result.push(this.getCard(element))
        });
        // console.log(result)
        return (
            <AliceCarousel mouseTracking={true} controlsStrategy='responsive' autoWidth={true} disableButtonsControls={true} disableDotsControls={true} items={result} />
        );
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
                {this.init()}
                <Arrows to="#footer" />
            </section>
        );
    }

}

export default Projects;