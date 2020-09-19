const fs = require('fs');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
    public: 'https://localhost:8080/'
  },
}