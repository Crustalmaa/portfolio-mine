import React, {useEffect, useState} from 'react'
import './style.css'
const Technologies=(props)=>{
    const [techarray, setTechArray]=useState([
        {
            id:1,
            name:"ReactJS",
            image:"reactjs.png",
            width:100,
            height:60,
        },
        {
            id:1,
            name:"Nodejs",
            image:"nodejs.png",
            width:120,
            height:40,
        },
        {
            id:1,
            name:"React-Native",
            image:"react-native.png",
            width:180,
            height:70,
        },
        {
            id:1,
            name:"Sass",
            image:"sass.png",
            width:90,
            height:70,
        },
        {
            id:1,
            name:"Vuejs",
            image:"vue.png",
            width:100,
            height:60,
        },
        {
            id:1,
            name:"laravel",
            image:"laravel2.png",
            width:80,
            height:80,
        }
    ])
    useEffect(()=>{
        let elem = document.getElementById('aboutme');
        let rect = elem.getBoundingClientRect(); 
        var top = rect.top;
        var bottom = rect.bottom;
        //console.log("top ", top, " y ", bottom, rect)
        if(props.scrollposition>= top){
            props.setActive("aboutme")
        }
    },[props.scrollposition])
    return(
        <div  style={{backgroundColor:"#eee"}}>
        <div className="container-outer">
            <div className="headerTitleImage">
                <h1>About Me</h1>
            </div>
            <div className="container-row">
            <div  className="aboutme">
                <div className="aboutme-row">
                    <div className="aboutme-image-container">
                        <img src = {require('./assets/me.jpg')} className="clipimage" />
                    </div>
                    <div className="aboutme-text" id="aboutme">
                        <p>I'm a Software Engineer for Able Soft LLC <br/> in Ulaanbaatar, Mongolia. 
                        I have serious passion for developing mobile and web application.</p>
                        <p>Received Bachelor degree in Computer Science from Mongolian University of Science and Technology 2018.</p>
                    </div>
                </div>
            </div>
            <div className="technologycontainer">
                <div className="techview">
                    {
                        techarray.map((tech, tid)=>{
                            return(
                                <div key={tid} className="techitem">
                                    {/* <div>tesxt</div> */}
                                    <img  src = {require(`./assets/${tech.image}`)} width={tech.width} height={tech.height}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}
export default Technologies;