import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';

let win: BrowserWindow;

app.on('ready', createWindow);

// only for macOS
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});
  // win = new BrowserWindow({ fullscreen: true});

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../../dist/angularElectron/index.html`),
      protocol: 'file:',
      slashes: true
    })
  );

  win.webContents.openDevTools();

  // macOS
  win.on('close', () => {
    win = null;
  });

}

ipcMain.on('getFiles', (event, arg) => {
  const files = fs.readdirSync(__dirname);
  win.webContents.send('getFilesResponse', files);
});
