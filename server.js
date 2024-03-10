
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

//  databases
const database1 = generateRandomRecords(50);
const database2 = generateRandomRecords(50);
const database3 = generateRandomRecords(50);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'mantiseye' && password === 'mantiseye2024') {
    res.redirect('/dashboard');
  } else {
    res.send('Invalid credentials');
  }
});

// Dashboard endpoint
app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/dashboard.html');
});

// Databases endpoints
app.get('/database1', (req, res) => {
  res.json(database1);
});

app.get('/database2', (req, res) => {
  res.json(database2);
});

app.get('/database3', (req, res) => {
  res.json(database3);
});

// Form submission endpoint
app.post('/submit', (req, res) => {
  // Handle form submission here (for full stack developers)
  // Add the submitted record to the selected database

  // Mock response (for frontend developers)
  res.send('Record submitted successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Helper function to generate random records
function generateRandomRecords(count) {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      name: generateRandomString(),
      email: generateRandomString() + '@example.com',
      phone: generateRandomPhoneNumber(),
    });
  }
  return records;
}

function generateRandomString() {
  return Math.random().toString(36).substring(7);
}

function generateRandomPhoneNumber() {
  return Math.floor(Math.random() * 10000000000).toString();
}
