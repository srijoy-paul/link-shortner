const express = require("express");
const app = express();
const router = require("./Routes/appRoutes");
const shortUrlRouter = require("./Routes/shortUrlRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/api/v1", router);
app.use("/shorten", shortUrlRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`App is running at port number ${PORT}`);
})