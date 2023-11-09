import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import { ReactNavbar } from "overlay-navbar"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "./nav/use-dimensions";
import { MenuToggle } from "./nav/MenuToggle";
import { Navigation } from "./nav/Navigation";
import { bubble as Menu } from 'react-burger-menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useWindowDimensions from '../hooks/useWindowDimensions';
import '../Menu.css'
import './Home.css'
import './Home.scss'
import { colors } from '../colors/colors'

export const Imports = {
    useWindowDimensions,
    colors,
    Row,
    Col,
    Container,
    Menu,
    Navigation,
    MenuToggle,
    useDimensions,
    motion,
    useCycle,
    ReactNavbar,
    Router,
    Route,
    Routes
}