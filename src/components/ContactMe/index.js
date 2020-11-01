import React, {useEffect} from 'react'
import './style.css'
const ContactMe=(props)=>{
    useEffect(()=>{
        let elem = document.getElementById('contactme');
        let rect = elem.getBoundingClientRect(); 
        var top = rect.top;
        var bottom = rect.bottom;
        //console.log("rect ", rect)
        if(props.scrollposition>= top){
            props.setActive("contactme")
        }
    },[props.scrollposition])
    return(
      <div  className="contactme-container"> 
        <div  className="contactme">
            <div className="headerTitleImage"><h1>Contact Me</h1></div>
            
            <div>
              <form className="contact-form">
                  <input placeholder="Name"/>
                  <input placeholder="Email"/>
                  <textarea placeholder="Message"/>
                  <div  id="contactme" className="button-container">
                    <button type="submit">Send</button>
                  </div>
              </form> 
            </div>
            
            
            
            
            
            
            
        </div>
        </div>
    )
}
export default ContactMe;