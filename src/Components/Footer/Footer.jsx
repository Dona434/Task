import React from 'react';
import './Footer.css';
import medium from './medium.png';
import github from './github.png';

const Footer = () => {
  return (
    <div className='footercontainer'>
        <p className='about'>About Digitalpick</p>
        <p className='footerguidance'>Guidance for using Digitalpick</p>
    
    <div class="sentence-container">
      <div class="left-sentences">
      <p className='contact' style={{marginBottom:"-8px"}}>Contact</p>
      <p className='contact' style={{marginBottom:"-8px"}}>Services you can buy</p>
      <p className='contact' style={{marginBottom:"-8px"}}>Services you can sell</p>
      <p className='contact'>About Digitalpick Commercial Services</p>
      </div>
      <div class="right-sentences">
      <p className='contact' style={{marginBottom:"-8px"}}>Applying to sell on the G-Cloud framework</p>
      <p className='contact' style={{marginBottom:"-8px"}}>Applying to sell on the DOS framework</p>
      <p className='contact' style={{marginBottom:"-8px"}}>Buying on the G-Cloud framework</p>
      <p className='contact'>Buying on the DOS framework</p>
      </div>
    </div>

      <p className='plan'>Plan. Focus. Optimize</p>
      <p className='news'>Get Great News from Us</p>

      <div className='sentence-container'>
      <p className='quote'>Give yourself the freedom to focus</p>
      <p className='quote2'>We value privacy and would never spam you! <br></br>
          The only reason we will ever send anything is to share important updates about Seque.</p>
      </div>

      <div className='logos'>
        <img src={medium} alt='medium' style={{marginRight:"27px"}}/>

        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" style={{marginRight:"27px"}}>
        <path d="M16.0955 0.639999C7.56153 0.639999 0.643555 7.5168 0.643555 16C0.643555 24.4832 7.56153 31.36 16.0955 31.36C24.6295 31.36 31.5475 24.4832 31.5475 16C31.5475 7.5168 24.6295 0.639999 16.0955 0.639999ZM12.313 22.3664H9.18399V12.3568H12.313V22.3664ZM10.7292 11.128C9.74091 11.128 9.1019 10.432 9.1019 9.5712C9.1019 8.6928 9.76022 8.0176 10.7694 8.0176C11.7786 8.0176 12.3967 8.6928 12.416 9.5712C12.416 10.432 11.7786 11.128 10.7292 11.128ZM23.741 22.3664H20.612V16.8192C20.612 15.528 20.1581 14.6512 19.0266 14.6512C18.1622 14.6512 17.6488 15.2448 17.4218 15.816C17.3381 16.0192 17.3172 16.3072 17.3172 16.5936V22.3648H14.1866V15.5488C14.1866 14.2992 14.1463 13.2544 14.1045 12.3552H16.8231L16.9663 13.7456H17.0291C17.4411 13.0928 18.4503 12.1296 20.1388 12.1296C22.1975 12.1296 23.741 13.5008 23.741 16.448V22.3664Z" fill="white"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" style={{marginRight:"27px"}}>
        <path d="M16.0955 0.639999C7.56153 0.639999 0.643555 7.5168 0.643555 16C0.643555 24.4832 7.56153 31.36 16.0955 31.36C24.6295 31.36 31.5475 24.4832 31.5475 16C31.5475 7.5168 24.6295 0.639999 16.0955 0.639999ZM22.3809 13.2224C22.3874 13.3536 22.389 13.4848 22.389 13.6128C22.389 17.6128 19.3292 22.2224 13.7311 22.2224C12.0769 22.2251 10.4571 21.7529 9.06649 20.8624C9.3031 20.8912 9.54615 20.9024 9.79241 20.9024C11.2185 20.9024 12.5303 20.4208 13.5717 19.608C12.9371 19.5956 12.3221 19.3867 11.8126 19.0104C11.3031 18.6341 10.9243 18.1092 10.7292 17.5088C11.1849 17.5949 11.6545 17.5769 12.1022 17.456C11.4133 17.3175 10.7939 16.9465 10.3489 16.4059C9.90382 15.8652 9.6606 15.1882 9.66043 14.4896V14.4528C10.0709 14.6784 10.5409 14.816 11.0398 14.832C10.3941 14.4047 9.93693 13.7483 9.7619 12.997C9.58687 12.2458 9.70719 11.4564 10.0982 10.7904C10.8627 11.7248 11.8161 12.4892 12.8966 13.0341C13.9771 13.579 15.1607 13.8923 16.3708 13.9536C16.2169 13.3045 16.2831 12.623 16.5591 12.0152C16.8351 11.4074 17.3053 10.9072 17.8968 10.5924C18.4882 10.2777 19.1677 10.166 19.8296 10.2747C20.4915 10.3834 21.0987 10.7064 21.5568 11.1936C22.238 11.0596 22.8911 10.8113 23.4883 10.4592C23.2613 11.1602 22.786 11.7555 22.1508 12.1344C22.7541 12.0622 23.3433 11.9009 23.8988 11.656C23.4907 12.2638 22.9767 12.7943 22.3809 13.2224Z" fill="white"/>
        </svg>

        <img src={github} alt='medium'/>
      </div>

    <div style={{display:'flex'}}>
      <div className='policy'>
        <p style={{width: "127.76px"}}>Privacy Policy</p>
        <p style={{width: "199.186px",marginBottom:"100px"}}>Terms and Conditions</p>
        <p>Support</p>
      </div>
      <div className='emailcomponent'>
        <p className='email'>Email</p>
        <div className='outerrectangle'>
         <p className='emailid'> E.g. info@digitalpick.com</p>
          <div className='innerrectangle'>
         <p className='subscribe'>Subscribe</p> 
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer