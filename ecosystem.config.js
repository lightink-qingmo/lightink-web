module.exports = {
  apps : [{
    name        : "seo-3000",
    script: 'server.js',
    instances  : 4,
    watch       : true,
    exec_mode : 'cluster',
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}