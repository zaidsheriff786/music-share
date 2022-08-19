import {
	Avatar,
	IconButton,
	Typography,
	makeStyles,
	useMediaQuery,
} from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import React from "react"

const useStyles = makeStyles((theme) => ({
	avatar: {
		height: 44,
		width: 44,
	},
	text: {
		textOverflow: "ellipsis",
		overflow: "hidden",
	},
	container: {
		display: "grid",
		gridAutoFlow: "column",
		gridTemplateColumns: "50px auto 50px",
		gridGap: 12,
		alignItems: "center",
		marginTop: 10,
	},
	songInfoContainer: {
		overflow: "hidden",
		whiteSpace: "nowrap",
	},
}))
function QueuedSongList(props) {
	const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"), {
		noSsr: true,
	})
	const song = {
		title: "Moon",
		artist: "Loon",
		thumbnail:
			"https://i.ytimg.com/vi/6oAdJjzXQS8/hq720_live.jpg?sqp=CPT2tZUG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDETni1f81KRVWD628MOrtMhpmYbQ",
	}
	return (
		greaterThanMd && (
			<div style={{ margin: "10px 0px" }}>
				<Typography color="textSecondary" variant="button">
					Queue(5)
				</Typography>
				{Array.from({ length: 5 }, () => song).map((song, index) => (
					<QueuedSong key={index} song={song} />
				))}
			</div>
		)
	)
}

function QueuedSong({ song }) {
	const classes = useStyles()
	const { title, artist, thumbnail } = song
	return (
		<div className={classes.container}>
			<Avatar className={classes.avatar} src={thumbnail} alt="song thumbnail" />
			<div className={classes.songInfoContainer}>
				<Typography className={classes.text} variant="subtitle2">
					{title}
				</Typography>
				<Typography
					className={classes.text}
					variant="body2"
					color="textSecondary"
				>
					{artist}
				</Typography>
			</div>
			<IconButton>
				<Delete color="error" />
			</IconButton>
		</div>
	)
}

export default QueuedSongList
