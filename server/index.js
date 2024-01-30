require("dotenv").config()
const express = require("express");
const cors = require("cors")
const app = express()
const dbConnect = require("./utils/dbConection")
const authRouter = require("./Router/Auth");
const accountRouter = require("./Router/account");
const adminRouter = require("./Router/Admin");
const errorMiddleware = require("./middlewares/errorMiddleware");

const corsoptions = {
    origin: process.env.BASE_URL,
    methods: "GET,POST,PUT,DELETE,PATCH",
    Credentials: true
}
app.use(cors(corsoptions));

app.use(express.json());

// Routes
app.use("/api/auth", authRouter)
app.use("/api/form", accountRouter)

// admin route
app.use("/api/admin", adminRouter)


// Error middleWare
app.use(errorMiddleware);


const port = process.env.PORT || 8000
dbConnect().then(() => {
    app.listen(port, () => {
        console.log("server is running at port:", port)
    })
})