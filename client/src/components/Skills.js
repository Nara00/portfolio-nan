import React, { useEffect } from 'react'
// import { consumers } from 'stream'
import axios from 'axios';
import Arrows from './Arrows';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



class Skills extends React.Component {

    state = {
        allSkills: []
    }

    componentDidMount = () => {
        this.getAllSkills();
        // const skills_hardcode = [{"_id":"628ad12ef60bf40bfe7ff936","title":"Figma","category":"disenio","level":"intermedio"},{"_id":"629ade9d194bb1c676f73ad3","title":"C++","category":"programacion","description":" ","level":"avanzado"},{"_id":"629adf1b194bb1c676f73ad4","title":"Python","category":"programacion","level":"intermedio"},{"_id":"629adf62194bb1c676f73ad5","title":"Photoshop","description":"Edición artística","category":"disenio","level":"avanzado"},{"_id":"629adf9d194bb1c676f73ad6","title":"React","category":"programacion"},{"_id":"62b483d92681258a668416bb","title":"CorelDraw","description":"Diseño vectorial","category":"disenio","level":"intermedio"},{"_id":"62b4bfaeaa693fce722ab6e4","title":"Danza Clásica","category":"humanas","level":"12 años"},{"_id":"62b4bfe1aa693fce722ab6e5","title":"Danza Contemporanea","category":"humanas","level":"5 años"},{"_id":"62b4bffeaa693fce722ab6e6","title":"Inglés","category":"humanas","level":"B2 (estudios en curso)"},{"_id":"62b4c059aa693fce722ab6e7","title":"MySQL","category":"programacion","level":"intermedio"},{"_id":"62b4c077aa693fce722ab6e8","title":"Assembler","category":"programacion"},{"_id":"62b4c0bcaa693fce722ab6e9","title":"Acrobacia aerea","category":"humanas","level":"3 años"},{"_id":"62b4c0eaaa693fce722ab6ea","title":"Natación","category":"humanas","level":"2 años"},{"_id":"62b4c11daa693fce722ab6eb","title":"SparkAR","category":"disenio","level":"Indermedio"},{"_id":"62b4c13faa693fce722ab6ec","title":"Blender","category":"disenio"},{"_id":"62b4c159aa693fce722ab6ed","title":"Edición artística","category":"disenio"},{"_id":"62b4c1b5aa693fce722ab6ee","title":"MongoDB","category":"programacion"},{"_id":"62b4c1d3aa693fce722ab6ef","title":"Bootstrap Studio","category":"disenio"},{"_id":"62b4c25faa693fce722ab6f1","title":"HTML","category":"programacion"},{"_id":"62b4c3f4aa693fce722ab6f2","title":"Docker","category":"programacion"},{"_id":"62b4c88c8fd14767acdbc92b","title":"Git","category":"programacion","level":"intermedio"}]
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

    getCategoryCards = (filtered) => {
        let result = []
        filtered.forEach(element => {
            result.push(this.getCard(element))
        });
        // console.log(result)
        return (
            // <div class="row" style={{ marginTop: " 2vh", marginBottom: " 2vh" }} >
            //     {result}
            // </div>
            <AliceCarousel mouseTracking={true} controlsStrategy='responsive' autoWidth={true} disableButtonsControls={true} disableDotsControls={true} items={result} />
        );
    }
    
    getCard(data) {
        return (

            <div class="col-auto" style={{ padding: "0.37rem", width: "11rem"}}>
                <div class="card-skill">
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text" style={{ color: " var(--secondary)", marginTop: " -.25rem" }} >{data.level}</p>
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