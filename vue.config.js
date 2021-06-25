module.exports = {
    pwa: {
      name: 'Do It!',
      themeColor: '#00D8FF',
      msTileColor: '#ffffff',
      backgroundColor: "#ffffff",
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }