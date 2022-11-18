/**
 * 
 * import "../src/App.css";
   import ReactPlayer from "react-player";

function AppVideo(){
    return(
        <div className="App" style={{width:'100%', height:'100%', position:'absolute'}}>
            <ReactPlayer
            url= {require('../../assets/video/vd1.mp4')}  
            width='100%'
            height='100%'
            controls 
            playing
            loop
            volume={0.8}// lo alto del volumen en una escala de 0 a 1 donde 1 es 100% 
            />      
        </div>
    );
}

export default AppVideo;

*/

import ReactPlayer from "react-player";

export const Ofertas = () => {
  return (
    <div className="mt-3">
      <div>Los videos de Ofertas y/o promociones van en este componente</div>
      <div className="App" style={{width:'100%', height:'100%', position:'absolute'}}>
            <ReactPlayer
            url= {require('../../assets/video/vd1.webm')}  
            width='100%'
            height='100%'
            controls 
            playing
            loop
            volume={0.8}// lo alto del volumen en una escala de 0 a 1 donde 1 es 100% 
            />      
        </div>


    </div>
  );
};

