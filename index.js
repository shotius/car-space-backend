const app = require('./app') // actual express server 
const http = require('http')
const config = require("./utils/config")
const logger = require('./utils/logger')

const server = http.createServer(app)

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  logger.info(`Server is running on port ${config.PORT}`);
});
