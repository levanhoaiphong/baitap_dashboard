import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core'
import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewSharpIcon from '@material-ui/icons/PowerSettingsNewSharp';
import useStyle from './style';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

export default function Header() {
	const classes = useStyle()
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Grid container>
					<Grid item sm  >
						<InputBase
						 placeholder="Search user"
						 className={classes.searchInput}
						 startAdornment={<SearchSharpIcon fonrSize="small"/>}/>
					</Grid>
					<Grid item >
						<IconButton>
							<Badge badgeContent ={4} color="secondary">
								<NotificationsIcon/>
							</Badge>
						</IconButton>
						<IconButton>
							<Badge badgeContent ={3} color="primary">
								<ChatBubbleOutlineIcon/>
							</Badge>
						</IconButton>
						<IconButton>
							<Badge badgeContent ={3} color="primary">
								<PowerSettingsNewSharpIcon/>
							</Badge>
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}
