import React from 'react'
import Arrows from './Arrows';



class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section id="inicio" style={{ position: " relative", background: " var(--background)", height: " 100vh", width: " 95vw", paddingLeft: " 7vw", paddingRight: " 2vw" }} >
                <div class="header-sections" >
                    <p class="p-note" >Este es mi</p>
                    <p class="p-note" >portfolio</p>
                </div>
                <div style={{ paddingTop: " 10vh" }} >
                    <h2>HOLA! SOY</h2>
                    <h1>NARA&nbsp;<span style={{ color: " var(--secondary)" }} >ABRIL</span><span>&nbsp;NANFARA.</span></h1>
                    <p style={{ color: " var(--secondary)" }} >Casi ingeniera de sistemas</p>
                </div>
                <Arrows to="#skills" />
            </section>
        );
    }

}

export default Header;