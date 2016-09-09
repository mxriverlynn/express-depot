var path = require('path');
var fs = require("fs");

function listFolders(folder, cb){
  fs.readdirSync(folder).forEach((appName) => {
    var fullPath = path.join(folder, appName);
    var stat = fs.statSync(fullPath);
    if (stat.isDirectory){
      cb(appName, fullPath);
    }
  });
}

function dispatch(app, mount, appListFolder){
  listFolders(appListFolder, (appName, fullpath) => {
    var subApp = require(fullpath);
    app.use(mount + "/" + appName, subApp);
  });
}

module.exports = { dispatch };
