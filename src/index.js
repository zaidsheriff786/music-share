import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import App from "./App"
import { CssBaseline } from "@material-ui/core"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>
)
