import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => {
	return {
		root: {
			backgroundColor: "#fff"
		},
		searchInput: {
			opacity: "0.6",
			padding: `5px ${theme.spacing(1)}px`,
			fontSize: "1rem",
			borderRadius: "10px",
			backgroundColor: '#f2f2f2',
			'& .MuiSvgIcon-root': {
				marginRight: theme.spacing(1)
			}
		}
	}
})

export default styles