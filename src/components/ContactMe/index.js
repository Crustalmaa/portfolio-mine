import React, {useEffect, useState} from 'react'
import './style.css'
const ContactMe=(props)=>{
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [message, setMessage]= useState('')
    useEffect(()=>{
      setMessage('')
      setName('')
      setEmail('')
        let elem = document.getElementById('contactme');
        let rect = elem.getBoundingClientRect(); 
        var top = rect.top;
        var bottom = rect.bottom;
        //console.log("rect ", rect)
        if(props.scrollposition>= top){
            props.setActive("contactme")
        }
    },[props.scrollposition])
    const sendEmail = ()=>{
      if(name=='' || email =='' || message==''){
        return;
      }
      window.emailjs.send(
        'gmail', "template_v59j4le",
        {
          name:name,
          message:email,
          fromuser:message
        }
        ).then(res => {
          setEmail('')
          setName('')
          setMessage('')
          console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
    const onChangeName=(e)=>{
      setName(e.target.value)
    }
    const onChangeEmail=(e)=>{
      setEmail(e.target.value)
    }
    return(
      <div  className="contactme-container"> 
        <div  className="contactme">

            <div className="headerTitleImage"><h1>Contact Me</h1></div>
            
            
              <form className="contact-form">
                  <input placeholder="Name" value={name} onChange={(e)=>onChangeName(e)}/>
                  <input placeholder="Email" value={email} onChange={(e)=>onChangeEmail(e)}/>
                  <textarea placeholder="Message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                  <div  id="contactme" onClick={(e)=>{
                    e.preventDefault()
                    console.log("aaa")
                    sendEmail()
                  }} className="button-container">
                    <button type="submit">Send</button>
                  </div>
              </form> 
                
        </div>
        </div>
    )
}
export default ContactMe;