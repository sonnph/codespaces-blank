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

app.use('/static', express.static(path.join(__dirname, 'view')));

//Lắng nghe kết nối tại port
app.listen(port, () => {
    console.log(`Server đang hoạt động tại http://localhost:${port}`);
})