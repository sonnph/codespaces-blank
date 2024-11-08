// Import thư viện Express
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router1 = express.Router();
const router2 = express.Router();

// Định nghĩa 1 route GET cơ bản
app.get('/', (req, res) => {
    res.send('Xin chào từ server Node.js!');
});

router1.get('/router1', (req, res) => {
    res.send('router 1 user');
});

router2.get('/router2', (req, res) => {
    res.send('router 2 user');
});

app.use('/api/', router1);
app.use('/api/', router2);

app.use('/static', express.static(path.join(__dirname, 'view')));

//Lắng nghe kết nối tại port
app.listen(port, () => {
    console.log(`Server đang hoạt động tại http://localhost:${port}`);
})