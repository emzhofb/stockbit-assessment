const config = {
  development: {
    username: "root",
    password: "Ikhda123",
    database: "stockbit",
    host: "127.0.0.1",
    dialect: "mysql",
    port: 5000,
    apiToken: "faf7e5bb",
    apiUrl : "http://www.omdbapi.com/"
  }
};

const env = process.env.APP_ENV || "development";
console.log("Environment =", env);

// Overwrite process.env
const envConfig = config[env];
Object.keys(envConfig).forEach(key => {
  if (!process.env[key]) {
    process.env[key] = envConfig[key];
  }
});
