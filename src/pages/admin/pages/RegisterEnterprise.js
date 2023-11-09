import React,{ useEffect,useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel,Button } from 'react-bootstrap'
import './RegisterEnterprise.css'
import { AllKeys } from '../../../AllKeys'
import Select from 'react-select'
import NumberFormat from 'react-number-format';
import makeAnimated from 'react-select/animated';
import { currency } from '../../../currency/currency'
import AddressModal from './Modal/Modal'
import Loader from '../../../Loader'

const options = [
  { value: 'Hotel', label: 'Hotel' },
  { value: 'School', label: 'School' },
  { value: 'Bank', label: 'Bank' },
  { value: 'Hospital', label: 'Hospital' },
  { value: 'Office', label: 'Office' }
]
const skillLevel = [
  { value: 'all', label: 'All' },
  { value: 'recruit', label: 'Recruit' },
  { value: 'practitioner', label: 'Practitioner' },
  { value: 'senior practitioner', label: 'Senior Practitioner' },
  { value: 'intermediate', label: 'Intermediate' }
]
const timePeriod = [
  { value: '6am', label: '6:00 am - 8:00 am' },
  { value: '8am', label: '8:00 am - 10:00 am' },
  { value: '10am', label: '10:00 am - 12:00 pm' },
  { value: '12pm', label: '12:00 pm - 2:00 pm' },
  { value: '2pm', label: '2:00 pm - 4:00 pm' },
  { value: '4pm', label: '4:00 pm - 6:00pm' }
]
const cleanersNum = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' }
]
export default function RegisterEnterprise() {
    const [showModal, setShowModal] = useState(false);
    const [businessName, setBusinessName] = useState('')
    const [cacNumber, setCacNumber] = useState('')
    const [typeOfBusiness, setTypeOfBusiness] = useState(null)
    const [numCleaner, setNumCleaner] = useState(null)
    const [numSupervisor, setNumSupervisor] = useState(null)
    const [monthlyPay, setMonthlyPay] = useState('')
    const [payPerCleaner, setPayPerCleaner] = useState(null)
    const [cleanerLevel, setCleanerLevel] = useState(null)
    const [time, setTime] = useState(null)
    const [location, setLocation] = useState({ latitude:null, longitude:null })
    const [address, setAddress] = useState('')
    const [state, setState] = useState(null)
    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(false);
    const [extras, setExtras] = useState('')
    
    const { naira } = currency
    const animatedComponents = makeAnimated();
    useEffect(() => {
      if (numCleaner && monthlyPay) {
        var cleanersPay = Math.ceil(monthlyPay / numCleaner)
        setPayPerCleaner(cleanersPay)   
      }
    }, [numCleaner,monthlyPay])
    useEffect(() => {
        const position = async () => {
          for (let i = 0; i < 4; i++) {
            navigator.geolocation.getCurrentPosition(
              position => setLocation({ 
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude
              })
            );
          }
        }
        position()
    }, [])
    
    const addEnterprise = async(e) => {
        e.preventDefault()
        setLoading(true)
        if (businessName && cacNumber && typeOfBusiness && numCleaner && monthlyPay && payPerCleaner && state && country && location.latitude && address && numSupervisor) {
            const res = await fetch(`${AllKeys.ipAddress}/addEnterprise?extras=${extras}&state=${state}&country=${country}&name=${businessName}&cac=${cacNumber}&type=${typeOfBusiness}&cleanerLevel=${cleanerLevel}&cleanersNumber=${numCleaner}&supervisor=${numSupervisor}&time=${time.slice(0, -1)}&monthlyPay=${monthlyPay}&cleanerPay=${payPerCleaner}&latitude=${location.latitude}&longitude=${location.longitude}&location=${address}`) 
        }
        setLoading(false)
    }
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const updateAddress = (fullAddress,state, country) => {
      setAddress(fullAddress)
      setState(state)
      setCountry(country)
    }
  return (
      <>
    <Loader active={loading} children={null} />
    <div className='formDiv container d-flex'>
        <AddressModal handleClose={handleClose} updateAddress={updateAddress} show={showModal} />
        <Form className='loginBox p-3 form'>
            <FormGroup className='inputGroup'>
                <FormLabel className='user-label'>Name of Business</FormLabel>
                <FormControl value={businessName} onChange={(e) => setBusinessName(e.target.value)} className='input' required />
            </FormGroup>
            <FormGroup className='inputGroup'>
                <FormLabel className='user-label'>CAC Number</FormLabel>
                <FormControl type='text' maxLength={14} minLength={14} value={cacNumber} onChange={(e) => setCacNumber(e.target.value)} className='input' required />
            </FormGroup>
            <FormGroup className='inputGroup'>
                <FormLabel className='user-label'>Type of Business</FormLabel>
                <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: '#8E05C2',
                        primary: 'black',
                      },
                    })} 
                    onChange={(e) => setTypeOfBusiness(e.value)} options={options} />
            </FormGroup>
            <FormGroup className='inputGroup'>
                <FormLabel className='user-label'>Number Of Cleaners</FormLabel>
                <Select
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary25: '#8E05C2',
                          primary: 'black',
                        },
                      })} 
                    onChange={(e) => setNumCleaner(e.value)} options={cleanersNum} />
            </FormGroup>
            <FormGroup className='inputGroup'>
                <FormLabel className='user-label'>Skill Level Of Cleaners</FormLabel>
                <Select
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary25: '#8E05C2',
                          primary: 'black',
                        },
                      })} 
                    isMulti components={animatedComponents} onChange={(e) => 
                      {
                        let str = ''
                        e.map(val => {
                            str += val.value + ','
                        })
                        setCleanerLevel(str)
                      }
                    } options={skillLevel} />
            </FormGroup>
            <FormGroup className='inputGroup'>
                <FormLabel className='user-label'>How many Supervisors?</FormLabel>
                <Select 
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: '#8E05C2',
                        primary: 'black',
                      },
                    })} 
                    onChange={(e) => setNumSupervisor(e.value)} 
                    options={cleanersNum} 
                />
            </FormGroup>
            <FormGroup className='inputGroup'>
                <FormLabel className='user-label'>Time Period</FormLabel>
                <Select
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary25: '#8E05C2',
                          primary: 'black',
                        },
                    })} 
                    components={animatedComponents} isMulti onChange={(e) => {
                        let str = ''
                        e.map(val => {
                            str += val.value + ','
                        })
                        setTime(str)
                    }} options={timePeriod} />
            </FormGroup>
            <FormGroup className='inputGroup'>
                <FormLabel className='user-label'>Total Pay Per Month</FormLabel>
                <NumberFormat className='input form-control' allowNegative={false} allowLeadingZeros={false} value={monthlyPay} onValueChange={(e) => setMonthlyPay(e.value)} thousandSeparator={true} prefix={naira} />;
            </FormGroup>
            {
              monthlyPay && numCleaner ?
              <FormGroup className='inputGroup'>
                  <FormLabel className='user-label'>Total Pay Per Month Per Cleaner</FormLabel><br />
                  <NumberFormat className='cleanerPaySpan' displayType='text' allowNegative={false} allowLeadingZeros={false} value={payPerCleaner} onValueChange={(e) => setPayPerCleaner(e.value)} thousandSeparator={true} prefix={naira} />;
              </FormGroup>
              :
              null
            }
            <FormGroup className='inputGroup'>
                {
                  address ?
                  <>
                  <FormLabel className='user-label'>Enterprise Address</FormLabel>
                  <FormControl value={address} onChange={(e) => setAddress(e.target.value)} className='input my-2' required />
                  <Form.Text style={{ color:'#c4c4c4' }}>
                    Ensure to add more information if neccessary. (eg. estate name)
                  </Form.Text>
                  </>
                  :
                  <Button variant='secondary' onClick={handleShow}>Select Address</Button>
                }
            </FormGroup>
            <div style={{ width:'100%',textAlign:'center' }}>
                <button onClick={(e) => addEnterprise(e)} style={{ width:'100%' }} className='btn btn-success'>Add Enterprise</button>
            </div>
        </Form>
    </div>
    </>
  )
}
