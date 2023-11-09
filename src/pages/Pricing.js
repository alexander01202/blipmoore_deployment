import { Imports } from "./imports";
import { useState,useEffect,useRef } from 'react'
import Nav from "./nav/Nav";
import './Pricing.css'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { RiRefreshLine } from 'react-icons/ri'
import { GiPerson } from 'react-icons/gi'
import { AiFillPlusCircle } from 'react-icons/ai'

export default function Pricing() {
    const { Row,Col,Container,colors,Menu,useWindowDimensions,Navigation,MenuToggle,useDimensions,motion,useCycle,ReactNavbar,Router,Route,Routes } = Imports
    const [year, setYear] = useState(null)
    const { width } = useWindowDimensions();
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [open, setOpen] = useState(false);
    // const containerRef = useRef(null);
    // const { height } = useDimensions(containerRef);

    useEffect(() => {
        var date = new Date()
        setYear(date.getFullYear())
    }, [])
    
    return (
    <div style={{ backgroundColor:colors.white }}>
        <Nav />
        <section style={{ padding:'20px' }}>
            <h1 style={{ fontFamily:'viga' }}>We've got pre-made plans that's perfect for you.</h1>
            <Row style={{ justifyContent:'center' }}>
                <Col style={{ padding:'0px',marginBlock:'20px',overflow:'hidden' }} className="priceTab" xs={10} lg={4}>
                    <div className="price_heading">
                        <h3 style={{ fontFamily:'viga',color:colors.white,textAlign:'center',fontSize:'25px' }}>Free Plan</h3>
                    </div>
                    <div style={{ padding:'5px' }}>
                        <div>
                            <span style={{ fontSize:'44px',fontFamily:'viga' }}>$0</span><sup>/per month</sup>
                        </div>
                        <div className="d-grid gap-2 my-3 mx-2">
                            <Button style={{ borderRadius:'5px' }} variant='dark' size="md">Get started</Button>
                            <Button style={{ borderRadius:'5px' }} variant="outline-dark" size="md">Chat with advisor</Button>
                        </div>
                        <div onClick={() => setOpen(!open)} aria-controls="first-collapse" aria-expanded={open} className="my-4">
                            <span style={{ fontSize:'14px',fontFamily:'viga' }}>View details</span>
                            <div className="line" />
                        </div>
                        <Collapse in={open}>
                        <div>
                        <div id="first-collapse" className="p-2">
                            <div>
                                <div style={{ display:'flex',alignItems:'center' }}>
                                    <BsFillCheckCircleFill color={colors.purple} fontSize={'20px'}  />
                                    <span style={{ fontFamily:'viga',fontSize:'16px',opacity:'0.7' }} className="ms-1">1 Bedroom</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div>
                                <div style={{ display:'flex',alignItems:'center' }}>
                                    <RiRefreshLine color={colors.purple} fontSize={'20px'}  />
                                    <span style={{ fontFamily:'viga',fontSize:'16px',opacity:'0.7' }} className="ms-1">Just once</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div>
                                <div style={{ display:'flex',alignItems:'center' }}>
                                    <GiPerson color={colors.purple} fontSize={'20px'}  />
                                    <span style={{ fontFamily:'viga',fontSize:'16px',opacity:'0.7' }} className="ms-1">Cleaner</span>
                                </div>
                            </div>
                        </div>
                        <div className="line my-3" />
                            <div className="p-2">
                                <div>
                                    <div style={{ display:'flex',alignItems:'center' }}>
                                        <AiFillPlusCircle color={'green'} fontSize={'20px'}  />
                                        <span style={{ fontFamily:'viga',fontSize:'16px',opacity:'0.7' }} className="ms-1">Deep cleaning<sub>/per month</sub></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Collapse>
                    </div>
                </Col>
            </Row>
        </section>
    </div>
  )
}
