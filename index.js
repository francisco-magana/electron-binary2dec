const { BrowserWindow, app } = require('electron');
const path = require('path');

let mainWindow;

function initWindow(){

    mainWindow = new BrowserWindow({
        height: 360,
        width: 480,
        autoHideMenuBar: true
    });
    
    mainWindow.loadFile(path.join(__dirname, 'views/index.html'));

};

app.on('ready', () => {
    initWindow();
});