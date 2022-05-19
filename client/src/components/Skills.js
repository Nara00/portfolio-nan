import React, {useEffect} from 'react'
// import { consumers } from 'stream'
import axios from 'axios';

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

        <div className="col-auto">
            <div className="card">
                <div className="card-body" style={{ background: "var(--bg-default)", border: "5px solid var(--secondary)" }}>
                    <h4 className="card-title">{data.title}</h4>
                    <h6 className="text-muted card-subtitle mb-2">{data.level}</h6>
                    <p className="card-text">{data.description}<br /></p>
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
        return(
            result
        );
    }

    render() {
        return (
            <section id="skills" className="full-screen">
                <div className="container">
                    <h2 className="text-center">SKILLS</h2>
                    <h5 style={{ marginBottom: "1em" }}>Categoría</h5>
                    <div className="row">
                        {this.init()}
                    </div>
                </div>
            </section>
        );
    }

}

export default Skills;