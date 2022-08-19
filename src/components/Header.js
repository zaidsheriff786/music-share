import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import React from "react"
import HeadsetTwoToneIcon from "@material-ui/icons/HeadsetTwoTone"

const useStyles = makeStyles((theme) => ({
	title: {
		marginLeft: theme.spacing(1),
	},
}))
function Header(props) {
	const classes = useStyles()
	return (
		<AppBar position="fixed">
			<Toolbar>
				<HeadsetTwoToneIcon />
				<Typography className={classes.title} variant="h6" component="h1">
					Music Share
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header
