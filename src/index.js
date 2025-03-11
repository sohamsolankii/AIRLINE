import express from "express"
import { SeverConfig, Logger } from "./config/index.js" // Import named exports
import apiRoutes from "./routes/index.js"

const app = express()

app.use("/api", apiRoutes)

app.listen(SeverConfig.PORT, () => {
	console.log(
		`Successfully started the server on port: ${SeverConfig.PORT}!!`
	)
	// Logger.info(
	// 	"server started successfully",
	// )
})
