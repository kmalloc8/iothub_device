// samples/conect_to_server.js
var IotDevice = require('../sdk/iot_device')

var device = new IotDevice({
    productName: "IotApp",
    deviceName: "wBB7Owha2",
    secret: "MRjagMnjkl"
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