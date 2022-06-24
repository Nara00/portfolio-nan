import React, { useEffect } from 'react'
// import { consumers } from 'stream'
import axios from 'axios';
import Arrows from './Arrows';


class Skills extends React.Component {

    state = {
        allSkills: []
    }

    componentDidMount = () => {
        this.getAllSkills();
        // const skills_hardcode = [{ "_id": "628ad12ef60bf40bfe7ff936", "title": "Figma", "category": "disenio", "level": "intermedio" }, { "_id": "629ade9d194bb1c676f73ad3", "title": "C++", "category": "programacion", "description": " ", "level": "avanzado" }, { "_id": "629adf1b194bb1c676f73ad4", "title": "Python", "category": "programacion", "level": "intermedio" }, { "_id": "629adf62194bb1c676f73ad5", "title": "Photoshop", "description": "Edición artística de fotografías", "category": "disenio", "level": "avanzado" }, { "_id": "629adf9d194bb1c676f73ad6", "title": "React", "category": "programacion" }];
        // this.setState({ allSkills: skills_hardcode });
    };

    getAllSkills = () => {
        axios.get('/api/skills')
            .then((response) => {
                const data = response.data;
                this.setState({ allSkills: data });
                // console.log('Data has been received!!');
            })
            .catch(() => {
                // alert('Error retrieving data!!!');
            });
    };

    getCard(data) {
        return (

            <div class="col-auto" style={{ padding: "0.37rem"}}>
                <div class="card-skill">
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="text-capitalize card-text" style={{ color: " var(--secondary)", marginTop: " -.25rem" }} >{data.level}</p>
                        {/* <p class="text-capitalize card-text" style={{ color: "var(--tertiary)", marginTop: " 0.2vw", fontWeight:'400'}} >{data.description}</p> */}
                    </div>
                </div>
            </div>

        );
    }

    getCategoryTitle(cat) {
        return (
            <div>
                <p style={{ color: " var(--secondary)" }} >{cat}</p>
            </div>
        )
    }

    init = () => {
        let result = []
        
        result.push(this.getCategoryTitle("Sistemas"))
        result.push(this.getCategoryCards(this.state.allSkills.filter(item => item.category === "programacion")))

        result.push(this.getCategoryTitle("Diseño"))
        result.push(this.getCategoryCards(this.state.allSkills.filter(item => item.category === "disenio")))

        result.push(this.getCategoryTitle("Humanas"))
        result.push(this.getCategoryCards(this.state.allSkills.filter(item => item.category === "humanas")))

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
            <section id="skills" class="sections-config">
                <div class="row header-sections" >
                    <div class="col">
                        <h1 >SKILLS</h1>
                    </div>
                    <div class="col" style={{ position: " relative" }} >
                        <div>
                            <p class="p-note" >Me gustan</p>
                            <p class="p-note" >muchas</p>
                            <p class="p-note" >cosas</p>
                        </div>
                    </div>
                </div>

                {this.init()}

                <Arrows to="#sobre-mi" />
            </section>

        );
    }

}

export default Skills;