import React from 'react'
// import { navigate } from 'gatsby-link'
// import { FiShare } from 'react-icons/fi';
// import { IoShareOutline } from 'react-icons/io5';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import ScrollAnimation from 'react-animate-on-scroll'
// import CookieConsent from "react-cookie-consent"
// import { StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player/lazy'
// import { Link } from "gatsby"
import { AiOutlineAudioMuted } from "react-icons/ai"
// import Greeter from "./GreetMe"
import styled from "styled-components";


const CustomBox = styled.div`
// #installer {
//   animation: cssAnimation 0s 1s forwards;
//   visibility: hidden;
// }

// @keyframes cssAnimation {
//   to   { visibility: visible; }
// }




// @media (display-mode: standalone) {
//   /* All installed PWAs */
//   #installer{display: none !important;}
// }
	
// @media (hover: hover) {
// #installer{display: none !important;}
// }
	


`

const InstallDiscount = () => (
<>


<CustomBox style={{}} className="">



<div id="installer" className="popper1" style={{ display:'flex', justifyContent:'center', alignContent:'center', position: 'fixed', top:'60px',
left:'-90vw', alignItems:'center', background:'transparent', padding:'0', zIndex:'5'}}>


{/* <ReactPlayer
          className='playerpp'
          url="https://www.youtube.com/embed/S5S6s5dZXNM"
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          width=""
          height=""
          style={{left:'', position:'', zIndex:'30', display:'grid', width:'500px', alignSelf:'center', placeContent:'center', justifyContent:'center', margin:'0 auto',border:'0px solid blue'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:0, start:5,  }
            },
          }}
          loop
          // playing
          playsinline
        //   playIcon={



        //     <button aria-label="Click To Play" className="clickplays" style={{position:'', zIndex:'0', display:'flex', minWidth:'', bottom:'', border:'0px  solid red', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', padding:'3% 10%', borderRadius:'12px' , }}>
          
        // <div className="" style={{position:'', top:'', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'', marginBottom:''}}>
          
      

        //   <div className="popped " style={{pozition:'relative', display:'flex', alignSelf:'center', justifyContent:'center', width:'100%', margin:'0 auto 0 auto', fontWeight:'bold', padding:'40px', fontSize:'3vw', color:'#fff', borderRadius:'200px', border:'0px solid #fff', filter:'drop-shadow(2px 2px 2px #000)'}}>
        //     <AiOutlineAudioMuted style={{margin:'5px 1rem 0 auto', fontSize:'40px', filter:'drop-shadow(2px 2px 2px #000)'}} />
        //   <div className="tronText" style={{fontSize:'1.5vw', fontWeight:'', padding:'0', }}>Play Music From Movie</div>
        //   </div>
          
        //   </div>
        //   </button>
          

          
        // }
   
        //     light="assets/default-og-image.jpg"
          /> */}

{/* <div id="installer" className="installer popper" style={{display:'flex', position:'fixed', top:'60px'}} > */}







{/* <CookieConsent
	debug={true}
	location="none"
	style={{ display:'flex', flexDirection:'column', color:'inherit',alignItems:'inherit',  textAlign:'center', justifyContent:'center', margin:'0 auto', top:'0', maxWidth:'62vw', position:'', border:'0px solid red',
  overflow:'hidden',
  background:'transparent',
  borderRadius:'12px',
  padding:'0',
  margin:'0',
  height:'auto',
  filter:' drop-shadow(0px 0px 10px rgba(0,0,0,.9))',
}}
    buttonText="HIDE THIS"
	buttonStyle={{ background: "transparent", textDecoration:'underline', textAlign:'center', fontSize: "16px", position:'relative', bottom:'20px',  right:'0', display:'flex', flexDirection:'column', justifyContent:'center', color:'inherit', border:'0px solid yellow', margin:'0 auto', color:'#fff', fontWeight:'normal', background:'#111', borderRadius:'12px', padding:'4px 50px', border:'1px solid #666'}}
    expires={1}
    cookieName="yoursite.com-install-discount-cookie"
>





<div className="container" style={{padding:'2rem 0', border:'0px solid #555', borderRadius:'8px', color:'#fff', textAlign:'center', position:'relative', textShadow:'2px 2px 0 #000', overflow:'hidden', borderRadius:'12px'}}>



	
	<p style={{textAlign:'center', fontSize:'clamp(1.6rem, -0.875rem + 7.333vw, 2.5rem)', padding:'0', margin:'0 0 10px 0', overflowWrap:'break-word'}}>Integrated PopUp Windows <br /> <strong></strong></p>


    
    <p style={{fontSize:'90%', }}>
      <strong>(an industry first - we invented em!)</strong>
    </p>

 
  <div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'1px solid #333', borderRadius:'12px', backdropFilter:'blur(14px)', background:'rgba(0,0,0,0.50)',}}>Some ideas:

  <div style={{textAlign:'left', display:'flex', padding:'.5rem 0', justifyContent:'center',}}>
  1) You could have a sales promotion here
</div>

 <div style={{textAlign:'left', display:'flex', padding:'.5rem 0', justifyContent:'center',}}>
2) You could have info about your current location
 </div>

 <div style={{textAlign:'left', display:'flex', padding:'.5rem 0', justifyContent:'center',}}>
3) You could have ads here (hey, it's up to you!)
 </div>

 
    
  <span style={{fontSize:'100%'}}>The hide link below sets a cookie and keeps this from displaying again for however long you set it.</span>
 
 </div>


    <br />
    </div>
    
</CookieConsent> */}


</div>



</CustomBox>
</>
)

export default InstallDiscount