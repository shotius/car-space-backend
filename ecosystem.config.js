module.exports = {
  apps: [
    {
      name: 'car-space',
      script: 'dist/index.js',
      watch: '.',
      cron_restart: '0 0 * * * *',
      instances: 'max',
      exec_mode: 'cluster',
      watch: true,
      env: {
        NODE_ENV: 'development',
        NODE_PATH: './dist',
      },
      env_production: {
        NODE_PATH: './dist',
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
