const { app, BrowserWindow} = require('electron');

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    menu: false,
    icon: "./favicon.ico",
    webPreferences: {
      nodeIntegration: true, // This is needed for some OpenAI Chat functionalities
      contextIsolation: false, // This is needed for some OpenAI Chat functionalities
      enableRemoteModule: true // This is needed for some OpenAI Chat functionalities
    }
  })

  win.loadURL('https://chat.openai.com')
  win.setAutoHideMenuBar(true);

  win.on('closed', () => {
    win = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.activate = function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
}

