module.exports = {
  apps: [
    {
      name: "myapp",
      script: "./start.js",
      env: {
        HOST: "localhost",
        PORT: 300,
      },
    },
  ],
};
