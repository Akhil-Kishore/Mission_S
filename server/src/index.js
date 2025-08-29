const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/mission_s',
});

app.get('/api', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({ time: result.rows[0].now });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
