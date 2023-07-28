import React, {useEffect,useState, useRef} from 'react'
import ContactBg from "../assets/images/contact-bg.svg"
import emailjs from "emailjs-com";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Form = () => {

    const form = useRef()

    const contactBtn = document.getElementById('secondPop')
    const contactForm = document.getElementById('firstPop')
  
  
    const [isContactFormVisible, setContactFormVisible] = useState(false);
  
    const handleContactPop2 = () => {
      setContactFormVisible(!isContactFormVisible);
    };
    
        

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm("service_hivarve", "template_db3vxyi", form.current, "15uvCbWBezx9UHs3k")
        .then((result) => {
            console.log(result.text)
            if(result.text == "OK"){
                toast.success("Message sent successfully",{
                    theme:"dark",
                    pauseOnHover:true,
                });
            }
            else{
                toast.error("Failed to send");
            };
        }, (error) => {
            console.log(error.text)
            toast.error("Failed to send");
        });


    }
    
    const checkToast = (e)=>{
        e.preventDefault();
        toast.success("Message sent successfully",{
            theme:"dark",
            pauseOnHover:true,
        });
    }

  return (
    <div>
    <div className={`contactPop ${isContactFormVisible ? 'visibly': 'hidden'}`}>
    <div className={`firstPop `} id='firstPop' style={{ backgroundImage:`url(${ContactBg})`}}>
      <form ref={form} 
      onSubmit={sendEmail}
      >
        <div className='input'>
          <label> Name:</label>
          <input type="text" placeholder="Enter your name"  name="name" />
        </div>
        <div className='input'>
          <label> Email:</label>
          <input type="email" placeholder="Enter your email" name="email" />
        </div>
        <div className='input'>
          <label> Phone:</label>
          <input type="text" placeholder="Enter your name" name="phone"/>
        </div>
        <div className='input'>
          <label> Company:</label>
          <input type="text" placeholder="Your company name" name="company"/>
        </div>
        <div className='input'>
          <label> Inquiry:</label>
          <select name="inquiry">
            <option value="Help me build">Help me build</option>
            <option value="Talk to the team">Talk to the team</option>
            <option value="Apply for a job">Apply for a job</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className='input'>
          <label> Message:</label>
          <textarea name="message"> </textarea>
        </div>
        <div className='input'>
          <button type='submit' value="Send" >SEND</button>
        </div>
      </form>
    </div>
    
    
  </div>
  <div className='secondPop'>
      <button id='secondPop' onClick={handleContactPop2}>
        {isContactFormVisible ? `Close` : 'Contact Us'}
      </button>
    </div>
    <ToastContainer/>
  </div>
  )
}

export default Form