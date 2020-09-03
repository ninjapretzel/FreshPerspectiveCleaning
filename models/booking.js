const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookingSchema = new Schema({

    selectedDate: { type: String, required: true },
    bedNum: { type: String, required: true },
    bathNum: { type: String, required: true },
    footageNum: { type: String, required: true },
    frequency: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    notes: { type: String, default: "", },
    // estimate: { type: Number },
    jobAssignedTo: { type: String, default: "", }
})

const Booking = mongoose.model("Booking", bookingSchema)

module.exports = Booking