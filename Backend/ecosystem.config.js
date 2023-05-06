module.exports = {
  apps : [{
    name: 'app',
    script: 'artisan',
    args: 'serve --host 0.0.0.0 --port 8000',
    autorestart: true,
    watch: false
  }]
};
