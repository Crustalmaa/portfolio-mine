import React from 'react'
import './style.css'
import { AiFillFacebook } from "react-icons/ai";
import {CgMail} from 'react-icons/cg'
const Footer=(props)=>{
    return(
        <div className="footer-container">

        
        <div className="footer">
            <div className="footer-left">
                <div className="footer-social">
                <AiFillFacebook style={{marginBottom:3}} color="white"/>{' '}facebook</div>
                <div className="footer-social">
                    <CgMail style={{marginBottom:3}} color="white"/> {' '} crustalmaa@gmail.com
                </div>
            </div>
            <div className="footer-right">
                <p>Bolormaa &copy; 2020</p>
            </div>
        </div>

        </div>
    )
}
export default Footer