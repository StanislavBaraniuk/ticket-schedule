module.exports = {
    API_PORT: process.env.API_PORT || 3000,
    API_HOST: process.env.API_HOST || 'port:' + this.API_PORT,
    PORT: process.env.PORT || 4000,
};