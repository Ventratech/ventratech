const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/products', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM products_table');
		res.json(result.rows);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
