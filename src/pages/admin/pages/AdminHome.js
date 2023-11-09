import React from 'react'
import './AdminHome.css'

export default function AdminHome() {
  return (
    <div className='container'>
      <div className='row p-5'>
        <div style={{ height:"400px" }} className='col-md-4 boxes p-2'>
          <h3>Tomorrows events</h3>
          <div style={{ background:'var(--white-color)',borderRadius:25,display:'flex' }} className='px-5 py-1 mx-3'>
            {/* <div>
              <img  />
            </div> */}
            <div className='my-2' style={{ display:'flex',flexWrap:'wrap',justifyContent:'right' }}>
              <div style={{ background:'pink',paddingInline:10 }}>
                <span style={{ color:'red' }}>Home</span>
              </div>
              <span style={{ fontFamily:'viga' }}>Alexander</span>
              <div style={{ background:'var(--white-color)' }}>
                <h6 >10:00 am - 12:00 pm</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
