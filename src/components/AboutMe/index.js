import React, {useEffect} from 'react'
import "./style.css"
const AboutMe =(props)=>{
    useEffect(()=>{
        let elem = document.getElementById('aboutme');
        let rect = elem.getBoundingClientRect(); 
        var top = rect.top;
        var bottom = rect.bottom;
        //console.log("rect ", rect)
        if(props.scrollposition>= top){
            props.setActive("aboutme")
        }
    },[props.scrollposition])
    return(
        <div id="aboutme" className="aboutme">
            <div className="headerTitleImage">
                <h1>About Me</h1>
            </div>
            <div className="aboutme-row">
                <div className="aboutme-image-container">
                    <img src = {require('./me.jpg')} className="clipimage" />
                </div>
                <div className="aboutme-text">
                    <p>I'm a Software Engineer for Able Soft LLC <br/> in Ulaanbaatar, Mongolia. 
                    I have serious passion for developing mobile and web application.</p>

                    <p>Received Bachelor degree in Computer Science from Mongolian University of Science and Technology 2018.</p>
                </div>
            </div>

        </div>
    )
}
export default AboutMe;