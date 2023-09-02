import { useState,useEffect, useRef, React } from 'react'
import './App.css'
import './animation.css'
import logo from "./assets/images/logo.svg"
import Header from "./components/Header.jsx"
import HubSpotForm from "./components/HubSpotForm.jsx"

import Form from "./components/Form.jsx"
import MapComponent from "./components/MapComponent.jsx"
import CalendlyLink  from "./components/CalendlyLink.jsx";
import CalendlyInlineWidget  from "./components/CalendlyInlineWidget.jsx";
import SuccessCard  from "./components/SuccessCard.jsx";
import Stick from "./components/Stick.jsx"
import Section1 from "./assets/Group-back.png"
import Imager from "./components/Image.jsx"
import apiday from "./assets/images/Apiday.svg"
import Apiday2 from "./assets/images/Apiday2.svg"
import CMU from "./assets/images/CMU.svg"
import UOO from "./assets/images/UoO.svg"
import Manchester from "./assets/images/manchester.svg"
import Rwanda from "./assets/images/rdlogo.svg"
import robotpng from "./assets/images/robotpng.png"
import artemis from "./assets/images/theartemisai1.png"
import artemisbg from "./assets/images/theartemisai-bg.png"
import facebook from "./assets/images/facebook-white.svg"
import twitter from "./assets/images/twitter-white.svg"
import google from "./assets/images/google-white.svg"
import eye from "./assets/images/eye.svg"
import circles from "./assets/images/circles.svg"
import man from "./assets/images/man.svg"
import left from "./assets/images/left.svg"
import right from "./assets/images/right.svg"
import services from "./assets/images/service-bg.svg"
import wholeMap from "./assets/map/whole-map.svg"
import cmu from "./assets/map/cmu2.png"
import manchester from "./assets/map/manchester.gif"
import minict from "./assets/map/MINICT2.png"
import oxford from "./assets/map/oxford2c.jpg"
import augius from "./assets/map/augius2.jpg"
import linkedinFooter from "./assets/images/linkedin-footer.svg"
import facebookFooter from "./assets/images/facebook-footer.svg"
import linkedinWhite from "./assets/images/linkedin-white.svg"
import youtube1 from "./assets/images/youtube1.svg"
import youtube from "./assets/images/youtube.svg"
import twitterFooter from "./assets/images/twitter-3.svg"
import logo2 from "./assets/images/logo-trans.svg"
import revolution from "./assets/images/4threv.png"
import university from "./assets/images/university.png"
import government from "./assets/images/governmenta.png"
import privatecomp from "./assets/images/private.png"
import locate from "./assets/map/locate.svg"
import {BrowserRouter} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"
import Slider from 'react-slick';



function App() {

  const [circleClass, setCircleClass] = useState('rgb(171,143,64)')
  const [isVisible, setIsVisible] = useState(false);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  function Slider() {
    const sliderRef = useRef(null);
  
    useEffect(() => {
      // Function to continuously slide the images to the left
      const slideImages = () => {
        const slider = sliderRef.current;
        if (slider) {
          const firstImage = slider.querySelector('div:first-child');
          if (firstImage) {
            const imageWidth = firstImage.offsetWidth + 40; // Including margins
            slider.style.transition = 'none';
            slider.style.transform = `translateX(-${imageWidth}px)`;
  
            // Reset the transition after a short delay to create a continuous loop
            setTimeout(() => {
              slider.style.transition = 'transform 5s linear';
              slider.style.transform = 'translateX(0)';
            }, 50);
          }
        }
      };
  
      const interval = setInterval(slideImages, 5000); // Adjust the interval as needed (5 seconds in this example)
  
      return () => clearInterval(interval);
    }, []);

    return (
    <div className="partners">
      <div className="slider" ref={sliderRef}>
        <div>
          <Imager ImageSource={apiday} alt="Apiday" />
        </div>
        <div>
          <Imager ImageSource={revolution} alt="revolution" />
        </div>
        <div>
          <Imager ImageSource={Rwanda} alt="Rwanda Gov" />
        </div>
        <div>
          <Imager ImageSource={Manchester} alt="mancheste" />
        </div>
        <div>
          <Imager ImageSource={CMU} alt="CMU" />
        </div>
        <div>
          <Imager ImageSource={UOO} alt="Oxford" />
        </div>
      </div>
    </div>
  );
}



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
      const element = document.getElementById('ourSolution'); 

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
    // circleClass4 = 'rgb(171,143,64)'
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



  // const [englandSlide, setEnglandSlide] = useState(0);

  // const englandSlideContent = [
  //   {
  //     image: manchester,
  //     title: "University of Manchester, UK",
  //     content: "Conducted a wide scale landscape assessment of the state of NLP with respect to SDGs and ethical practices related to data collection and application of open source projects.",
  //   },
  //   {
  //     image: oxford,
  //     title: "University of Oxford, UK",
  //     content: "Conducted a thorough mapping of the AI, Digitization and the impact of big data technology in African countries with respect to SDG.",
  //   },
  //   {
  //     image: augius,
  //     title:"Augius",
  //     content:'AI Powered HR management software that helps to do the job based on the supply of available staff and predicting demand based on machine learning.'
  //   }
   
    
  // ];

  
  
  // useEffect(() => {
  //   const englandInterval = setInterval(() => {
  //     setEnglandSlide((prevSlide) => (prevSlide + 1) % englandSlideContent.length);
  //   }, 5000);

  //   return () => clearInterval(englandInterval);
  // }, [englandSlideContent.length]);

  // useEffect(() => {
  //   // Update the success state with the new slide content whenever englandSlide changes
  //   setSuccess([
  //     {
  //       image: englandSlideContent[englandSlide].image,
  //       title: englandSlideContent[englandSlide].title,
  //       content: englandSlideContent[englandSlide].content,
  //     },
  //   ]);
  // }, [englandSlide, englandSlideContent]);



  /////////////////////////
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowContent = [
    {
      image: manchester,
      title: "University of Manchester, UK",
      content: "Conducted a wide scale landscape assessment of the state of NLP with respect to SDGs and ethical practices related to data collection and application of open source projects.",
    },
    {
      image: oxford,
      title: "University of Oxford, UK",
      content: "Conducted a thorough mapping of the AI, Digitization and the impact of big data technology in African countries with respect to SDG.",
    },
    {
      image: augius,
      title:"Augius",
      content:'AI Powered HR management software that helps to do the job based on the supply of available staff and predicting demand based on machine learning.'
    },
    {
      image: Apiday2,
      title:"Apiday",
      content:'AI Powered customer support software that helped them provide 24/7 customer support. This helped them build strong customer loyalty. '
    },
    {
      image: cmu,
      title:"Carnegie Mellon University, US",
      content:'Developed and deployed AI courses for students who want to advance their careers in AI.'
      
    },
    {
      image: minict,
      title:"Ministry of ICT, Rwanda",
      content:'Built Data processing pipelines to turn data into insights with the intention of processing 1500+ citizens with the goal of changing recycling habits in Rwanda'
    }
    
  ];


  useEffect(() => {
    // Function to change the slide every 2 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowContent.length);
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slideshowContent.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideshowContent.length) % slideshowContent.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowContent.length);
  };


  
 




  const customStyle = [
    {'--i': '1',},
    {'--i': '2',},
    {'--i': '3',}

    
  ];
const [textChange, setTextChange]=useState(0)
const text = document.getElementById('text')

const changeContent1 = ()=>{
  text.style.display = "flex"
    
    setTextChange({
      heading: "ACADEMIA",
      content: "We develop AI-based educational tools, and creating innovative AI solutions for academic institutions."
    }) 
    
}
const changeContent2 = ()=>{
  text.style.display = "flex"
    setTextChange({
      heading: "GOVERNMENTS",
      content: "We collaborate with government agencies to develop AI solutions that enhance public services, optimize processes, and foster data-driven decision-making."
    })
    
}

const changeContent3 = ()=>{
  text.style.display = "flex"
    setTextChange({
      heading: "PRIVATE SECTOR",
      content: "We work with small, medium and large companies by providing AI-powered solutions to address their specific needs."
    })
   
}



const textShowContent = [
  {
    heading: "ACADEMIA",
    content: "We develop AI-based educational tools, and creating innovative AI solutions for academic institutions."
  },
  {
    heading: "GOVERNMENTS",
    content: "We collaborate with government agencies to develop AI solutions that enhance public services, optimize processes, and foster data-driven decision-making."
  },
  {
    heading: "PRIVATE SECTOR",
    content: "We work with small, medium and large companies by providing AI-powered solutions to address their specific needs."
  }
  
];

useEffect(() => {
  // Function to change the slide every 2 seconds
  const interval = setInterval(() => {
    setTextChange((prevSlide) => (prevSlide + 1) % textShowContent.length);
  }, 5000);

  // Cleanup function to clear the interval when the component unmounts
  return () => clearInterval(interval);
}, [textShowContent.length]);
 
const handleMouseLeave = ()=>{
  if(text.style.display === "flex"){
    text.style.display = "none"
  }
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    //  else {
    //   if (entry.target.classList.contains('show')) {
    //     entry.target.classList.remove('show');
    //   }
    // }
  });
});

const hiddenElement = document.querySelectorAll('.section');
hiddenElement.forEach((el) => observer.observe(el));


  return (
    <BrowserRouter>
    <div className="mainContainer">
    <Form/>
  
    <div className="section1 section" id="home" style={{ backgroundImage:`url(${Section1})`}}>
   <Header
        Logo ={logo}
        />  
    <div className="sectionContent sectionContent1">
        
        <div className="side">
        <div><h1>Building Your <br></br>AI <span>Ideas</span> Into Reality</h1></div>
        <div><p>We're an AI software development company that helps businesses solve complex problems with AI</p></div>
        
        <Link to="#ourContact" smooth><button>LET'S DISCUSS YOUR AI PROJECTS<div className="arrow">&#8594;</div> </button></Link>
        </div>
        
        <div className="partners">

      <div className="slider">
      <div>
      <Imager ImageSource={UOO} alt="Oxford" />
      </div>
        <div>
          <Imager ImageSource={revolution} alt="revolution" id='revolution'/>
        </div>
        <div>
          <Imager ImageSource={Rwanda} alt="rwandagov" id='rwandagov'/>
        </div>
        <div>
          <Imager ImageSource={Manchester} alt="Manchester" />
        </div>
        <div>
          <Imager ImageSource={CMU} alt="CMU" id='mellon'/>
        </div>
      
        <div>
          <Imager ImageSource={apiday} alt="Apiday" />
        </div>
      
      
        
        </div>
    </div>
        
        <div className="links">
        
        <div><a href="https://twitter.com/TheArtemis_AI"><Imager ImageSource={twitter} alt="twitter"/></a></div>
        <div><a href=" https://www.facebook.com/profile.php?id=100094257786765"><Imager ImageSource={facebook} alt="facebook"/></a></div>
        <div><a href="https://www.linkedin.com/company/the-artemis-ai/"><Imager ImageSource={linkedinWhite} alt="linkedin"/></a></div>
        <a href="https://www.youtube.com/channel/UCc0h69ABvFtx2lqXLeB_3JQ"><Imager ImageSource={youtube} alt='youtube'/></a>
        </div>
      </div> 
    
    </div>
    <div  className={`section2 section fade-in ${isVisible ? 'visible' : ''}`} id="ourSolution">
    <div className="sectionContent sectionContent2">
    <div className="sideContent">
    <div className=""><h4>WHO WE ARE</h4></div>
    <div className=""><h2>WE ARE SOLUTION <br></br>HUNTERS</h2></div>
    <div className="sideParagraph">
    <p>The Artemis AI is a technology company that builds AI software for clients worldwide.</p>
    <p>Since inception, we have had the privilege to serve different clients in various industries.</p>
    <p>To date, we have worked with governments, universities, private companies, and entrepreneurs to bring their AI ideas into reality. </p>
    </div>
    </div>
     <div className="sideImage">
        <div className="sideImageOverlay"></div>
            <Imager ImageSource={robotpng}/>
        </div>
     </div>
     
    </div>
    <div className="section3 section" id="section3">
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
    
    </div>

    <div className="section4 section" id="ourServices" >
    <div className="sideTitle"><h2>OUR SERVICES</h2></div>
    <div className="sectionContent sectionContent4">
    <div className={`sideImage slide-from-right ${isRightVisible ? 'visible' : ''}`} id="right-element">
   
        <Imager ImageSource={man}/>
    </div>
     <div  className={`sideContent slide-from-left ${isLeftVisible ? 'visible' : ''}`} id="left-element">
          <div className=""><h4>{service.title}</h4></div>
          
          <div className="sideParagraph">
                <p>{service.content}</p>
                <Link to="#ourContact"><button ><div>LET US BUILD</div><div className="arrow">&#8594;</div> </button></Link>
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
   
    
 </div>

    </div>

    <div className="section5 section" id="ourCustomers" style={{ backgroundImage:`url(${services})`}} >
    <div className="sectionContent sectionContent5">
      <div className="title"><h4>OUR CUSTOMERS</h4></div>
      
      <div className="circularImages">
      <div className="orbit">
      <Imager ImageSource={university}   ImageClass='img1' style={customStyle[0]} />
      <Imager ImageSource={government}  ImageClass='img2' style={customStyle[1]}
      //  onMouseOver={changeContent2} 
      //  onMouseLeave={handleMouseLeave}
       />
      <Imager ImageSource={privatecomp}  ImageClass='img3' style={customStyle[2]} />
     
      </div>
      <div className='content' >
      <div className='content-img' style={{ backgroundImage:`url(${artemisbg})`}}>
      <div className='text' id='text'>
        <h3>{textShowContent[textChange].heading}</h3>
        <p>{textShowContent[textChange].content}</p>
      </div>
      </div>
      </div>
      </div>

       </div>
       <div>
    </div>
    </div>

    <div className="section6 section" id="ourSuccess" >
      <div className="sectionContent sectionContent6">
      <div className="sideContent">
          <div class="success-words">
            <div><h4>OUR SUCCESS</h4></div>
          <div>
          <p>Our journey has been remarkable, spanning across borders from the scenic landscapes of France to the vibrant communities of Rwanda, the dynamic markets of the United Kingdom, and the innovation hub of the United States. We're proud of our global footprint, partnering with forward-thinking enterprises to harness the power of artificial intelligence for lasting change. Our success is defined not just by completed projects but by the impact we bring to the world. With unwavering determination, we see AI as a force to reshape industries, solve global challenges, and improve lives, and we're dedicated to pushing the boundaries of innovation for a more sustainable and equitable future.</p>
          
          </div>
          
          </div>
      <div className="ourSuccess">
            <div className="successImage"><Imager ImageSource={slideshowContent[currentSlide].image} alt={slideshowContent[currentSlide].title}/></div>
            <div className="successContent">
                  <h4>{slideshowContent[currentSlide].title}</h4>
                  <p>{slideshowContent[currentSlide].content}</p>
            </div>
            <hr></hr>
            {/* Slideshow navigation */}
            <div className="navigation">
          

            {slideshowContent.length > 1 && (
              <div className="buttons">
                <button onClick={handlePrevSlide} disabled={currentSlide === 0}>
                
                      <Imager ImageSource={left}/>
                </button>
                <button
                  onClick={handleNextSlide}
                  disabled={currentSlide === slideshowContent.length - 1}
                >
                <Imager ImageSource={right}/>
                </button>
              </div>
            )}
          </div>
            
    </div>
      
    </div>
    
      <div className="map" ><Imager ImageSource={wholeMap} alt="map"/></div> 


    </div>
    </div>

    <div className="section7 section"  id="ourContact"

     >
      <div className="sectionContent sectionContent7">
          <HubSpotForm />
      </div>
    </div>

    <div className="section7 section"  id="ourLocation" style={{ backgroundImage:`url(${services})`}}>
      <div className="sectionContent sectionContent7">
      
  

       <div className='location'>
     <div className='locSect1'>
     <Imager ImageSource={locate}/>
     <h5>LOCATION</h5>
     <h5>Kigali, Rwanda </h5>
     <p>Fairview Building</p>
     </div>
     <div className='mapper'><MapComponent/></div>
     </div>
      </div>
    </div>
    
    <div className="footer section" id="footer">
      <div className="sectionContent footerContent">
      <div className='footer-sec1'>
      <Imager ImageSource={logo2} alt="logo"/>
      
      <p>The Artemis AI is a technology company that builds AI software for clients worldwide</p>
      <div className='footer-links'>
      
      <a href=" https://www.facebook.com/profile.php?id=100094257786765"><Imager ImageSource={facebookFooter} alt='facebook'/></a>
      <a href="https://twitter.com/TheArtemis_AI"><Imager ImageSource={twitterFooter} alt='twitter'/></a>
      <a href="https://www.youtube.com/channel/UCc0h69ABvFtx2lqXLeB_3JQ"><Imager ImageSource={youtube1} alt='youtube'/></a>
      <a href="https://www.linkedin.com/company/the-artemis-ai/"><Imager ImageSource={linkedinFooter} alt='linkedin'/></a>
      </div>
      </div>
      <div className='footer-sec2'>
      <Link smooth to="#home" >HOME</Link>
      <Link smooth to="#ourSolution" >Our Solution</Link>
      <Link smooth to="#ourServices" >Our Services</Link>
      <Link smooth to="#ourCustomers" >Our Customers</Link>
      <Link smooth to="#ourSuccess" >Our Success</Link>
       
    
      </div>
      <div className='footer-sec3'>
      <p >Quick  Contacts</p>
      <p >Email:  team@theartemisai.com</p>
      <p >Tel:  +250786866503</p>
      <p >location:  KG 622 St, Kigali</p>
      <p >Building: Fairview building</p>
      </div>
      
  
      </div>
    </div>
</div>
</BrowserRouter>

  )

  }

export default App
