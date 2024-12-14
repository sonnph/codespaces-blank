const express = require('express');
const router = express.Router();

// Route cơ bản tại trang chủ
router.get('/', (req, res) => {
    res.send('Xin chào, đây là dự án express cơ bản!');
});

// Route API /api
router.get('/api', (req, res) => {
    res.json({ message: 'Đây là API cơ bản của bạn' })
})

module.exports = router;