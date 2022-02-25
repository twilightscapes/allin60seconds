
import * as React from "react"
import styled from "styled-components"

// import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
import { StaticImage } from "gatsby-plugin-image"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import ReactPlayer from 'react-player/lazy'
// import { ImPlay } from "react-icons/im"
// import LightCycle from "../../static/assets/light-cycle.svg"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
// import SamFlynn from "../../static/assets/sam-flynn.png"
// import CluGuy from "../../static/assets/clu.png"
// import TronGuy from "../../static/assets/tron.png"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.png"
// import KevinFlynn from "../../static/assets/kevin-flynn.png"
// import TronChick from "../../static/assets/tron-chick1.svg"


const CustomBox = styled.div`
.frontbg iframe{
  opacity:.4;
}
`

const Panel1 = () => (
<CustomBox style={{}}>

{/* GRID INTRO */}
<div className="" id="" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflow:'visible'}}>

{/* <div style={{position:'absolute', right:'20vh', top:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div> */}





{/* Panel Video */}
<div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground">
{/* c_V1iD6F1kk */}
{/* nJ38P5elTkg */}

<ReactPlayer
         className='youtubehide frontbg'
         url="https://www.youtube.com/embed/c_V1iD6F1kk"
         width="100%"
         height="100%"
         config={{
           youtube: {
             playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:20, end:120, loop:1  }
           },
         }}
         loop
         playing
         playsinline
            //  playIcon={
            //    <button aria-label="Click To Play" className="clickplay1" style={{position:'relative', zIndex:'5', bottom:'0', right:'', left:'', border:'0px solid red', width:'100vw', height:'100vh', background:'transparent', color:'#fff', fontSize:'18px', display:'block', placeContent:'center', padding:'0' }}>




            //  </button>
         
            // }
            //    light="assets/Front-Loader.svg"
         />
</div>
</div>
</div>
{/* Panel Video */}






{/* Panel Content */}
<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:''}}>
        <div className="" style={{fontWeight:'bold', fontFamily:'Roboto'}}>TRON</div>
      </h1>


 


 <div id="characters" className="characters" style={{position:'relative', zIndex:'0', width:'', height:'', top:'', background:'none', filter:'none', boxShadow:'none', padding:'10vh 0 0 0',}}>
    
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', zIndex:'-1' }}>

    <div id="" className="" style={{position:'relative', display:'flex', justifyContent:'center', border:'0px solid red',}}>
             <a href="https://tron.allin60.com" title="Sam Flynn"  aria-label="Sam Flynn">
    {/* <SamFlynn className="character" style={{height:'100vh', width:'90%', margin:'0 0 0 0',}} /> */}
    <StaticImage className="character"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/sam-flynn.png" />
    </a>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <a href="https://tron.allin60.com" title="Quorra" aria-label="Quorra">
      {/* <QuoraStand className="character" style={{height:'100%', width:'85%', margin:'0 0 0 10%', right:'', zIndex:''}} /> */}
      <StaticImage className="character"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/quora-ass.png" />
      </a>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center',}}>
<a href="https://tron.allin60.com" title="Kevin Flynn" aria-label="Kevin Flynn">
    {/* <KevinFlynn className="character" style={{position:'relative', height:'100%', width:'130%', zIndex:'', margin:'0 0 0 -16%'}} /> */}
    <StaticImage className="character"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/kevin-flynn.png" />
    </a>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
    display:'flex', flexDiection:'column', justifyContent:'center',
    padding:'0', border:'0px solid red',}}>
      <a href="https://tron.allin60.com" title="Tron" aria-label="Tron">
    {/* <TronGuy className="character" style={{height:'100%', width:'100%', margin:'0 0 0 0', transform: 'scaleX(-1)'}} /> */}
    <StaticImage className="character"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/tron.png" />
    </a>
    </div>
    
    <div srl_exclude="true" id="mylink15" className="donation2" style={{position:'relative', transform:'', maxWidth:'', height:'100vh', 
    // background:'rgba(6, 70, 90, 0.6)', 
    padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <a href="https://tron.allin60.com" title="Clu" aria-label="Clu">
    {/* <CluGuy className="character evil" style={{height:'100%', width:'100%', margin:'0 0 0 -20%',}} /> */}
    <StaticImage className="character evil"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
    </a>
    </div>
    
</div>

    </div> 
    

       


</div>

{/* Panel Content */}





{/*  */}
{/* Image Gallery */}

  {/* {data.allFile.edges.map(edge => {
  return <GatsbyImage
  image={edge.node.childImageSharp.gatsbyImageData}
  srl_gallery_image="true"
  alt={edge.node.name}
  key={edge.node.id}
/>
})} */}






</CustomBox>
)
export default Panel1