import { useState,useEffect,useRef } from 'react'
import { Imports } from '../imports'
import { Link } from 'react-router-dom'

export default function Nav() {
    const { useDimensions,Navigation,motion,colors,useCycle,useWindowDimensions,MenuToggle } = Imports
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const { width } = useWindowDimensions();
    const [navHeight, setNavHeight] = useState(width > 768 && width < 1280 ? 120 : width >= 1280 ? 86 : 100)
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [isClicked, setIsClicked] = useState(false)
    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px ${navHeight / 2}0px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: `circle(30px at 40px ${navHeight / 2}px)`,
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };
  return (
    <>
    <nav style={{ backgroundColor:colors.white }} className='laptop_nav'>
      <span style={{ paddingLeft:'70px' }}>
        <img className='logo' src="https://f004.backblazeb2.com/file/blipmoore/web+images/logo/logo.png" />
      </span>
      <ul className='nav_ul'>
        <Link id="home" to="/">
          <li className='nav_li'>Home</li>
        </Link>
        <Link id="pricing" to="/">
          <li className='nav_li'>Pricing</li>
        </Link>
        <Link id="home" to="/">
          <li className='nav_li'>Why us</li>
        </Link>
        <Link id="home" to="/">
          <li className='nav_li'>Contact Us</li>
        </Link>
      </ul>
    </nav>
    <div className='navDiv' style={{ backgroundColor:colors.white,height:`${navHeight}px` }}>
        <motion.nav
          initial={false}
          onAnimationStart={() => {
            setTimeout(() => {
              setIsClicked(!isClicked)
            }, 500);
          }}
          // onAnimationEnd={() => {
          //   setTimeout(() => {
          //     setIsClicked(!isClicked)
          //   }, 5000);
          // }}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div style={{ backgroundColor:colors.purple }} className="background" variants={sidebar} />
          {
            isClicked
            &&
            <Navigation />
          }
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        <Link to='/'>
          <span>
            <img className='logo' src="https://f004.backblazeb2.com/file/blipmoore/web+images/logo/logo.png" />
          </span>
        </Link>
    </div>
    </>
  )
}
