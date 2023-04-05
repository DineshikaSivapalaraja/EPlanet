import React, { useState } from "react";
import "../styles/style.css";
import Logo from "../images/logo1.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const history = useHistory();

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className={selected === index ? "menuItem active" : "menuItem"} key={index} onClick={() => setSelected(index)}>
              <item.icon />
              <Link to={item.path}><span>{item.heading}</span></Link>
            </div>
          );
        })}
        
      </div>
    </motion.div>
    </>
  );
};



export default Sidebar;
