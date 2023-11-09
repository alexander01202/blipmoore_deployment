import React, { useEffect, useState } from 'react'
import { Form, FormControl,FormLabel } from 'react-bootstrap'
import './CreateEmployee.css'
import Select from 'react-select'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { AllKeys } from '../../../AllKeys'

const options = [
    { value: '4', label: 'Advisor' },
    { value: '2', label: 'Partner' },
    { value: '3', label: 'Investor' },
    { value: '5', label: 'Manager' }
]
export default function CreateEmployee() {
    const [link, setLink] = useState(null)
    const [role, setRole] = useState(null)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }, [copied])
    

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
        }
        return result;
    }
    const generateLink = (e) => {
        e.preventDefault()
        if (!role || link) {
            return
        }
        var randString = makeid(40)
        var currentDate = new Date().getTime()
        setLink(`https://blipmoore.com/signup/${randString}`)
        fetch(`${AllKeys.ipAddress}/createEmployeeLink?randString=${randString}&timestamp=${currentDate}&role=${role}`)
    }
  return (
    <div style={{ alignItems:'center',justifyContent:'center',height:'80%' }} className='container d-flex'>
        <Form style={{ textAlign:'left' }} className='GeneratelinkForm'>
        <h3 style={{ fontSize:"32px",fontFamily:'viga',color:'white',textAlign:'center' }}>Create Employee SignUp Link</h3>
            <Form.Group className='my-5'>
                <FormLabel style={{ color:'white' }}>Employee Role</FormLabel>
                <Select onChange={(e) => setRole(e.value)} options={options} />
            </Form.Group>
            <Form.Group className='my-3'>
                <FormLabel style={{ color:'white' }}>Encrypted Link</FormLabel>
                <FormControl className='disabled' require disabled value={link}></FormControl>
            </Form.Group>
            {
                link ?
                    <CopyToClipboard text={link}
                      onCopy={() => setCopied(true)}>
                      <button className='btn btn-danger' onClick={(e) => e.preventDefault()}>{copied ? "copied" : "Copy to clipboard"}</button>
                    </CopyToClipboard>
                :
                <button className='btn btn-success' onClick={(e) => generateLink(e)}>Generate Link</button> 
            }
        </Form>
    </div>
  )
}
