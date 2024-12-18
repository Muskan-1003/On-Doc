const express = require("express");
const cors = require("cors");
const { createServer } = require("http")
const { Server } = require("socket.io")
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const path = require("path");
const notificationRouter = require("./routes/notificationRouter");
const { initializeSocketIO } = require("./utils/socket");
const messagingRouter = require("./routes/messagingRoutes");
const port = process.env.PORT || 5000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: true,
  },
});
app.use(cors());
<<<<<<< Updated upstream
app.get("/",(req,res)=>{
  res.send("Welcome to API")
})
app.use(express.json());
=======
app.use(express.json());//middleware
>>>>>>> Stashed changes
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.use("/api/message",messagingRouter)

app.set("io", io);//it is setting i0 code in express
httpServer.listen(port, () => {
    console.log(`listening on port ${port}`)
});


io.on("connection",(socket)=>{
    console.log('connected',socket.id);
    

})
initializeSocketIO(io)