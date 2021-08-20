import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => {
  return {
    title: {
      flexGrow: 1,
    },
    root:{
        position:"fixed",
        width:"100%",
        zIndex:5,
        '& .MuiAppBar-colorPrimary':{
             backgroundColor:"white"
        }
    },
    img:{
        width:"50px",
    }
  };
});

export default styles;
