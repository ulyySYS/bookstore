import React from 'react';
import discord from '../pics/icons8-discord-30.png';
import fb from '../pics/icons8-facebook-30.png';
import ig from '../pics/icons8-instagram-30.png';
import gmail from '../pics/icons8-gmail-login-30.png';
import linkedIn from '../pics/icons8-linkedin-30.png';

const Contacts = () => {
  return (
    <div className='contacts-container'>
      <div className='contacts'>
        <h1>
          Contact Me On: <br/> <img src={discord} alt="discord icon" /> <img src={linkedIn} alt="linkedin icon" /> <img src={gmail} alt="gmail icon" /> <img src={fb} alt="facebook icon" /> <img src={ig} alt="instagram icon" />
          <hr/>
          
        </h1>      
      </div>
      
    </div>
  )
}

export default Contacts