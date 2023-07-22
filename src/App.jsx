import { useState,useEffect } from 'react'
import './App.css'
import './animation.css'
import logo from "./assets/images/logo.svg"
import Header from "./components/Header.jsx"
import MapComponent from "./components/MapComponent.jsx"
import Stick from "./components/Stick.jsx"
import Section1 from "./assets/Group-back.png"
import Imager from "./components/Image.jsx"
import apiday from "./assets/images/Apiday.svg"
import Apiday2 from "./assets/images/Apiday2.svg"
import CMU from "./assets/images/CMU.svg"
import UOO from "./assets/images/UoO.svg"
import Manchester from "./assets/images/manchester.svg"
import Rwanda from "./assets/images/rdlogo.svg"
import robot from "./assets/images/robot.svg"
import facebook from "./assets/images/facebook-white.svg"
import twitter from "./assets/images/twitter-white.svg"
import google from "./assets/images/google-white.svg"
import diskSide from "./assets/images/disk-side.svg"
import diskFlat from "./assets/images/disk-flat.svg"
import eye from "./assets/images/eye.svg"
import circles from "./assets/images/circles.svg"
import man from "./assets/images/man.svg"
import services from "./assets/images/service-bg.svg"
import circular from "./assets/images/circular.svg"
import AI from "./assets/images/AI.svg"
import bigData from "./assets/images/Bid-Data.svg"
import BlockChain from "./assets/images/Block-Chain.svg"
// import cloud from "./assets/images/cloud.svg"
import Website from "./assets/images/Website.svg"
import map from "./assets/images/map.svg"
import curved1  from "./assets/map/curver1.png"
import curved2 from "./assets/map/curver2.png"
import usa from "./assets/map/usa.svg"
import england from "./assets/map/america.png"
import france from "./assets/map/france.png"
import rwanda from "./assets/map/rwanda.svg"
import cmu from "./assets/map/cmu2.png"
import manchester from "./assets/map/manchester.gif"
import manchester2 from "./assets/map/manchester2.png"
import minict from "./assets/map/MINICT2.png"
import oxford from "./assets/map/oxford2c.jpg"
import augius from "./assets/map/augius2.jpg"
import FooterBg from "./assets/images/footer-bg.svg"
import linkedinFooter from "./assets/images/linkedin-footer.svg"
import facebookFooter from "./assets/images/facebook-footer.svg"
import youtube from "./assets/images/youtube1.svg"
import twitterFooter from "./assets/images/twitter-3.svg"
import ContactBg from "./assets/images/contact-bg.svg"
import ContactMap from "./assets/images/contact-map.svg"
import logo2 from "./assets/images/logo-trans.svg"
import revolution from "./assets/images/4threv.png"
import university from "./assets/images/university.png"
import government from "./assets/images/government.png"
import privatecomp from "./assets/images/private.png"
import locate from "./assets/map/locate.svg"


function App() {
  const [circleClass, setCircleClass] = useState('rgb(171,143,64)')
  const [isVisible, setIsVisible] = useState(false);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  useEffect(() => {
    const handleScrollMove = () => {
      const leftElement = document.getElementById('left-element');
      const rightElement = document.getElementById('right-element');

      if (leftElement) {
        const rect = leftElement.getBoundingClientRect();
        const isVisible = rect.left < window.innerWidth;
        setIsLeftVisible(isVisible);
      }

      if (rightElement) {
        const rect = rightElement.getBoundingClientRect();
        const isVisible = rect.left < window.innerWidth;
        setIsRightVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScrollMove);
    return () => window.removeEventListener('scroll', handleScrollMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('my-element'); 

      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const [service, setService] =useState({
    title:`Computer vision Systems`,
  content:`The Artemis AI is committed to using computer 
  vision to solve real-world problems. If you have 
  a computer vision idea that you want to bring to 
  life, then The Artemis AI can help you make it 
  happen.`})

  const circleId1 = document.getElementById('circleId1');
  const circleId2 = document.getElementById('circleId2');
  const circleId3 = document.getElementById('circleId3');
  const circleId4 = document.getElementById('circleId4');
  const circleId5 = document.getElementById('circleId5');

  const handleServiceChange1 = ()=>{
    
    if(circleId1.style.backgroundColor != 'rgb(171,143,64)'){
      circleId1.style.backgroundColor = 'rgb(171,143,64)'
      circleId2.style.backgroundColor = 'white'
      circleId3.style.backgroundColor = 'white'
      circleId4.style.backgroundColor = 'white'
      circleId5.style.backgroundColor = 'white'
    }
    else{
      circleId1.style.backgroundColor = 'white'
    }

    setService({
      title:`Data Engineering`,
  content:` A solid data foundation is critical for successful AI implementation. Our data engineering services ensure your data is pre-processed, cleaned, and transformed to fuel accurate AI models, driving meaningful results for your organisation.
  `})
  }
  const handleServiceChange2 = ()=>{
    if(circleId2.style.backgroundColor != 'rgb(171,143,64)'){
      circleId1.style.backgroundColor = 'white'
      circleId2.style.backgroundColor = 'rgb(171,143,64)'
      circleId3.style.backgroundColor = 'white'
      circleId4.style.backgroundColor = 'white'
      circleId5.style.backgroundColor = 'white'
    }
    else{
      circleId2.style.backgroundColor = 'white'
    }
    setService({
      title:`AI Consulting`,
    content:`Our team of experts will guide you through the intricacies of AI integration and help you make informed decisions to leverage its full potential. Whether you're a seasoned AI user or new to the technology, we're here to support your journey.`})
  }
  const handleServiceChange3 = ()=>{
    if(circleId3.style.backgroundColor != 'rgb(171,143,64)'){
      circleId1.style.backgroundColor = 'white'
      circleId2.style.backgroundColor = 'white'
      circleId3.style.backgroundColor = 'rgb(171,143,64)'
      circleId4.style.backgroundColor = 'white'
      circleId5.style.backgroundColor = 'white'
    }
    else{
      circleId3.style.backgroundColor = 'white'
    }
    setService({
      title:`Generative AI`,
    content:`Unleash the power of creativity with our Generative AI solutions. From artistic applications to content generation, our algorithms can produce unique and compelling outputs, revolutionising the way you approach design and innovation.
    `})
  }
  const handleServiceChange4 = ()=>{
    if(circleId4.style.backgroundColor != 'rgb(171,143,64)'){
      circleId1.style.backgroundColor = 'white'
      circleId2.style.backgroundColor = 'white'
      circleId3.style.backgroundColor = 'white'
      circleId4.style.backgroundColor = 'rgb(171,143,64)'
      circleId5.style.backgroundColor = 'white'
    }
    else{
      circleId4.style.backgroundColor = 'white'
    }
    setService({
      title:`Predictive Analytics`,
    content:`Stay ahead of the competition with our predictive analytics services. By analysing historical data and identifying patterns, our AI-driven models will enable you to make data-driven decisions and forecast future trends accurately.
    `})
    circleClass4 = 'rgb(171,143,64)'
  }
  const handleServiceChange5 = ()=>{
    if(circleId5.style.backgroundColor != 'rgb(171,143,64)'){
      circleId1.style.backgroundColor = 'white'
      circleId2.style.backgroundColor = 'white'
      circleId3.style.backgroundColor = 'white'
      circleId4.style.backgroundColor = 'white'
      circleId5.style.backgroundColor = 'rgb(171,143,64)'
    }
    else{
      circleId5.style.backgroundColor = 'white'
    }
    setService({
      title:`Automated Machine Learning`,
    content:`Embrace efficiency and productivity with our Automated Machine Learning solutions. Let our AI automate the model selection and tuning process, allowing you to focus on extracting valuable insights from your data effortlessly.
    `})
  }

  const contactBtn = document.getElementById('secondPop')
  const contactForm = document.getElementById('firstPop')


  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const handleContactPop2 = () => {
    setContactFormVisible(!isContactFormVisible);
  };


  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowContent = [
    {
      image: manchester,
      title: "University of Manchester, UK",
      content: "conduct a wide scale landscape assessment of the state of NLP with respect to SDGs and ethical practices related to data collection and application of open source projects.",
    },
    {
      image: oxford,
      title: "University of Oxford, UK",
      content: "conduct a thorough mapping of the AI, Digitization and the impact of big data technology in African countries with respect to SDG.",
    },
    {
      image: augius,
      title:"Augius",
      content:'AI Powered HR management software that helps get the work done based on the available personnel supply and machine learning based demand prediction'
    }
    
  ];

  useEffect(() => {
    
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowContent.length);
    };

    // Start the slideshow timer
    const interval = setInterval(nextSlide, 1500); // Change slide every 3 seconds (3000 milliseconds)

    // Clean up the timer when the component unmounts
    return () => clearInterval(interval);
  }, []); 




  const [success, setSuccess] = useState(
    [{
    image: Apiday2,
    title:"Apiday",
    content:'AI Powered customer support software that helped them provide 24/7 customer support. This helped them build strong customer loyalty. '
  }]
  );
  const handleSuccessChange1 = ()=>{ //UK

    setSuccess( [{
      image: cmu,
      title:"Carnegie Mellon University, US",
      content:'develop and deploy AI courses for students that wish to build their careers in AI.'
      
    }])

  }
  const handleSuccessChange2 = ()=>{
    setSuccess( [{
      image: minict,
      title:"Ministry of ICT, Rwanda",
      content:'Built Data processing pipelines to turn data into insights with the intention of processing 1500+ citizens with the goal of changing recycling habits in Rwanda'
    }])
  }
  const handleSuccessChange3 = ()=>{
    setSuccess( [
      {
      image: slideshowContent[currentSlide].image,
      title:slideshowContent[currentSlide].title,
      content:slideshowContent[currentSlide].content
    },
      {
      image: oxford,
      title:"University of Oxford, UK",
      content:'conduct a thorough mapping of the AI, Digitization and the impact of big data technology in African countries with respect to SDG.'
    },
  ])
  }
  const handleSuccessChange4 = ()=>{
    setSuccess( [{
      image: Apiday2,
      title:"Apiday",
      content:'AI Powered customer support software that helped them provide 24/7 customer support. This helped them build strong customer loyalty. '
    }])
  }
 
  return (
    <div className="mainContainer">
    <div className={`contactPop ${isContactFormVisible ? 'visibly': 'hidden'}`}>
    <div className={`firstPop `} id='firstPop' style={{ backgroundImage:`url(${ContactBg})`}}>
      <form>
        <div className='input'>
          <label> Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className='input'>
          <label> Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className='input'>
          <label> Phone:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className='input'>
          <label> Company:</label>
          <input type="text" placeholder="Your company name" />
        </div>
        <div className='input'>
          <label> Message:</label>
          <select >
            <option value="Help me build">Help me build</option>
            <option value="Talk to the team">Talk to the team</option>
            <option value="Apply for a job">Apply for a job</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className='input'>
          <button type='submit'>SEND</button>
        </div>
      </form>
    </div>
    
  </div>
  <div className='secondPop'>
      <button id='secondPop' onClick={handleContactPop2}>
        {isContactFormVisible ? `Close` : 'Contact Us'}
      </button>
    </div>
    <div className="section1 section" style={{ backgroundImage:`url(${Section1})`}}>
    <Header
        Logo ={logo}
        />  
    <div className="sectionContent sectionContent1">
        
        <div className="side">
        <div><h1>Building Your <br></br>AI <span>Ideas</span> Into Reality</h1></div>
        <div><p>We're an AI software development company that helps businessess solve complex problems with AI</p></div>

        <button><div>LET US DISCUSS YOUR AI PROJECT </div><div className="arrow">&#8594;</div> </button>
        </div>
        <marquee direction='left' width="100%" height="200px">
        <div className="partners">
        
        <div><Imager ImageSource={apiday} alt="Apiday"/></div>
        <div><Imager ImageSource={revolution} alt="revolution"/></div>
        <div><Imager ImageSource={Rwanda} alt="Apiday"/></div>
        <div><Imager ImageSource={Manchester} alt="Apiday"/></div>
        <div><Imager ImageSource={CMU} alt="Apiday"/></div>
        <div><Imager ImageSource={UOO} alt="Apiday"/></div>
        
        
        </div>
        </marquee>
        <div className="links">
        <div><Imager ImageSource={google} alt="google"/></div>
        <div><Imager ImageSource={twitter} alt="twitter"/></div>
        <div><Imager ImageSource={facebook} alt="facebook"/></div>
        </div>
      </div> 
    
    </div>
    <div className={`section2 section fade-in ${isVisible ? 'visible' : ''}`} id="my-element">
    <div className="sectionContent sectionContent2">
    <div className="sideContent">
    <div className=""><h4>WHO WE ARE</h4></div>
    <div className=""><h2>WE ARE SOLUTION <br></br>HUNTERS</h2></div>
    <div className="sideParagraph">
    <p>The Artemis AI is a technology company that builds AI software for cliesnts worldwide</p>
    <p>Since inception, we have had the priviledge to serve different clients in various industries</p>
    <p>To date, we have worked with governments, universities, private companies, and entreprenuers to bring their AI ideas into reality. These projects have been in the</p>
    </div>
    </div>
     <div className="sideImage">
        <div className="sideImageOverlay"></div>
            <Imager ImageSource={robot}/>
        </div>
     </div>
     
    </div>
    <div className="section3 section" >
    <div className="sectionContent sectionContent3">
    <div className="leftContent">
    <div><Imager ImageSource={circles} alt='Image'/></div>
    <div>
    <p>To be the leading prodider of AI-powered solutions that build your ideas into reality.</p>
    
    </div>
    </div>
    <div className="rightContent">
    <div><Imager ImageSource={eye} alt='Image'/></div>
    <div>
    <p>To bring cool and positively impactful ideas to life.</p>
    
    </div>
    </div>
    

    </div>
    <div className="disk"><Imager ImageSource={diskSide} alt="image"/></div>
    
    </div>

    <div className="section4 section" >
    <div className="sideTitle"><h2>OUR SERVICES</h2></div>
    <div className="sectionContent sectionContent4">
    <div className={`sideImage slide-from-right ${isRightVisible ? 'visible' : ''}`} id="right-element">
   
        <Imager ImageSource={man}/>
    </div>
     <div  className={`sideContent slide-from-left ${isLeftVisible ? 'visible' : ''}`} id="left-element">
          <div className=""><h4>{service.title}</h4></div>
          
          <div className="sideParagraph">
                <p>{service.content}</p>
                <button><div>LET US BUILD</div><div className="arrow">&#8594;</div> </button>
          </div> 
          <div div><Stick
          onClick1={handleServiceChange1}
          onClick2={handleServiceChange2}
          onClick3={handleServiceChange3}
          onClick4={handleServiceChange4}
          onClick5={handleServiceChange5}
          circleId1 ="circleId1"
          circleId2 ="circleId2"
          circleId3 ="circleId3"
          circleId4 ="circleId4"
          circleId5 ="circleId5"
          circleClass1 ='brown'
          /></div>   
      
    </div>
    <div className="disk2"><Imager ImageSource={diskFlat} alt="image"/></div>
    
 </div>

    </div>

    <div className="section5 section" style={{ backgroundImage:`url(${services})`}} >
      <div className="sectionContent sectionContent5">
      <div className="title"><h4>OUR TARGET GROUP</h4></div>
      
      <div className="circularImages">
      <div className="circularImage1"><Imager ImageSource={government} alt="AI"/><div><h3>GOVERNMENTS</h3></div></div>
      <div className="circularImage2"><Imager ImageSource={privatecomp} alt="BlockChain"/><div><h3>PRIVATE COMPANIES</h3></div></div>
      <div className="circularImage3"><Imager ImageSource={university} alt="Big Data"/><div><h3>ACADEMIA</h3></div></div>
      </div>
    </div>
    </div>

    <div className="section6 section"  >
      <div className="sectionContent sectionContent6">
      <div className="sideContent">
        <div><h4>OUR SUCCESS</h4></div>
      <div><p>We are proud that we have done so far, and we are excited to see what the future holds. Webelieve that AI has the potential to chang the world, and we are committed to using our expertise to make a difference.</p></div>
      <div className="map" ><Imager ImageSource={curved2} alt="map"/></div> 
      <div className="country usa" onClick={handleSuccessChange1}><Imager ImageSource={england} alt="map"/></div>
      <div className="country rwanda" onClick={handleSuccessChange2}><Imager ImageSource={rwanda} alt="rwanda-location"/></div> 
      <div className="country england" onClick={handleSuccessChange3}><Imager ImageSource={usa} alt="england-location"/></div> 
      <div className="country france" onClick={handleSuccessChange4}><Imager ImageSource={france} alt="france-location"/></div> 
    </div>
    <div className="ourSuccess">
    <div className="successImage"><Imager ImageSource={success[0].image} alt={success[0].title}/></div>
    <div className="successContent">

    <h4>{success[0].title}</h4>
    
    <p>{success[0].content}</p>
    </div></div>
    </div>
    </div>

    <div className="section7 section"  >
      <div className="sectionContent sectionContent7">
     <div className="contactForm" style={{ backgroundImage:`url(${ContactBg})`}}>
     <form>
     <div className='input'>
     <label> Name</label>
     <input type="text" placeholder="Enter your name" />
     </div>
     <div className='input'>
     <label> Email</label>
     <input type="email" placeholder="Enter your email" />
     </div>
     <div className='input'>
     <label> Phone</label>
     <input type="text" placeholder="Enter your name" />
     </div>
     <div className='input'>
     <label> Company Name</label>
     <input type="text" placeholder="" />
     </div>
     <div className='input'>
     <label> Message</label>
     <select >
     
     <option value="Help me build">Help me build</option>
     <option value="Talk to the team">Talk to the team</option>
     <option value="pply for a job">Apply for a job</option>
     <option value="Other">Other</option>
     </select>
     
     </div>
     <div className='input'>
     <button type='submit'>SEND</button>
     </div>
     </form>
     </div>
     <div className='location'>
     <div className='locSect1'>
     <Imager ImageSource={locate}/>
     <h5>LOCATION</h5>
     <h5>Kigali, RWANDA</h5>
     <p>KG 622 St, Kigali</p>
     </div>
     <div className='mapper'><MapComponent/></div>
     </div>
      </div>
    </div>
    <div className="footer section" >
      <div className="sectionContent footerContent">
      <div className='footer-sec1'>
      <Imager ImageSource={logo2} alt="logo"/>
      
      <p>The Artemis AI is a technology company taht builds AI software for clients worldwide</p>
      <div className='footer-links'>
      
      <Imager ImageSource={facebookFooter} alt='facebook'/>
      <Imager ImageSource={twitterFooter} alt='twitter'/>
      <Imager ImageSource={youtube} alt='youtube'/>
      <Imager ImageSource={linkedinFooter} alt='linkedin'/>
      </div>
      </div>
      <div className='footer-sec2'>
      <a href="">Meet The Hunters</a>
      <a href="">Features</a>
      <a href="">Services</a>
      <a href="">Testimonial</a>
      <a href="">Blog</a>
      </div>
      <div className='footer-sec3'>
      <a href=".contactForm">Contact Us</a>
      <a href="">terms of Service</a>
      <a href="">Privacy</a>
      <a href="">Careers</a>
      <a href="">FAQ's</a>
      </div>
      <div className='footer-sec4'>
      <h4> Subscribe</h4>
      <p>Get offers and stay up-to-date</p>
      <div>
      <form>
      <input type='email' placeholder='Email address'/>
      <button type='submit'>Subscribe</button>
      </form>
      </div>
      </div>
      </div>
    </div>
</div>

  )

  }

export default App
