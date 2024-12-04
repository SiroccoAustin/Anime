module.exports = function override(config) {
    if (config.devServer) {
      config.devServer.allowedHosts = 'all'; // or ['localhost'] for specific hosts
    }
    return config;
  };
  