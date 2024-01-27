require("dotenv").config()
const express = require("express");
const cors = require("cors")
const app = express()
const dbConnect = require("./utils/dbConection")
const authRouter = require("./Router/Auth");
const contactRouter = require("./Router/Contact");
const serviceRouter = require("./Router/Service");
const adminRouter = require("./Router/Admin");
const errorMiddleware = require("./middlewares/errorMiddleware");

const corsoptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH",
    Credentials: true
}
app.use(cors(corsoptions));

app.use(express.json());

// Routes
app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)
app.use("/api/data", serviceRouter)

// admin route
app.use("/api/admin", adminRouter)


// Error middleWare
app.use(errorMiddleware);


const port = 8000
dbConnect().then(() => {
    app.listen(port, () => {
        console.log("server is running at port:", port)
    })
})