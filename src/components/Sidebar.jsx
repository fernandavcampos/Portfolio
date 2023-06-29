import React from 'react'
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';


import Foto from '../img/minhaimagem.jpg'

import "../styles/components/sidebar.sass"




const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Foto} alt='Fernanda Vieira Campos' />
      <p className="title">Desenvolvedora Front-end</p>
     <SocialNetworks/>
     <InformationContainer/>
     <a href="https://drive.google.com/file/d/18p4U0I01v6kwD6aFdMiR7BNu9q73UdOr/view?usp=sharing" target='_blank' className="btn">
        Currículo
      </a>
    </aside>
  );
}

export default Sidebar