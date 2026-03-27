const path = require("path");

const appDir = process.env.LSDB_APP_DIR || __dirname;
const standaloneDir = path.join(appDir, ".next", "standalone");

module.exports = {
  apps: [
    {
      name: "lsdb-website",
      cwd: standaloneDir,
      script: "server.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
        HOSTNAME: "127.0.0.1",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "3000",
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
