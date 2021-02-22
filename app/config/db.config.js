module.exports = {
  host: 'localhost',
  dialect: 'postgres',
  username: 'postgres', // postgres
  password: 'tutorials123',
  database: 'tutorials',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 20000,
    acquire: 60000,
  },
};
