import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState,useEffect,useRef } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { GrHomeRounded,GrMoney } from 'react-icons/gr'
import { BsQuestionCircle,BsArrowDown,BsApple } from 'react-icons/bs'
import Form from 'react-bootstrap/Form'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import { FaGooglePlay } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { GrStar } from 'react-icons/gr'
import { IoIosArrowDropright,IoIosArrowDropleft,IoMdHappy } from 'react-icons/io'
import { RiCopyrightLine } from 'react-icons/ri'
import { AiOutlinePlusCircle,AiOutlineMinusCircle,AiOutlineMail,AiOutlineInstagram,AiFillTwitterCircle,AiOutlineFacebook } from 'react-icons/ai'
import { Imports } from "./imports";
import Nav from "./nav/Nav";
import mockup from '../assets/mockup.png'
import avatar1 from '../assets/customer photos/download.jpg'
import avatar2 from '../assets/customer photos/random-pics.jpg'
import avatar3 from '../assets/customer photos/images.jpg'
import avatar4 from '../assets/customer photos/images (1).jpg'
import Review from "../components/Review";

export default function Home() {
  const { Row,Col,Container,Menu,useWindowDimensions,MenuToggle,useDimensions,useCycle,ReactNavbar,Router,Route,Routes,colors } = Imports
  const [userScroll, setUserScroll] = useState(false)
  const [year, setYear] = useState(null)
  const { width } = useWindowDimensions();
  const [email,setEmail] = useState('')
  const [isPending, setIsPending] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [subscribedSuccess, setSubscribedSuccess] = useState(false)

  useEffect(() => {
    var date = new Date()
    setYear(date.getFullYear())
    setIsPending(false)
  }, [])
  
  var entries = [
    { id:1,img:'https://f004.backblazeb2.com/file/blipmoore/web+images/stress.png',text:'You come back from work. You see your house is in a choas, built up dirt leading to embarrassment, constant dust/dirt, you get overwhelmed then depressed, anxiety, cleaning gives you back aches, discomfort...',bold:'Imagine this...'},
    { id:2,img:'https://f004.backblazeb2.com/file/blipmoore/web+images/hire.png', text:'You instruct them on where to clean. You are feeling a bit free now and looking for a nap.',bold:'Then you hire a cleaning service/maid...'},
    { id:3,img:'https://f004.backblazeb2.com/file/blipmoore/web+images/wakeup.png', text:'Your feel more inspired and proactive, only to check on what was cleaned and you still see cobwebs and some hidden dirts and dust.',bold:'You wake up...'},
    { id:4,img:'https://f004.backblazeb2.com/file/blipmoore/web+images/search.png', text:'You look around, only for an item to be missing. Your in shock. You start searching around profusely for what else might have been stolen',bold:'Thats not all...'},
    { id:5,img:'https://f004.backblazeb2.com/file/blipmoore/web+images/blame.png', text:'Get depressed again, anxious and the cycle continues...',bold:"You blame yourself"},
    { id:6,img:'https://f004.backblazeb2.com/file/blipmoore/web+images/lost.png', text:'The item, your peace and not only trust cleaning services but trust in your own self.',bold:"But this time, you lost three things..."},
    { id:7,img:'https://f004.backblazeb2.com/file/blipmoore/web+images/question.png', text:'Scroll down and see how we solve all these.',bold:"So what are we trying to say?"},
  ]
  
  useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      if ((window.scrollY > 0) && !userScroll) {
        setUserScroll(true) 
      }else if (userScroll && window.scrollY <= 0) {
        setUserScroll(false)
      }
    })
  
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [userScroll])
  const arrow = (func,next,label) => {
    if (next) {
      return(
        <span onClick={func} className='arrow'>
          <IoIosArrowDropright cursor={'pointer'} fontSize={width >= 1280 ? '72px' : `52px`} />
        </span>
      )
    }
  }
  const prevArrow = (func,prev,label) => {
    if (prev) {
      return(
        <span onClick={func} style={{ left:'0%' }} className='arrow'>
          <IoIosArrowDropleft cursor={'pointer'} fontSize={width >= 1280 ? '72px' : `52px`} />
        </span>
      )
    }
  }
  const createMailerLiteSubscriber = async() => {
    if (!email || email == '') {
      return
    }
    setIsPending(true)
    var req = await fetch(`https://backend.blipmoore.com/createMailerLiteSubWeb?email=${email}`)
    var { success } = await req.json()
    if (success) {
      setEmail('')
      setSubscribedSuccess(true)
    }
    setIsPending(false)
  }
  function CustomToggle({ children, eventKey }) {
    const [clicked,setClicked] = useState(false)
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      setClicked(!clicked)
    );
  
    return (
      <div onClick={decoratedOnClick} style={{ display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px' }}>
        <h4 style={{ color:colors.white }} className='faqTitle'>{children}</h4>
        {
          clicked ?
          <AiOutlineMinusCircle color={colors.purple} fontSize={'28px'} style={{ marginInline:'10px' }}/>
          :
          <AiOutlinePlusCircle color={colors.purple} fontSize={'28px'} style={{ marginInline:'10px' }}/>
        }
      </div>
    );
  }
  return (
    <div style={{ backgroundColor:colors.white }}>
      {
        isPending &&
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      }
    {/* <nav style={{ backgroundColor:colors.white }} className={ userScroll ? 'navbar sticky' : 'navbar' }> */}
      {/* <Menu>
        <div style={{ marginBlock:"10px",marginBottom:'70px' }}>
          <img width={'200px'} src="./logo/BlipmooreLogo(light).png" />
        </div>
        <a id="home" className="menu-item" href="/">
          <GrHomeRounded cursor={'pointer'} className='menuIcon' />Home
        </a>
        <a id="about" className="menu-item" href="/about">
          <GrMoney cursor={'pointer'} className='menuIcon' />
          Pricing
        </a>
        <a onClick={ showSettings } className="menu-item--small" href="">
          <BsQuestionCircle cursor={'pointer'} className='menuIcon' />Why us?
        </a>
        <div style={{ marginTop:'80px' }}>
          <button className="customBtn">Download andriod app</button>
          <button className="customBtn iosBtn">Download ios app</button>
        </div>
      </Menu> */}
      <Nav />
    {/* </nav> */}
    <div className="firstbg">
    <section style={{ padding:25 }}>
      <div className='section1'>
        <span className='intro_container' style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
          <span className='intro'>
            <div className='intro_title'>
              <span>
                <h1 style={{ color:colors.black }} className='title'><span style={{ color:colors.purple }}>Erase</span> cleaning. Forever.</h1>
                <span style={{ color:colors.white,background:colors.black}} className='subtitle title'>With just one click.</span>
              </span>
              <span style={{ marginTop:'20px' }}>
                <h6 className='secondary' style={{ color:colors.darkPurple }}>Tired of cleaning again and again? Does it take your time? Or would you just like a cleaner home without breaking an arm? <span style={{ fontWeight:'bold' }}>Then leave it to blipmoore</span></h6>
              </span>
            </div>
            <div className='container_downloadBtn' style={{ flexDirection:'column' }}>
              <button className='blob-btn downloadBtn'>
                <a style={{ textDecoration:'none' }} href="https://play.google.com/store/apps/details?id=com.blipmoore.blipmoore">
                  <div style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                    <FaGooglePlay cursor={'pointer'} className='icon' fontSize='40px' />
                    <span className='downloadText'><h6 style={{ marginBottom:'0',textDecoration:'none' }}>Get it on</h6><h4 className="downloadStoreText">Play Store</h4></span>
                  </div>
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </a>
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ position:'absolute',display:'none' }} version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                  </filter>
                </defs>
              </svg>
              <button className='blob-btn downloadBtn' style={{ backgroundColor:colors.black }}>
                <a style={{ textDecoration:'none' }} href="https://play.google.com/store/apps/details?id=com.blipmoore.blipmoore">
                  <div style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                    <BsApple cursor={'pointer'} className='icon' fontSize='40px' color={colors.white} />
                    <span className='downloadText' style={{ color:colors.white }}><h6 style={{ marginBottom:'0' }}>Get it on</h6><h4 className="downloadStoreText">App Store</h4></span>
                  </div>
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </a>
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ position:'absolute',display:'none' }} version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                  </filter>
                </defs>
              </svg>
              {/* <div className='downloadBtn' >
                <BsApple cursor={'pointer'} className='icon' fontSize='40px' color={colors.white} />
                <span className='downloadText' ><h6 style={{ marginBottom:'0' }}>Get it on</h6><h4 className="downloadStoreText">App Store</h4></span>
              </div> */}
            </div>
        </span>
        <img src={mockup} style={{ width:'50%' }} className='first_mockup laptop_mockup' alt="blipmoore_mockup" />
        </span>
      </div>
    </section>
    {/* <div style={{ backgroundColor:colors.black }}>
      <a href='#story' style={{ textDecoration:'none' }}>
        <div className='storyClick'>
          <h1>HERE'S A STORY</h1>
          <BsArrowDown cursor={'pointer'} className='icon' fontSize='32px' color={colors.purple} />
        </div>
      </a>
    </div> */}
    <img src={'https://f004.backblazeb2.com/file/blipmoore/web+images/iphone_mockup.png'} className='first_mockup mobile_mockup' style={{ width:'100%' }} alt="blipmoore_mockup" />
    </div>
    <section id='story' style={{ position:'relative',marginBlock:'85px',backgroundColor:colors.black,padding:'10px' }}>
      <Carousel centerMode={width >= 768 ? true : false} centerSlidePercentage={width >= 768 && width < 1280 ? 50 : width >= 1280 ? 30 : null} showStatus={false} showIndicators={false} renderArrowPrev={prevArrow} renderArrowNext={arrow}>
        {
          entries.map(entry => (
            <div key={entry.id} className='storyLine'>
              <div style={{ backgroundColor:colors.lightPurple }} className='storyImg'>
                <img src={entry.img} width={'100%'} height={'100%'} style={{ backgroundSize:'contain' }} />
              </div>
              <div>
                <p className='storyTitle'>{entry.bold}</p>
                <p className='storyDets'>{entry.text}</p>
              </div>
            </div>
          ))
        }
      </Carousel>
    </section>
    <section style={{ backgroundColor:colors.white,padding:'10px' }}>
      <h1 style={{ fontFamily:'viga',textAlign:'center',color:colors.purple,fontSize:'32px' }}>Why choose blipmoore?</h1>
      <p className="benefitsBody">Three tangible reasons to chose blipmoore</p>
      <Row style={{ padding:'10px',justifyContent:'center',marginBlock:'20px' }}>
        <Col sm={12} lg={3} md={5} style={{ backgroundColor:colors.white }} className='benefits'>
          <div style={{ backgroundColor:colors.lightPurple }} className='benefitImg'>
            <img src={'https://f004.backblazeb2.com/file/blipmoore/web+images/clean.png'} width={'100%'} height={'100%'} style={{ backgroundSize:'contain' }} />
          </div>
          <h4 className="benefitsTitle">WE CLEAN EVERY DIRT.</h4>
          <p className="benefitsBody">We do not leave a particular spot/space uncleaned because you didn't pay for deep cleaning.</p>
        </Col>
        <Col sm={12} lg={3} md={5} style={{ backgroundColor:colors.white }} className='benefits'>
          <div style={{ backgroundColor:colors.lightPurple }} className='benefitImg'>
            <img src='https://f004.backblazeb2.com/file/blipmoore/web+images/guarantee.png' width={'100%'} height={'100%'} style={{ backgroundSize:'contain' }} />
          </div>
          <h4 className="benefitsTitle">WE OFFER GUARANTEES.</h4>
          <p className="benefitsBody">That's why we can assure you that no items would ever go missing. </p>
        </Col>
        <Col sm={12} lg={3} md={5} style={{ backgroundColor:colors.white }} className='benefits'>
          <div style={{ backgroundColor:colors.lightPurple }} className='benefitImg'>
            <img src='https://f004.backblazeb2.com/file/blipmoore/web+images/quality.png' width={'100%'} height={'100%'} style={{ backgroundSize:'contain' }} />
          </div>
          <h4 className="benefitsTitle">TOP NOTCH CLEANING</h4>
          <p className="benefitsBody">Oh do we love to flap our wings with this one. Our cleaning standard is to the extreme. We get the job done and not only that... We get that done quickly.</p>
        </Col>
      </Row>
    </section>
    <section style={{ backgroundColor:colors.black,paddingBlock:'10px' }}>
      <div className='faq_mockup_container'>
        <div className='mockup_container'>
          <span style={{ marginBlock:'20px',width:'100%' }}>
            <img src={'https://f004.backblazeb2.com/file/blipmoore/web+images/faq mockup.png'} style={{ scale:'1.5',position:'relative',left:-50 }} width='100%' />
          </span>
          <div style={{ marginBlock:'30px',width:'100%',alignItems:'center',padding:'20px' }}>
            <div className='downloadBtn section_button' style={{ background:colors.purple,width:'100%' }}>
              <FaGooglePlay cursor={'pointer'} className='icon' fontSize='40px' color={colors.white} />
              <span className='downloadText' style={{ color:colors.white,marginLeft:'20px',alignItems:'center' }}><h6 style={{ marginBottom:'0' }}>Get it on</h6><h4 style={{ fontFamily:'Anja',marginBottom:'0',letterSpacing:1 }}>Play Store</h4></span>
            </div>
            <div className='downloadBtn section_button' style={{ backgroundColor:'transparent',width:'100%',border:`1px solid ${colors.purple}` }}>
              <BsApple cursor={'pointer'} className='icon' fontSize='40px' color={colors.white} />
              <span className='downloadText' style={{ color:colors.white,marginLeft:'20px',alignItems:'center' }}><h6 style={{ marginBottom:'0' }}>Get it on</h6><h4 style={{ fontFamily:'Anja',marginBottom:'0',letterSpacing:1 }}>App Store</h4></span>
            </div>
          </div>
        </div>
        <div className='faqContainer'>
          <div style={{ marginBlock:'20px',width:'100%' }}>
            <span style={{ color:colors.white }} className='faqHeader'>Question & Answers</span>
          </div>
          <Accordion>
            <Accordion.Item className='accordionItem' eventKey="0">
              <CustomToggle eventKey="0">What is blipmoore?</CustomToggle>
              <Accordion.Body className='faqBody'>
                Blipmoore is a tech enabled company that aims to eliminate repetitive cleaning and reduce time wasteage for clients which in time reduces poor mental health and provides free a mind. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionItem' eventKey="1">
              <CustomToggle eventKey="1">How can I order?</CustomToggle>
              <Accordion.Body className='faqBody'>
                Please download our app on play store/app store respective your mobile device and you can order quickly
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionItem' eventKey="2">
              <CustomToggle eventKey="2">Explain more about cleaning</CustomToggle>
              <Accordion.Body className='faqBody'>
                We perform deep cleaning and regular cleaning at no extra cost. We cannot call ourselves professionals in cleaning and leave a dirty space because you didn't pay extra for it.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionItem' eventKey="3">
              <CustomToggle eventKey="3">How much does it cost?</CustomToggle>
              <Accordion.Body className='faqBody'>
                We have different ready made plans for you. But our starter plan is for free.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionItem' eventKey="4">
              <CustomToggle eventKey="4">Why is your first order free?</CustomToggle>
              <Accordion.Body className='faqBody'>
                We are extremely anxious to show you what we can do, as fast as possible. No need for chit chat. In a click of a button, we would be on our way.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionItem' eventKey="5">
              <CustomToggle eventKey="5">Is blipmoore hiring cleaners?</CustomToggle>
              <Accordion.Body className='faqBody'>
                Yes. We are always looking for trustworthy cleaners who are ready and available to work. We don't just hire anyone. So come with your A game.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
    <Review />
    <footer style={{ backgroundColor:colors.black }}>
      <Container className="email-block" style={{ padding:'20px' }}>
        <Row className="footer-email-row">
          <div className='my-5'>
            <span style={{ display:'block', fontFamily:'Anja',fontSize:'38px',color:colors.white,textAlign:'center' }}>Enter your email</span>
            <span style={{ display:'block',fontSize:'20px',color:'rgba(255,255,255,0.7)',letterSpacing:1,textAlign:'center' }}>- Get daily tips and tricks on cleaning your home</span>
          </div>
          <div>
            <Form>
              <Form.Group className="mb-3" style={{ display:'flex',justifyContent:'center' }} controlId="formBasicEmail">
                <Form.Control required value={email} onChange={(e) => setEmail(e.target.value)}  style={{ width:'70%',backgroundColor:'rgba(255,255,255,0.8)',padding:'10px',outline:'none',border:'none',borderRadius:'5px 0px 0px 5px' }} type='email' placeholder='Enter email' />
                <Button onClick={createMailerLiteSubscriber} style={{ backgroundColor:colors.white,outline:'none',border:'none',borderRadius:'0px 5px 5px 0px' }} variant='light'>Submit</Button>
              </Form.Group>
            </Form>
            {
              subscribedSuccess &&
              <span style={{ color:'lime',fontSize:'12px',letterSpacing:1.2 }}>Thank you for subscribing!!! You'll be hearing from us soon.</span>
            }
          </div>
        </Row>
      </Container>
      <Container style={{ backgroundColor:colors.black,padding:'10px',alignItems:'center',color:colors.white }}>
        <Row style={{ justifyContent:'space-between' }}>
          <Col lg={4} sm={12} className='mb-5'>
            <span>
              <img style={{ width:'50px',height:'50px' }} src="https://f004.backblazeb2.com/file/blipmoore/web+images/logo/transparent_white_logo.png" />
            </span>
            <p style={{ color:colors.white,opacity:0.6 }}>Blipmoore is a tech enabled company that aims to eliminate repetitive cleaning and reduce time wasteage for clients which in time reduces poor mental health and provides free a mind.</p>
            <span style={{ fontWeight:'bold',opacity:0.6 }}><RiCopyrightLine /> {year} blipmoore</span>
          </Col>
          <Col lg={4} sm={5}>
            <div style={{ marginBottom:'20px' }}>
              <h4 style={{ color:'rgba(255,255,255,0.6)',textDecoration:'underline',fontFamily:'viga' }}>Contact</h4>
            </div>
            <div style={{ display:'flex',alignItems:'center',marginBlock:'10px' }}>
              <AiOutlineMail fontSize={'18px'} style={{ marginInline:'5px',color:'rgba(255,255,255,0.6)' }} />
              <a style={{ letterSpacing:'1px',fontSize:'12px' }}>blipmoore@blipmoore.com</a>
            </div>
            <div style={{ display:'flex',alignItems:'center',marginBlock:'10px' }}>
              <BiPhoneCall fontSize={'18px'} style={{ marginInline:'5px',color:'rgba(255,255,255,0.6)' }} />
              <a style={{ letterSpacing:'1px',fontSize:'12px' }}>+234 8103539046</a>
            </div>
            <div style={{ display:'flex',alignItems:'center',marginBlock:'10px' }}>
              <a href='https://www.instagram.com/blipmoore' style={{ letterSpacing:'1px' }}>
                <AiOutlineInstagram fontSize={'18px'} style={{ marginInline:'5px',color:'rgba(255,255,255,0.6)' }} />
              </a>
              <a href='https://www.twitter.com/blipmoore' style={{ letterSpacing:'1px' }}>
                <AiFillTwitterCircle fontSize={'18px'} style={{ marginInline:'5px',color:'rgba(255,255,255,0.6)' }} />
              </a>
              <a href='https://www.twitter.com/blipmoore' style={{ letterSpacing:'1px' }}>
                <AiOutlineFacebook fontSize={'18px'} style={{ marginInline:'5px',color:'rgba(255,255,255,0.6)' }} />
              </a>
            </div>
          </Col>
          <Col lg={4} sm={5}>
            <div style={{ marginBottom:'20px' }}>
              <h4 style={{ color:'rgba(255,255,255,0.6)',textDecoration:'underline',fontFamily:'viga' }}>Company</h4>
            </div>
            <div style={{ display:'flex',alignItems:'center',marginBlock:'10px' }}>
              <a style={{ letterSpacing:'1px',fontSize:'12px' }}>About Us</a>
            </div>
            <div style={{ display:'flex',alignItems:'center',marginBlock:'10px' }}>
              <a style={{ letterSpacing:'1px',fontSize:'12px' }}>Pricing</a>
            </div>
            <div style={{ display:'flex',alignItems:'center',marginBlock:'10px' }}>
              <a href='#' style={{ letterSpacing:'1px',fontSize:'12px' }}>Blog</a>
            </div>
            <div style={{ display:'flex',alignItems:'center',marginBlock:'10px' }}>
              <a href='https://www.twitter.com/blipmoore' style={{ letterSpacing:'1px',fontSize:'12px' }}>Privacy Policy</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}
