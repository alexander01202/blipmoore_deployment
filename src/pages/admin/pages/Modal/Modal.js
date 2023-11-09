import { useEffect, useState } from "react";
import { Form,Modal,Button } from "react-bootstrap";
import Select from 'react-select'
import { AllKeys } from "../../../../AllKeys";
import Loader from "../../../../Loader";

export default function AddressModal({ show,handleClose,updateAddress }) {
    const [error, setError] = useState({ streetName:false,text:'' })
    const [state, setState] = useState(null)
    const [stateId, setStateId] = useState(null);
    const [country, setCountry] = useState(null);
    const [countryId, setCountryId] = useState(null);
    const [lga, setLga] = useState(null);
    const [lgaId, setLgaId] = useState(null);
    const [streetNo, setStreetNo] = useState(null)
    const [streetName, setStreetName] = useState(null)
    const [loading, setLoading] = useState(false);
    const [countryList, setCountryList] = useState([
        {label: 'Nigeria', value: 'Nigeria'}
      ]);
      const [stateList, setStateList] = useState([
        {label: '', value: ''}
      ]);
      const [lgaList, setLgaList] = useState([
        {label: '', value: ''}
      ]);

      useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
        if (stateId) {
            const getLga = await fetch(`${AllKeys.verifyNINurl}/states/${stateId}/lgas`, {
                method: 'GET',
                headers:{
                  'Authorization':`Bearer <${AllKeys.verifyNINKey}>`,
                },
            })
            const { data } = await getLga.json()
            var arr = []
            Object.entries(data).map(item => {
               arr.push({ label:item[1].name,value:item[1].name })
            }) 
            setLgaList(arr)
        }if (countryId) {
            setLoading(true)
            const getStates = await fetch(`${AllKeys.verifyNINurl}/countries/${countryId}/states`, {
                method: 'GET',
                headers:{
                  'Authorization':`Bearer <${AllKeys.verifyNINKey}>`,
                },
            })
            const { data } = await getStates.json()
            var arr = []
            Object.entries(data).map(item => {
               arr.push({ label:item[1].name,value:item[1].id })
            }) 
            setStateList(arr)
            setLoading(false)
        }else{
            const res = await fetch(`${AllKeys.verifyNINurl}/countries`, {
                method: 'GET',
                headers:{
                  'Authorization':`Bearer <${AllKeys.verifyNINKey}>`,
                },
            })
            const response = await res.json()
            setCountryList([ {label:response.data[0].name, value:response.data[0].id } ])
        }
        setLoading(false)
    }
    fetchData()
      
    }, [countryId,stateId])
    const saveAddress = () => {
      setError({ streetName:false, text:'' })
      if (streetName.split(" ").includes("street")) {
        var fullAddress = 'NO ' + streetNo + ' ' + streetName + ' ,' + lga + ' ,' + state
        updateAddress(fullAddress, state, country)
        handleClose() 
      }else{
        setError({ streetName:true, text:'Missing word "street"' })
      }
    }
    
    return (
      <>
        <Modal backdrop='static' show={show} onHide={handleClose}>
        <Loader active={loading} children={null} />
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
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
                    onChange={(e) => {
                        setCountryId(e.value)
                        setCountry(e.label)
                    }} options={countryList} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
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
                    onChange={(e) => {
                        setStateId(e.value)
                        setState(e.label)
                    }} options={stateList} />
              </Form.Group>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>LGA</Form.Label>
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
                    onChange={(e) => {
                        setLgaId(e.value)
                        setLga(e.label)
                    }} options={lgaList} />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Street Name</Form.Label>
                  <Form.Control style={error.streetName ? {borderColor:'red'} : null } onChange={(e) => setStreetName(e.target.value)} type="text" required />
                  {error.streetName && <Form.Text style={{ color:'red' }}>{error.text}</Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Street Number</Form.Label>
                  <Form.Control onChange={(e) => setStreetNo(e.target.value)} type="number" required />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveAddress}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }