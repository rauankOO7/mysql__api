const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection configuration
const dbConfig = {
    host: 'database-2.cqwf42xdocit.us-east-1.rds.amazonaws.com',        // e.g., 'localhost'
    user: 'admin',        // your MySQL username
    password: 'password123456', // your MySQL password
    database: 'password123456'  // your database name
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Define a route to fetch data
app.get('/fetch-data', (req, res) => {
    const query = 'SELECT * FROM your_table'; // Replace 'your_table' with your actual table name
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Failed to fetch data' });
        }
        res.json(results);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
