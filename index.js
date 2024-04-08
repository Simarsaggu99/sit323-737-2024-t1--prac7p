const express = require("express");
const app = express();
const port =3000;

const routes = require("./routes");

const logger = require("./logger")

logger.log({
    level: "info",
    message: "server ready to start"
})

app.use(routes)
app.listen(port, () =>{
    console.log("listening to port:" + port)
})
