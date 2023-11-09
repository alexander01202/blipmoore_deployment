import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useParams } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
    const [fname, setFname] = useState(null)
    const [lname, setLname] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [Rpassword, setRpassword] = useState(null)
    const params = useParams()

    useEffect(() => {
     
    }, [])

  return (
    <div style={{ alignItems:'center',justifyContent:'center',height:'100%' }} className='container d-flex'>
        <div className='loginBox' style={{ height:'50%',display:'flex',background:'var(--main-color)',width:'60%' }}>
            <div style={{ display:'flex',justifyContent:'center',alignItems:'center',background:'var(--darkPurple-color)',width:'30%' }}>
                <h3 style={{ fontFamily:'Funzi',color:'white',letterSpacing:1.2,fontSize:"52px" }}>SIGNUP</h3>
            </div>
            <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flex:1 }}>
                <Form>
                    <Form.Group className="mb-3 d-flex">
                      <Form.Control onChange={(e) => setFname(e.target.value)} value={fname} required type="text" placeholder="Enter firstname" />
                      <Form.Control onChange={(e) => setLname(e.target.value)} value={lname} required className='mx-3'type="text" placeholder="Enter lastname" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex">
                      <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} required type="password" placeholder="Enter password" />
                      <Form.Control onChange={(e) => setRpassword(e.target.value)} value={Rpassword} className='mx-3' required type="password" placeholder="Repeat password" />
                    </Form.Group>
                    <button style={{ width:'100%',borderRadius:'20px' }} type="submit" className="btn newsletterBtn">Signup</button>
                </Form>
            </div>
        </div>
    </div>
  )
}
