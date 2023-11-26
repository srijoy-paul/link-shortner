const express = require("express");
const router = express.Router();
const Url = require("../db_models/urlModels");

router.get("/:shortID", async (req, res) => {
    const shortId = req.params.shortID;
    const longUrl = await Url.findOne({
        where: {
            shortID: shortId
        }
    });
    console.log(longUrl.dataValues.longURL);
    res.redirect(longUrl.dataValues.longURL);
})

module.exports = router;