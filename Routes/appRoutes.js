const express = require("express");
const router = express.Router();
const { nanoid } = require('nanoid');
const createDB = require("../config/db")
const Url = require("../db_models/urlModels")
// const path= require("path");
createDB.sync().then(() => {
    console.log("DB is running!");
})

router.post("/shortURL", async (req, res) => {
    const { longURL } = req.body;
    const shortId = nanoid(4);
    // await createDB.destroyAll; //to reset all data in the database. It is usefull, if we set wrong data/column names/any data in the db by mistake. If we make any mistake in the DB, we reset it using destroyAll(), and generate everything freshly.
    await Url.create({
        longURL: longURL,
        shortID: shortId,
    });
    res.json({ shortId: shortId })
})
router.get("")
module.exports = router;