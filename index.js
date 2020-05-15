const express = require("express")
const heroesRouter = require("./heroes/heroes-router")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.use("/heroes", heroesRouter)
server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

if (!module.parent) {
	server.listen(port, () => {
		console.log(`Running at http://localhost:${port}`)
	})
}

module.exports = server