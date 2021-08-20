import { makeStyles } from "@material-ui/core";


const styles = makeStyles((theme)=>{
    return{
        custom_link:{
            display:"block",
            '&:hover':{
                color:"green"
            }
        }
    }
})

export default styles