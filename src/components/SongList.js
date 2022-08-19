import {
	CardActions,
	CircularProgress,
	IconButton,
	makeStyles,
	Typography,
} from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { PlayArrow, Save } from "@material-ui/icons"
import React from "react"

const useStyles = makeStyles((theme) => ({
	container: {
		margin: theme.spacing(3),
	},
	songInfoContainer: {
		display: "flex",
		alignItems: "center",
	},
	songInfo: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
	},
	thumbnail: {
		objectFit: "cover",
		width: 140,
		height: 140,
	},
}))
function SongList(props) {
	let loading = false

	const song = {
		title: "Moon",
		artist: "Loon",
		thumbnail:
			"https://i.ytimg.com/vi/6oAdJjzXQS8/hq720_live.jpg?sqp=CPT2tZUG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDETni1f81KRVWD628MOrtMhpmYbQ",
	}
	if (loading) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: 50,
				}}
			>
				<CircularProgress />
			</div>
		)
	}
	return (
		<div>
			{Array.from({ length: 10 }, () => song).map((song, index) => (
				<Song key={index} song={song} />
			))}
		</div>
	)
}

function Song({ song }) {
	const { title, artist, thumbnail } = song
	const classes = useStyles()
	return (
		<Card className={classes.container}>
			<div className={classes.songInfoContainer}>
				<CardMedia
					className={classes.thumbnail}
					image={thumbnail}
					title={title}
				/>
				<div className={classes.songInfo}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<Typography variant="body1" color="textSecondary" component="p">
							{artist}
						</Typography>
					</CardContent>
					<CardActions>
						<IconButton size="small" color="primary">
							<PlayArrow />
						</IconButton>
						<IconButton size="small" color="secondary">
							<Save />
						</IconButton>
					</CardActions>
				</div>
			</div>
		</Card>
	)
}

export default SongList
