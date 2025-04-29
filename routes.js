const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET all messages
router.get('/', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

// POST a new message
router.post('/', async (req, res) => {
    const newMessage = new Message({
        text: req.body.text,
    });
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
});

module.exports = router;
