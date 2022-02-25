import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine } from "react-icons/ri"

// import { AiFillRobot } from "react-icons/ai"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import SorryFolks from "../../static/assets/sorry-folks-moose.svg"
const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <br /> <br />
        {/* <AiFillRobot
          style={{
            fontSize: "160px",
            color: "var(--primary-color)",
            margin:'0 auto',
        textAlign:'center'
          }}
        /> */}
    
        <SorryFolks style={{maxWidth:'90vw', maxHeight:'60vh', display:'grid', placeContents:'center'}}/>
        <h1 className="TRON tronText neonText" style={{fontSize:'200%', lineHeight:'23vh',}}>This attraction is <div style={{color:'red', paddingTop:'2rem', fontSize:'150%'}}>closed</div><br /> <div style={{marginTop:'0rem'}}>for maintenance.</div></h1>
        <p className="tronText" style={{fontSize:'150%', padding:'2rem'}}>
          Please check back soon!
        </p>
      </header>

      <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
        <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Back to Homepage
      </Link>
      <Link to="/contact" className="button">
        Report this <RiBugLine className="icon -right" />
      </Link></div>

    </div>
    <div className="spacer33"></div> 
  </Layout>
)

export default NotFound
