module.exports = {
    pwa: {
      name: 'Do It! List App',
      themeColor: '##00D8FF',
      msTileColor: '#ffffff',
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }