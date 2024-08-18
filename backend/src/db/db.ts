import postgres from 'postgres'

const db = postgres({
    host: Bun.env.DB_HOST || 'localhost',            // Postgres ip address[s] or domain name[s]
    port: Number(Bun.env.DB_PORT) || 5432,          // Postgres server port[s]
    database: Bun.env.DB_NAME || 'postgres',        // Name of database to connect to
    username: Bun.env.DB_USER || 'postgres',        // Username of database user
    password: Bun.env.DB_PASSWORD,            // Password of database user
});



export default db