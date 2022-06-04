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
    };

    getAllSkills = () => {
        axios.get('/api/skills')
            .then((response) => {
                const data = response.data;
                this.setState({ allSkills: data });
                console.log('Data has been received!!');
            })
            .catch(() => {
                alert('Error retrieving data!!!');
            });
    };

    getCard(data) {
        return (

            <div class="col-auto">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">{data.title}</h3>
                        <h6 class="text-muted card-subtitle mb-2">{data.level}</h6>
                        <p class="card-text" style={{ color: " var(--secondary)", fontSize: " 1.2vw" }} >{data.description}</p>
                    </div>
                </div>
            </div>

        );
    }


    init = () => {
        let result = []
        this.state.allSkills.forEach(element => {
            result.push(this.getCard(element))
        });
        // console.log(result)
        return (
            result
        );
    }

    render() {
        return (
                <section id="skills" class="sections-config">
                    <div class="row header-sections" >
                        <div class="col">
                            <h1 >SKILLS</h1>
                        </div>
                        <div class="col"  style={{ position: " relative"}} >
                            <div>
                                <p class="p-note" >Me gustan</p>
                                <p class="p-note" >muchas</p>
                                <p class="p-note" >cosas</p>
                            </div>
                        </div>
                    </div>
                <div>
                    <p style={{ color: " var(--secondary)" }} >Categoría</p>
                </div>
                <div class="row" style={{ marginTop: " 2vh", marginBottom: " 2vh" }} >
                    {this.init()}

                </div>

                <Arrows to="#sobre-mi"/>
            </section>

        );
    }

}

export default Skills;