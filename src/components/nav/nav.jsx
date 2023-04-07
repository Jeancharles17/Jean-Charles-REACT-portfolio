import React, { useState } from 'react';
import './nav.css';
import { BiHomeCircle } from 'react-icons/bi';
import { SiAboutdotme } from 'react-icons/si';
import { BsBook } from 'react-icons/bs';
import { RiCustomerService2Line } from 'react-icons/ri';
import { BiNetworkChart } from 'react-icons/bi';
import { FcContacts } from 'react-icons/fc';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' :'' }><BiHomeCircle/></a>
      <a href="#about"><SiAboutdotme/></a>
      <a href="#experience"><BsBook/></a>
      <a href="#services"><RiCustomerService2Line/></a>
      <a href="#portfolio"><BiNetworkChart/></a>
      <a href="#contact"><FcContacts/></a>
    </nav>
  )
}

export default Nav;
