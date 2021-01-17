const { BrowserWindow, app } = require('electron');
const path = require('path');

let mainWindow;

function initWindow(){

    mainWindow = new BrowserWindow({
        height: 480,
        width:360,
    });
    
    mainWindow.loadFile(path.join(__dirname, 'views/index.html'));

};

app.on('ready', () => {
    initWindow();
});