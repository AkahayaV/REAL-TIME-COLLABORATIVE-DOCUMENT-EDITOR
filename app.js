import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const res = await axios.get('http://localhost:5000/api/messages');
        setMessages(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text) return;
        await axios.post('http://localhost:5000/api/messages', { text });
        setText('');
        fetchMessages();
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>MERN Hello World</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter a message"
                />
                <button type="submit">Send</button>
            </form>
            <ul>
                {messages.map((msg) => (
                    <li key={msg._id}>{msg.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
