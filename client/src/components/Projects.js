import React from 'react';
import axios from 'axios';
import Arrows from './Arrows';



class Projects extends React.Component {

    state = {
        allProjects: []
    }

    componentDidMount = () => {
        this.getAllProjects();
        // const projects_hardcode = [{ "_id": { "$oid": "62b48680fd532558f5a9c2e7" }, "title": "Tankey!", "description": "Juego programado en C++ aplicando 5 patrones de programación para la materia arquitectura de software I", "link": "https://github.com/UCC-ArquitecturaSoftwareI/primer-parcial-cobresi-nanfara", "language": "C++" }, { "_id": { "$oid": "62b48a10fd532558f5a9c2e8" }, "title": "Portfolio", "description": "Página full-stack personal", "link": "https://github.com/Nara00/portfolio-nan", "language": "JavaScript" }, { "_id": { "$oid": "62b48680fd532558f5a9c2e7" }, "title": "Tankey!", "description": "Juego programado en C++ aplicando 5 patrones de programación para la materia arquitectura de software I", "link": "https://github.com/UCC-ArquitecturaSoftwareI/primer-parcial-cobresi-nanfara", "language": "C++" }, { "_id": { "$oid": "62b48a10fd532558f5a9c2e8" }, "title": "Portfolio", "description": "Página full-stack personal", "link": "https://github.com/Nara00/portfolio-nan", "language": "JavaScript" }, { "_id": { "$oid": "62b48680fd532558f5a9c2e7" }, "title": "Tankey!", "description": "Juego programado en C++ aplicando 5 patrones de programación para la materia arquitectura de software I", "link": "https://github.com/UCC-ArquitecturaSoftwareI/primer-parcial-cobresi-nanfara", "language": "C++" }, { "_id": { "$oid": "62b48a10fd532558f5a9c2e8" }, "title": "Portfolio", "description": "Página full-stack personal", "link": "https://github.com/Nara00/portfolio-nan", "language": "JavaScript" }, { "_id": { "$oid": "62b48680fd532558f5a9c2e7" }, "title": "Tankey!", "description": "Juego programado en C++ aplicando 5 patrones de programación para la materia arquitectura de software I", "link": "https://github.com/UCC-ArquitecturaSoftwareI/primer-parcial-cobresi-nanfara", "language": "C++" }, { "_id": { "$oid": "62b48a10fd532558f5a9c2e8" }, "title": "Portfolio", "description": "Página full-stack personal", "link": "https://github.com/Nara00/portfolio-nan", "language": "JavaScript" }];
        // this.setState({ allProjects: projects_hardcode });
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

            <div class="col-auto" style={{ padding: ".75rem"}}>
                <div class="card-project">
                    <a target="_blank" href={data.link}>
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <div class="row" style={{ margin: "0", padding: "0", marginTop: " 0.2vw", height: "6rem" }} >
                            <p class="text-capitalize card-text" style={{ color: "var(--tertiary)", fontWeight: '400' , padding: "0"}} >{data.description}</p>
                            </div>
                            <p class="text-capitalize card-text" style={{ paddingTop: ".5rem" }} >&lt;/&gt;{data.language}</p>
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
            <div class="row" style={{ marginTop: " 2vh", marginBottom: " 2vh" }} >
                {result}
            </div>
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