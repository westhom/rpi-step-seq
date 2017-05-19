//
// main.js - Electron entry point
//

const electron = require('electron');
const url = require('url');
const path = require('path');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 480,
        height: 320
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on("closed", function(){
        mainWindow = null;
    });
}

app.on("ready", createWindow);