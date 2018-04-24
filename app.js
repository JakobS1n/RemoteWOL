let http = require("http");
let fs = require("fs");
let wol = require("node-wol");

// Get list of devices to be woken...
let devices = JSON.parse(
    fs.readFileSync("config/devices.json", "utf8")
);

// The requestHandler
let requestHandler = (req, res) => {

    switch (req.url) {

        case "/wakeAll":
            var responseText = "<html><body><p>Waking things:</p><hr />";
            for (var i = 0; i < devices.length; i++) {
                responseText += "Waking \"" + devices[i] + '"';
                wol.wake(devices[0], (error) => {
                   if (error) {
                       console.log("WAKE ERROR");
                   }
               });
            }
            res.end(responseText + "<hr /><p>No more devices to wake :)</body></html></p>");
            break;

        case "/":
            res.end("<h1>heim.jakobstendahl.tk WOL</h1><a href=\"wakeAll\">Wake all devices</a>");
            break;


        default:
            res.end("<h1>404 file not found</h1><hr /><p>Please check your URL!</p>");
    }

}

// Start the server
let server = http.createServer(requestHandler);
server.listen(10000, (err) => {
    if (err) {
        return console.log("Couldn't start server...");
    }
    console.log("Server is listening on *:10000");
})
