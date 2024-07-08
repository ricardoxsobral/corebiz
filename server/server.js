const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Importando o cors
const app = express();
const PORT = 3002;

app.use(cors()); // Usando o middleware cors
app.use(express.json());

app.post('/subscribe', (req, res) => {
  const newSubscriber = req.body;

  if (!newSubscriber.name || !newSubscriber.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const filePath = path.join(__dirname, 'subscribers.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading subscribers.json:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    let subscribers = [];
    if (data) {
      subscribers = JSON.parse(data);
    }

    subscribers.push(newSubscriber);
    fs.writeFile(filePath, JSON.stringify(subscribers, null, 2), (err) => {
      if (err) {
        console.error('Error writing to subscribers.json:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      res.status(200).json({ message: 'Subscriber added successfully' });
    });
  });
});

app.get('/subscribers', (req, res) => {
  const filePath = path.join(__dirname, 'subscribers.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading subscribers.json:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    let subscribers = [];
    if (data) {
      subscribers = JSON.parse(data);
    }

    res.status(200).json(subscribers);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
