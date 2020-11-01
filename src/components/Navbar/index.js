import React,{useEffect, useState} from 'react'
import { useHistory ,useLocation } from 'react-router-dom';
import './style.css'
const Navbar = (props)=>{
    const [hash, setHash] = useState('')
    //useEffect(()=>{
    //    setHash(window.location.hash)
    //},[window.location.hash])
    //const location = useLocation()
    //console.log("locaiton ", location)
    //location.pathname
    useEffect(()=>{
        setHash("#"+props.active)
    },[props.active])
    return(
        <div className={`mynavbar-container`} style={hash=='' || hash=='#home'?{backgroundColor:'transparent', boxShadow:'0px 0px 0px transparent'}:{}}>
        <div className="mynavbar">
            <div>logo {props.scrollposition}</div>
            <div>
                <a href="#home" 
                onClick={()=>{
                    console.log("hash heh")
                    setHash('#home')
                }} 
                className={["mynavbar--link",(hash==''|| hash=='#home')?"activeText":''].toString().replace(',',' ')}>Home</a>
                <a href = "#aboutme" 
                onClick={()=>{
                    console.log("hash heh")
                    setHash('#aboutme')
                }} 
                className={["mynavbar--link", hash=='#aboutme'?"activeText":''].toString().replace(',',' ')}
                >About Me</a>
                <a href="#projects" 
                onClick={()=>{
                    console.log("hash heh")
                    setHash('#projects')
                }} 
                className={["mynavbar--link", hash=='#projects'?"activeText":''].toString().replace(',',' ')}
                >Projects</a>
                <a href="#contactme" 
                onClick={()=>{
                    console.log("hash heh")
                    setHash('#contactme')
                }} 
                className={["mynavbar--link", hash=='#contactme'?"activeText":''].toString().replace(',',' ')}
                >Contact Me</a>
                
            </div>
        </div>
        </div>
    )
}
export default Navbar;