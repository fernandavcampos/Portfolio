import{FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';


import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {name: "linkedin", icon:<FaLinkedinIn/>, link:'https://www.linkedin.com/in/fernanda-vieira-campos-95308590/' },
    {name: "github", icon:<FaGithub/>, link:'//github.com/fernandavcampos'},
    {name: "instagram", icon:<FaInstagram/>, link:'https://www.instagram.com/fernanda_vieira80/'},
    
]

const SocialNetworks = () => {
  return <section id='social-networks'>
    {socialNetworks.map((network) =>(
        <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>
        {network.icon}
    </a>
        
    ))}
   
  </section>
  
}

export default SocialNetworks