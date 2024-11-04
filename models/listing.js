const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:
            "file:///C:/Users/Lenovo/Downloads/kateryna-hliznitsova-wdCy3x2T0Eg-unsplash.jpg",
        set: (v) => v === "" ? "file:///C:/Users/Lenovo/Downloads/kateryna-hliznitsova-wdCy3x2T0Eg-unsplash.jpg" : v,
    },
    price: Number,
    location: String,
    country:  String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;