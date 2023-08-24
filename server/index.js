const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const UserRouter = require("./routes/router")
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(UserRouter);
require("./db/conn")


app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})
