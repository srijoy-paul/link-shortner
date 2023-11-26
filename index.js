const express = require("express");
const app = express();

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`App is running at port number ${PORT}`);
})