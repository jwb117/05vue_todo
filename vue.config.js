module.exports = {
    pwa: {
      name: 'Do It!',
      themeColor: '#00D8FF',
      msTileColor: '#ffffff',
      manifestOptions: {
        background_color: "#ffffff"
      },
      startUrl:".",
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }