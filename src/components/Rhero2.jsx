import React from "react"

const custome_style={"backgroundColor":"#fff6ec"}
const styles={"color":"#243268","fontWeight":"700","color":"#0631b5"};
const style_2={"height":"600px","backgroundImage":"url(https://firebasestorage.googleapis.com/v0/b/my-project-1544342477588.appspot.com/o/rect2.png?alt=media&token=36d8ad3b-92ff-4bbb-b1b4-b5252baf2ccc)","backgroundSize":"cover","backgroundColor":"transparent"}
const btn1_style={"position":"absolute","right":"-10px","backgroundColor":"#0631b5","border":"none"}
const btn2_style={"position":"absolute","right":"-10px","top":"90px","backgroundColor":"#0631b5","border":"none"}
const btn3_style={"position":"absolute","right":"-10px","top":"160px","backgroundColor":"#0631b5","border":"none"}
const btn4_style={"position":"absolute","right":"-10px","top":"230px","backgroundColor":"#0631b5","border":"none"}
const style1={"fontWeight":"700","color":"#ccc"}
const style2={"color":"#748ef7","fontWeight":"800"}
const apply_btn={"backgroundColor":"#0631b5","color":"#ffffff"}
const Rhero2 = () =>

{
    return <div>
        <div className="hero is-fullheight is-danger" style={custome_style}>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="subtitle" style={style1}>WHAT WE OFFER FOR STUDENTS</h1>
                        <h1 style={styles} className="is-size-1">Startup Solutions</h1>
                        <div className="columns">
                            <div className="column">
                           <div className="notification" style={style_2}>
                           <div className="btns">
                                    <ul>
                                        <li><a href="#/" className="button btn has-text-white" style={btn1_style}>Startup Solutions</a></li>
                                        <li><a href="#/" className="button btn has-text-white" style={btn2_style}>Frelance Projects</a></li>
                                        <li><a href="#/" className="button btn has-text-white" style={btn3_style}>Consultancy Projects</a></li>
                                        
                                    </ul>
                                </div>
                           </div>
                            </div>
                            <div className="column">
                                
                            </div>

                            <div className="column">
                                <h1 style={style2} className="is-size-5">OUR SOLUTIONS FOR STARTUPS</h1>
                                
                                
                                <ul className="has-text-dark">
                                    <li><strong>Domain Hosting</strong></li>
                                    <li><strong>Web Development(ecommerce,CMS)</strong></li>
                                    <li><strong>Mobile Application Development</strong></li>
                                    <li><strong>Quality Analysis</strong></li>
                                    <li><strong>Strategic Digital Marketing</strong></li>
                                    <li><strong>Staffing Solutions</strong></li>
                                    <li><strong>Maintainence & Support</strong></li>
                                    
                                </ul><br/>
                               
                                <a href="#/" className="button is-medium is-rounded" style={apply_btn}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
}

export default Rhero2;