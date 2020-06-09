// samples/conect_to_server.js
require('dotenv').config();
var IotDevice = require('../sdk/iot_device')

var device = new IotDevice({
    productName: process.env.PRODUCT_NAME,
    deviceName: process.env.DEVICE_NAME,
    secret: process.env.SECRET
})

device.on("online", function () {
    console.log("device is online.")
})

device.on("offline", function () {
    console.log("device is offline.")
})

device.on("error", function (err) {
    console.log(err)
})
device.connect()