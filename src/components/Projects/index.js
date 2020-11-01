import React, {useEffect, useState} from 'react'
import './style.css'
import Modal from './modal/index.js'
const array = [
    {
        id:1, 
        title:"Online Shopping",
        images:[
            "my1.png", 
            "my2.png"
        ],
        description:"Online shopping in front end reactjs. Search products, browse product view detailed information of prodduct order product. Uses stripe as payment method uses only testing mode",

    },
    {
        id:2, 
        title:"Recipe website",
        images:[
            "myp1.png", 
            "myp2.png"
        ],
        description:"Online shopping in front e"
        
    },
    {
        id:1, 
        title:"Online Shopping",
        images:[
            "my1.png", 
            "my2.png"
        ],
        description:"Online shopping in front e"
        
    }
]
const Projects=(props)=>{
    const [showModal, setShowModal] = useState(false)
    const [modalItem, setModalItem] = useState('')
    useEffect(()=>{
        let elem = document.getElementById('projects');
        let rect = elem.getBoundingClientRect(); 
        var top = rect.top;
        var bottom = rect.bottom;
        //console.log("rect ", rect)
        if(props.scrollposition>= top){
            props.setActive("projects")
        }
    },[props.scrollposition])
    return(
        <div id="projects" className="projectcontainer">
            <div className="headerTitleImage">
                <h1>Projects</h1>
            </div>
            <div className="projects-div">
                <div className="project" onClick={()=>{
                    setShowModal(true)
                    setModalItem(array[0])
                }}>
                    <div className="project-image">
                        <img className="img" width="100%" height="100%" src = {require('./modal/assets/my1.png')}/>
                    </div>
                    <div className="project-info">
                        <p className="project_name" >
                            Shopping
                        </p>
                    </div>
                </div>
                <div className="project" onClick={()=>{
                    setShowModal(true)
                    setModalItem(array[1])
                }}>
                    <div className="project-image">
                       <img className="img" src = {require('./modal/assets/myp1.png')} width="100%" height="100%"/>
                   </div>
                   <div className="project-info">
                       <a >
                           Shopping
                       </a>
                   </div>
                </div>
                {/*
                <div className="project">
                    <div className="project-image">
                       <img src = {require('./assets/leaves2.jpg')}/>
                   </div>
                   <div className="project-info">
                       <a >
                           Shopping
                       </a>
                   </div>
                </div>*/}
            </div>
            <Modal show={showModal} item={modalItem} onClose={()=>{setShowModal(false)}}/>
        </div>
    )
}
export default Projects;