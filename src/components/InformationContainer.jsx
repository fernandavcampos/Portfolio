import React from 'react'

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return<section id='information'>
    <div className='info-card'>
        <AiFillPhone id='phone-icon'/>
        <div>
            <h3>Telefone</h3>
            <p>(31)9.9888-3684</p>
        </div>
    </div>
    <div className='info-card'>
        <AiOutlineMail id='email-icon'/>
        <div>
            <h3>E-mail</h3>
            <p>adscampos771@gmail.com</p>
        </div>
    </div>
    <div className='info-card'>
        <AiFillEnvironment id='pin-icon'/>
        <div>
            <h3>Localização</h3>
            <p>Matozinhos/MG</p>
        </div>
    </div>
  </section>
}

export default InformationContainer