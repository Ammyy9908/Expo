import React from "react"
import Navbar from "./navbar"


const styles={"backgroundColor":"#243268"};

const Rhero = () =>
{
    return <div>
        <div className="hero is-medium is-black" style={styles}>
            <Navbar activeclass="Training"/>
            <div className="hero-body">
                        <div className="container">
                        <h1 className="title has-text-white is-size-1">Business Solutions, Freelance,Projects & Project Developments</h1>
                        <h4 className="subtitle has-text-white">Our Business provide solution and services to help to increase productivity,inovation.</h4>
                            <div className="buttons">
                                <a href="/#" className="button is-danger is-rounded">Startup Solutions</a>
                                <a href="/#" className="button is-primary is-rounded">Freelance Projects</a>
                                <a href="/#" className="button is-info is-rounded">Consultancy Projects</a>
                                
                            </div>
                        </div>
            </div>
        </div>
    </div>
}

export default Rhero;