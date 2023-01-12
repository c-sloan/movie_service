import express from "express"
import "dotenv/config.js"

let router = express.Router()
const API_KEY = process.env.API_KEY
const AUTH_TOKEN = process.env.AUTH_TOKEN

router.post("/", (req, res) => {
  return res.send("Received a POST HTTP method")
})

router.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method")
})

router.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method")
})

export default router
