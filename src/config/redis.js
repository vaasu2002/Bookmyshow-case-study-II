const {createClient} = require('redis');
const redisClient = createClient({
    host: 'redis', 
    port: 6379,
});
redisClient.on('error', err => console.log('Redis Client Error', err));
module.exports = redisClient;