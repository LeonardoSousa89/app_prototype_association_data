/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
 production: {
    client: 'postgresql',
    connection: {
      database: 'd1l83l3kkmi1l1',
      host:'ec2-52-45-83-163.compute-1.amazonaws.com',
      user:     'gtccawsfnczqsg',
      password: '9cf2dff9af900ef08ea9dfc50566c7bdf4c4f66bca0aaf690f924360202e5509',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
 },
 development: {
    client: 'postgresql',
    connection: {
      database: 'dataauthtest',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
 }
};
