import React from "react"
import { Grid, useMediaQuery, Hidden } from "@material-ui/core"
import AddSong from "./components/AddSong"
import Header from "./components/Header"
import SongList from "./components/SongList"
import SongPlayer from "./components/SongPlayer"

function App() {
	console.log("test")
	const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"), {
		noSsr: true,
	})
	const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"), {
		noSsr: true,
	})

	return (
		<React.Fragment>
			<Hidden only="xs">
				<Header />
			</Hidden>
			<Grid container spacing={3} style={{ margin: 0, width: "100%" }}>
				<Grid
					style={{ paddingTop: greaterThanSm ? 80 : 10 }}
					item
					xs={12}
					md={7}
				>
					<AddSong />
					<SongList />
				</Grid>
				<Grid
					style={
						greaterThanMd
							? { position: "fixed", width: "100%", right: 0, top: 70 }
							: { position: "fixed", width: "100%", left: 0, bottom: 0 }
					}
					item
					xs={12}
					md={5}
				>
					<SongPlayer />
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default App
