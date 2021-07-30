import { makeStyles } from "@material-ui/core";


const styles = makeStyles((theme) => {
	return {
		sideMenu: {
			display: "flex",
			flexDirection: "column",
			position: "absolute",
			left: "0",
			width: "320px",
			height: "100%",
			backgroundColor: "#F5F5F5"
		}
	}
})
export default styles