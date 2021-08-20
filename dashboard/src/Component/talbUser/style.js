import { makeStyles } from "@material-ui/core"


const style = makeStyles((theme)=>{
 return{
     fragment:{
        paddingLeft: "320px",
        width: "100%"
     },
     paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth:500,
        height:600
      },
      pagination: {
         "& > *": {
             marginTop: theme.spacing(3),
             justifyContent: "center",
         },
     },
 }
})

export default style

