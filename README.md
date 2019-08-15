# RemoteWOL
Simple webapp for remotly waking devices with WOL.

I made it so that i can wake up my Mediaserver when i am not at home.

# Usage
1. Create a file named `config/devices.json`, containing the MAC-addresses of the devices you want to wake.
2. Run `npm i` or `npm install`
3. Start the app with `node app.js`, root might be required (You could also make a service, just to make it easier to manage the app).
4. Setup port-forwarding to port 1000 on the device you have the webapp.
5. Profit!
Go to the website and press the link that says "Wake all devices", the app will now try to send a "Magic packet" to each of the MAC-addresses you have added to the config-file.
