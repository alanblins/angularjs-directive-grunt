var liveServer = require("live-server");
 
var params = {
    port: 8182, 
    mount: [['/', './']]
};
liveServer.start(params);
