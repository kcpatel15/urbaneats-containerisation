const express = require('express');
const { Client } = require('pg');
const app = express();

app.get('/health', (req, res) => res.status(200).send('OK'));

// This endpoint fulfills the requirement to write to PostgreSQL
app.get('/write', async (req, res) => {
    const client = new Client({
        host: process.env.DB_HOST || 'db',
        user: 'postgres',
        password: process.env.DB_PASSWORD,
        database: 'urbaneats',
    });
    try {
        await client.connect();
        await client.query('CREATE TABLE IF NOT EXISTS test_table (id serial PRIMARY KEY, name VARCHAR (50));');
        await client.query("INSERT INTO test_table (name) VALUES ('test_entry');");
        res.status(200).send('Successfully wrote to PostgreSQL!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    } finally {
        await client.end();
    }
});

app.listen(4000, () => console.log('API listening on port 4000'));