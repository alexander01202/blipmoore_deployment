import { motion } from "framer-motion";
import { GrHomeRounded,GrMoney } from 'react-icons/gr'
import { BsQuestionCircle,BsApple } from 'react-icons/bs'
import { HiCash } from 'react-icons/hi'
import { AiFillHome } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'
import { colors } from "../../colors/colors";
import { Link } from 'react-router-dom'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i }) => {
  return (
    <>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='navli'
    >
      <Link id="home" className="menu-item" to="/">
        <AiFillHome cursor={'pointer'} className='menuIcon' />
        <span>Home</span>
      </Link>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='navli'
    >
      <Link id="about" className="menu-item" to="/">
        <HiCash cursor={'pointer'} className='menuIcon' />
        <span>Pricing</span>
      </Link>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='navli'
    >
     <Link className="menu-item" to="#">
        <BsQuestionCircle cursor={'pointer'} className='menuIcon' />
        <span>Why us?</span>
      </Link>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='navli'
    >
     <div style={{ marginTop:'80px' }}>
      <a style={{ textDecoration:'none' }} href="https://play.google.com/store/apps/details?id=com.blipmoore.blipmoore">
        <button className="customBtn">
            <FaGooglePlay cursor={'pointer'} fontSize='40px' color={colors.white} />
            <span style={{ color:colors.white,marginLeft:'20px' }}><h6 style={{ marginBottom:'0' }}>Get it on</h6><h4 style={{ fontFamily:'viga',marginBottom:'0',letterSpacing:1 }}>Play Store</h4></span>
        </button>
      </a>
        {/* <button className="customBtn iosBtn">
            <BsApple cursor={'pointer'} fontSize='40px' color={colors.white} />
            <span style={{ color:colors.white,marginLeft:'20px' }}><h6 style={{ marginBottom:'0' }}>Get it on</h6><h4 style={{ fontFamily:'viga',marginBottom:'0',letterSpacing:1 }}>App Store</h4></span>
        </button> */}
      </div>
    </motion.li>
    </>
  );
};
