
import { Layout } from "../components/layout"

import React from "react";

// import React, { useState, useRef, useEffect } from "react";
// import ReactPlayer from 'react-player/lazy'
// import Controls from "../components/Controls";
// import screenful from "screenfull";
// import Slider from "@material-ui/core/Slider";
// import Tooltip from "@material-ui/core/Tooltip";
// import { makeStyles, withStyles } from "@material-ui/core/styles";



import GoBack from "../components/goBack"









// const useStyles = makeStyles((theme) => ({
//   playerWrapper: {
//     width: "100%",
//     height:'',
//     position: "",
//     top:'0',
//     border:'0px solid yellow',
//     "&:hover": {
//       "& $controlsWrapper": {
//         visibility: "visible",
//       },
//     },
//   },

//   controlsWrapper: {
//     visibility: "hidden",
//     position: "",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "rgba(0,0,0,0.4)",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
//   topControls: {
//     display: "flex",
//     justifyContent: "flex-end",
//     padding: theme.spacing(2),
//   },
//   middleControls: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   bottomWrapper: {
//     display: "flex",
//     flexDirection: "column",

//     // background: "rgba(0,0,0,0.6)",
//     // height: 60,
//     padding: theme.spacing(2),
//   },

//   bottomControls: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     // height:40,
//   },

//   button: {
//     margin: theme.spacing(1),
//   },
//   controlIcons: {
//     color: "#777",

//     fontSize: 50,
//     transform: "scale(0.9)",
//     "&:hover": {
//       color: "#fff",
//       transform: "scale(1)",
//     },
//   },

//   bottomIcons: {
//     color: "#999",
//     "&:hover": {
//       color: "#fff",
//     },
//   },

//   volumeSlider: {
//     width: 100,
//   },
// }));

// const PrettoSlider = withStyles({
//   root: {
//     height: 8,
//   },
//   thumb: {
//     height: 24,
//     width: 24,
//     backgroundColor: "#fff",
//     border: "2px solid currentColor",
//     marginTop: -8,
//     marginLeft: -12,
//     "&:focus, &:hover, &$active": {
//       boxShadow: "inherit",
//     },
//   },
//   active: {},
//   valueLabel: {
//     left: "calc(-50% + 4px)",
//   },
//   track: {
//     height: 8,
//     borderRadius: 4,
//   },
//   rail: {
//     height: 8,
//     borderRadius: 4,
//   },
// })(Slider);

// function ValueLabelComponent(props) {
//   const { children, open, value } = props;

//   return (
//     <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }

// const format = (seconds) => {
//   if (isNaN(seconds)) {
//     return `00:00`;
//   }
//   const date = new Date(seconds * 1000);
//   const hh = date.getUTCHours();
//   const mm = date.getUTCMinutes();
//   const ss = date.getUTCSeconds().toString().padStart(2, "0");
//   if (hh) {
//     return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
//   }
//   return `${mm}:${ss}`;
// };

// let count = 0;













function Terms() {
  // const classes = useStyles();
  // const [showControls, setShowControls] = useState(false);
  // // const [count, setCount] = useState(0);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
  // const [bookmarks, setBookmarks] = useState([]);
  // const [state, setState] = useState({
  //   pip: false,
  //   playing: true,
  //   controls: false,
  //   light: false,

  //   muted: true,
  //   played: 0,
  //   duration: 0,
  //   playbackRate: 1.0,
  //   volume: 1,
  //   loop: false,
  //   seeking: false,
  // });

  // const playerRef = useRef(null);
  // const playerContainerRef = useRef(null);
  // const controlsRef = useRef(null);
  // const canvasRef = useRef(null);
  // const {
  //   playing,
  //   controls,
  //   light,

  //   muted,
  //   loop,
  //   playbackRate,
  //   pip,
  //   played,
  //   seeking,
  //   volume,
  // } = state;

  // const handlePlayPause = () => {
  //   setState({ ...state, playing: !state.playing });
  // };

  // const handleRewind = () => {
  //   playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  // };

  // const handleFastForward = () => {
  //   playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  // };

  // const handleProgress = (changeState) => {
  //   if (count > 3) {
  //     controlsRef.current.style.visibility = "hidden";
  //     count = 0;
  //   }
  //   if (controlsRef.current.style.visibility == "visible") {
  //     count += 1;
  //   }
  //   if (!state.seeking) {
  //     setState({ ...state, ...changeState });
  //   }
  // };

  // const handleSeekChange = (e, newValue) => {
  //   console.log({ newValue });
  //   setState({ ...state, played: parseFloat(newValue / 100) });
  // };

  // const handleSeekMouseDown = (e) => {
  //   setState({ ...state, seeking: true });
  // };

  // const handleSeekMouseUp = (e, newValue) => {
  //   console.log({ value: e.target });
  //   setState({ ...state, seeking: false });
  //   // console.log(sliderRef.current.value)
  //   playerRef.current.seekTo(newValue / 100, "fraction");
  // };

  // const handleDuration = (duration) => {
  //   setState({ ...state, duration });
  // };

  // const handleVolumeSeekDown = (e, newValue) => {
  //   setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
  // };
  // const handleVolumeChange = (e, newValue) => {
  //   // console.log(newValue);
  //   setState({
  //     ...state,
  //     volume: parseFloat(newValue / 100),
  //     muted: newValue === 0 ? true : false,
  //   });
  // };

  // const toggleFullScreen = () => {
  //   screenful.toggle(playerContainerRef.current);
  // };

  // const handleMouseMove = () => {
  //   console.log("mousemove");
  //   controlsRef.current.style.visibility = "visible";
  //   count = 0;
  // };

  // const hanldeMouseLeave = () => {
  //   controlsRef.current.style.visibility = "hidden";
  //   count = 0;
  // };

  // const handleDisplayFormat = () => {
  //   setTimeDisplayFormat(
  //     timeDisplayFormat == "normal" ? "remaining" : "normal"
  //   );
  // };

  // const handlePlaybackRate = (rate) => {
  //   setState({ ...state, playbackRate: rate });
  // };

  // const hanldeMute = () => {
  //   setState({ ...state, muted: !state.muted });
  // };

  // const addBookmark = () => {
  //   const canvas = canvasRef.current;
  //   canvas.width = 160;
  //   canvas.height = 90;
  //   const ctx = canvas.getContext("2d");

  //   ctx.drawImage(
  //     playerRef.current.getInternalPlayer(),
  //     0,
  //     0,
  //     canvas.width,
  //     canvas.height
  //   );
  //   const dataUri = canvas.toDataURL();
  //   canvas.width = 0;
  //   canvas.height = 0;
  //   const bookmarksCopy = [...bookmarks];
  //   bookmarksCopy.push({
  //     time: playerRef.current.getCurrentTime(),
  //     display: format(playerRef.current.getCurrentTime()),
  //     image: dataUri,
  //   });
  //   setBookmarks(bookmarksCopy);
  // };

  // const currentTime =
  //   playerRef && playerRef.current
  //     ? playerRef.current.getCurrentTime()
  //     : "00:00";

  // const duration =
  //   playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  // const elapsedTime =
  //   timeDisplayFormat == "normal"
  //     ? format(currentTime)
  //     : `-${format(duration - currentTime)}`;

  // const totalDuration = format(duration);



  return (
    <>


    
    <Layout className="thanks-page">

{/* <Seo title={`Terms of Use`} /> */}

    
{/* <div className='player-wrapper intro' style={{position:'relative', top:'0', zIndex:'0', height:'', maxHeight:'', overflow:'', filter: 'drop-shadow(0 0 20px #000)' }}> */}







{/* <div style={{display:'', placeContent:'center', width:'100vw', height:'', overflow:'', position:'relative', top:'0', zIndex:'', }}> */}
  


{/* <ReactPlayer
          className='whoopass'
          url='https://youtu.be/lZzai6at_xA'
          width='100%'
          height='100%'
          playing={playing}
          muted={muted}
          loop={true}
          config={{
          youtube: {
            playerVars: {
              showinfo:0,
              autoplay:1,
              controls:0,
              mute:1, 
              start:13,
              end:52,
              loop:1,  
              rel:0,
            }
           },
          }}
        />


<div
          onMouseMove={handleMouseMove}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
          className={classes.playerWrapper}
          style={{zIndex:'',}}
        >
        <Controls
            ref={controlsRef}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            onDuration={handleDuration}
            onRewind={handleRewind}
            onPlayPause={handlePlayPause}
            onFastForward={handleFastForward}
            playing={playing}
            played={played}
            elapsedTime={elapsedTime}
            totalDuration={totalDuration}
            onMute={hanldeMute}
            muted={muted}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekDown={handleVolumeSeekDown}
            onChangeDispayFormat={handleDisplayFormat}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRate}
            onToggleFullScreen={toggleFullScreen}
            volume={volume}
            onBookmark={addBookmark}
          />




        
      </div> */}


     {/* </div> */}


    

{/* </div> */}


<section className="outer section section--gradient" >
      <div className="container" style={{padding: '2rem 10%'}}>
        
      <div className="mobile"><GoBack /></div>

<h1 className="title" style={{fontSize:'50px'}}>Terms of Service</h1>
    

<h3>1. Terms</h3>
By accessing this web site (toddlambert.com), you are agreeing to be bound by these<br />
web site Terms and Conditions of Use, all applicable laws and regulations,<br />
and agree that you are responsible for compliance with any applicable local<br />
laws. If you do not agree with any of these terms, you are prohibited from<br />
using or accessing this site. The materials contained in this web site are<br />
protected by applicable copyright and trade mark law.
<br /><br />
<h3>2. Use License</h3>

Permission is granted to temporarily download one copy of the materials<br />
(information or software) on Todd Lambert’s web site for personal,<br />
non-commercial transitory viewing only. This is the grant of a license,<br />
not a transfer of title, and under this license you may not:
<br /><br />
<ol>
<li>modify or copy the materials;</li>
<li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
<li>attempt to decompile or reverse engineer any software contained on yearofnight.com;</li>
<li>remove any copyright or other proprietary notations from the materials; or</li>
<li>transfer the materials to another person or “mirror” the materials on any other server.</li>
</ol>

<p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Todd Lambert at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>



    </div>

    <GoBack />
    <div className="spacer33"></div> 
    </section>
    
    
    </Layout>

    </>
  );
}

export default Terms;
