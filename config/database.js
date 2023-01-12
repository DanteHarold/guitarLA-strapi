module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cenlrdpa6gdkdn63ul8g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_pxtm'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'SpS9mzEUuyzzOuHA3RzU7B17MJAhankM'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
