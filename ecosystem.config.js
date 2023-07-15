module.exports = {
  apps : [{
    name   : "app",
    script : "./server.js"
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '172.31.10.39',
      key: '~/.ssh/Harry-Key-Pair.pem',
      ref: 'origin/main',
      repo: 'git@github.com:harry6drain/MERN-Testing-Backend.git',
      path: '/home/ubuntu/backend',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
