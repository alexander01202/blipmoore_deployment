import React, { useState,useEffect } from 'react'
import {BrowserRouter as Router, Route,Routes,Link } from "react-router-dom"
import { Nav } from 'react-bootstrap';
import AdminHome from './pages/AdminHome'
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarFooter,SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem,FaSignOutAlt,FaLink } from 'react-icons/fa'
import { FcManager } from 'react-icons/fc'
import { IoIosBusiness } from 'react-icons/io'
import { MdWorkOutline,MdPayments } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import Login from './pages/Login';
import CreateEmployee from './pages/CreateEmployee';
import RegisterEnterprise from './pages/RegisterEnterprise';
import useWindowDimensions from './pages/Hooks/useWindowDimensions'
import './Dashboard.css'

export default function Dashbord() {
    const [collapsed, setCollapsed] = useState(false)
    const [hideSideBar, setHideSideBar] = useState(false)
    const { height, width } = useWindowDimensions();

    
    useEffect(() => {
      if (width < 998) {
        setHideSideBar(true)
        setCollapsed(true)
      }
    }, [width])
  return (
    <>
      <Nav style={{ backgroundColor:'var(--main-color)',padding:10 }}>
      <Nav.Item>
        <GiHamburgerMenu style={{ fontSize:"30px",color:'white' }} onClick={() => {
          if (width < 992) {
            setHideSideBar(!hideSideBar)
          }else{
            setCollapsed(!collapsed)} 
          }
        }/>
      </Nav.Item>
    </Nav>
    <div style={{ height:'100%' }} className='d-flex'>
      <div style={hideSideBar ? { display:'none' } : collapsed ? { minWidth:'80px' } : { minWidth:'270px' }}>
      <ProSidebar collapsed={collapsed}>
        <SidebarHeader style={{ display:'flex',justifyContent:'center',padding:20 }}>
            <img className='sidebarLogo' src={!collapsed ? 'https://f004.backblazeb2.com/file/blipmoore/web+images/BlipmooreLogo(light).png' : 'https://f004.backblazeb2.com/file/blipmoore/web+images/Blipmoore Logo Icon (light).png'} width={collapsed ? "50px" :"200px"}  alt="logo" />
        </SidebarHeader>
        <Menu subMenuBullets={true} iconShape="square">
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <MenuItem icon={<FaGem />}>Cleaners</MenuItem>
          <MenuItem icon={<FcManager />}>Supervisors</MenuItem>
          <SubMenu title="Enterprises" icon={<IoIosBusiness />}>
            <MenuItem><Link to={"/admin/RegisterEnterprise"} />Register Enterprise</MenuItem>
            <MenuItem>List of Enterprises</MenuItem>
            <MenuItem>Prospect Enterprise</MenuItem>
          </SubMenu>
          <MenuItem icon={<MdPayments />}>Subscriptions</MenuItem>
          <SubMenu title="Orders" icon={<MdWorkOutline />}>
            <MenuItem>Completed</MenuItem>
            <MenuItem>Live Orders</MenuItem>
            <MenuItem>Ongoing</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaLink />}>Create Signup Link <Link to={"/admin/createLink"} /></MenuItem>
        </Menu>
        <SidebarFooter style={{ display:'flex',justifyContent:'center',height:'100%',alignItems:'center' }}>
          <button style={{ alignItems:'center' }} className='signoutBtn btn btn-danger d-flex'><FaSignOutAlt /><h4 style={{ paddingInline:10 }}>Sign out</h4></button>
        </SidebarFooter>
      </ProSidebar>
      </div>
      <div style={{ width:'100%' }}>
        <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/createLink" element={<CreateEmployee />} />
            <Route path="/RegisterEnterprise" element={<RegisterEnterprise />} />
        </Routes>
      </div>
    </div>
    </>
  )
}
