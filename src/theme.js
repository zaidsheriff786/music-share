import { createTheme } from "@material-ui/core/styles"
import { teal, purple } from "@material-ui/core/colors"
const theme = createTheme({
	palette: {
		type: "dark",
		primary: {
			main: teal[500],
		},
		secondary: {
			main: purple[500],
		},
	},
})

export default theme
