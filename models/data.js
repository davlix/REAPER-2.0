const mongoose = module.require("mongoose");

const dataScheama = mongoose.Schema({
    id: String,
    Money: Number,
    guildID: String,
    daily: String,
    prefix: String,
    warns: Number,
})

module.exports = mongoose.model("data",dataScheama)
