import React from 'react'
import Form from 'react-bootstrap/Form'
import './Login.css'

export default function Login() {
  return (
    <div style={{ alignItems:'center',justifyContent:'center',height:'100%' }} className='container d-flex'>
        <div className='loginBox' style={{ height:'50%',display:'flex',background:'var(--main-color)',width:'60%' }}>
            <div style={{ display:'flex',justifyContent:'center',alignItems:'center',background:'var(--darkPurple-color)',width:'30%' }}>
                <h3 style={{ fontFamily:'Funzi',color:'white',letterSpacing:1.2,fontSize:"58px" }}>LOGIN</h3>
            </div>
            <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flex:1 }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control required type="password" placeholder="Enter password" />
                    </Form.Group>
                    <button style={{ width:'100%',borderRadius:'20px' }} type="submit" className="btn newsletterBtn">Login</button>
                </Form>
            </div>
        </div>
    </div>
  )
}
