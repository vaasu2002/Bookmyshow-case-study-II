const express = require('express');

const { ServerConfig } = require('./config');
const { Logger } = require('./config');
const apiRoutes = require('./routes');

const redisClient = require('./config/redis');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    await redisClient.connect();;
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    Logger.info(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
