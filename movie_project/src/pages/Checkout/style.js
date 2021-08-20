import { makeStyles } from "@material-ui/core";


const style = makeStyles((theme)=>{
    return {
         trapezoid:{
             borderBottom: "50px solid gray",
             borderLeft:"25px solid transparent",
             borderRight:"25px solid transparent",
             height:0,
             width:"80%",
             margin:"0 auto",
             backgroundColor:"rgba(0,0,0,0.1)",
             filter: "drop-shadow(0px 128px 150px #000000)",
             textAlign:"center",
         },
        //  Ghế thường
         ghe:{
             minWidth: "43px !important",
             height: "35px",
             boder:"none",
             borderRadius:"5px",
             cursor:"pointer",
             margin: "10px 6px",
             backgroundColor: "rgb(123,122,122)",
             color:"#fff",
         },
         gheDaDat:{
            backgroundColor: "rgb(232,76,76) !important",
            cursor: "no-drop",      
         },
         gheDangDat:{
             backgroundColor:"rgb(18,176,18) !important",
         },
         gheVip:{
             backgroundColor: "rgb(228,74,8)",
         }
         
    }
})

export default style