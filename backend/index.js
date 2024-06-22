const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

//document routes
const documentRouter = require("./routes/documentRouter");

//user routes
const userRouter = require("./routes/userRouter");

//person routes
const personRouter = require("./routes/personsRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/documents", documentRouter);
app.use("/api/user", userRouter);
app.use("/api/persons", personRouter);

//connect to mongodb

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Database connected & Server is running on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
