import {
	Card,
	CardContent,
	IconButton,
	Slider,
	Typography,
	makeStyles,
} from "@material-ui/core"
import { PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons"
import React from "react"
import QueuedSongList from "./QueuedSongList"
import CardMedia from "@material-ui/core/CardMedia"

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		justifyContent: "space-between",
	},
	details: {
		display: "flex",
		flexDirection: "column",
		padding: "0px 15px",
	},
	content: {
		flex: "1 0 auto",
	},
	thumbnail: {
		width: 150,
	},
	controls: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
	},
	playIcon: {
		width: 38,
		height: 38,
	},
}))
function SongPlayer(props) {
	const classes = useStyles()
	return (
		<React.Fragment>
			<Card variant="outlined" className={classes.container}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography variant="h5" component="h3">
							Title
						</Typography>
						<Typography variant="subtitle1" component="p" color="textSecondary">
							Artist
						</Typography>
					</CardContent>
					<div className={classes.controls}>
						<IconButton>
							<SkipPrevious />
						</IconButton>
						<IconButton>
							<PlayArrow className={classes.playIcon} />
						</IconButton>
						<IconButton>
							<SkipNext />
						</IconButton>
						<Typography variant="subtitle1" component="p" color="textSecondary">
							00:01:30
						</Typography>
					</div>
					<Slider
						className={classes.slider}
						type="range"
						min={0}
						max={1}
						step={0.01}
					/>
				</div>
				<CardMedia
					className={classes.thumbnail}
					image="https://i.ytimg.com/vi/6oAdJjzXQS8/hq720_live.jpg?sqp=CPT2tZUG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDETni1f81KRVWD628MOrtMhpmYbQ"
				/>
			</Card>
			<QueuedSongList />
		</React.Fragment>
	)
}

export default SongPlayer
