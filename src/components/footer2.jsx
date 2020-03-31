import React from "react"


const footer_style={"backgroundColor":"#253268"}
const footer_links={"margin":"15px 25px","color":"#ffffff"};
const Footer2=()=>
{
    return <div>
        <div className="hero is-medium" style={footer_style}>
            <div className="hero-body">
                <div className="container">
                    <hr/>
                    <div className="columns">
                        <div className="column">
                        <p className="subtitle has-text-white">2020 Exposys Data Labs.All Rights Reserved</p>
                        </div>
                        <div className="column">
                            <a href="#/" style={footer_links}>Terms of Service</a>
                            <a href="#/" style={footer_links}>Privacy Policy</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Footer2;