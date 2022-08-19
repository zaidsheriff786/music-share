import React, { useState } from "react"
import {
	Button,
	InputAdornment,
	TextField,
	makeStyles,
} from "@material-ui/core"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import { AddBoxOutlined, Link } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		alignItems: "center",
	},
	urlInput: {
		margin: theme.spacing(1),
	},
	addSongButton: {
		margin: theme.spacing(1),
	},
	dialog: {
		textAlign: "center",
	},
	thumbnail: {
		width: "90%",
	},
}))
function AddSong(props) {
	const classes = useStyles()
	const [dialog, setDialog] = useState(false)

	const handleCloseDialog = () => {
		setDialog(false)
	}
	return (
		<div style={{ marginTop: "16px" }} className={classes.container}>
			<Dialog
				className={classes.dialog}
				open={dialog}
				onClose={handleCloseDialog}
			>
				<DialogTitle>Edit Songs</DialogTitle>
				<DialogContent>
					<img
						src="https://i.ytimg.com/vi/6oAdJjzXQS8/hq720_live.jpg?sqp=CPT2tZUG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDETni1f81KRVWD628MOrtMhpmYbQ"
						alt="img"
						className={classes.thumbnail}
					/>
					<TextField margin="dense" name="title" label="Title" fullWidth />
					<TextField margin="dense" name="artist" label="Artist" fullWidth />
					<TextField
						margin="dense"
						name="thumbnail"
						label="Thumbnail"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleCloseDialog}
						variant="outlined"
						color="secondary"
					>
						Cancel
					</Button>
					<Button variant="contained" color="primary">
						Add Song
					</Button>
				</DialogActions>
			</Dialog>
			<TextField
				className={classes.urlInput}
				placeholder="Add Youtube or Soundcloud url"
				fullWidth
				margin="normal"
				type="url"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Link />
						</InputAdornment>
					),
				}}
			/>
			<Button
				className={classes.addSongButton}
				onClick={() => setDialog(true)}
				variant="contained"
				color="primary"
				endIcon={<AddBoxOutlined />}
			>
				Add
			</Button>
		</div>
	)
}

export default AddSong
