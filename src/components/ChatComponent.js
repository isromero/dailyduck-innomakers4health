import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';


const ChatComponent = ({ onCloseChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef();

  const addMessage = async (message, user) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, user }]);
    setLoading(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: messages.map((msg) => `${msg.user}: ${msg.text}`).join('\n') + `\nUser: ${message}\n`,
          max_tokens: 900,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      console.log('Response from OpenAI API:', response.data);

      const aiMessage = response.data.choices[0].text.trim();
      // Eliminar el prefijo "IA:" si está presente
      const formattedAiMessage = aiMessage.startsWith('Ducky:') ? aiMessage.slice(3) : aiMessage;
      // Eliminar el prefijo "ChatBot:" si está presente
      let formattedMessage = formattedAiMessage.startsWith('ChatBot:') ? formattedAiMessage.slice(8) : formattedAiMessage;

      // Eliminar el prefijo "Bot:" si está presente
      formattedMessage = formattedMessage.startsWith('Bot:') ? formattedMessage.slice(4) : formattedMessage;

      setMessages((prevMessages) => [...prevMessages, { text: formattedMessage, user: 'Ducky' }]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
    } finally {
      setLoading(false);
    }

    // Desplázate hacia abajo cada vez que se agrega un mensaje
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addMessage(input, 'User');
    setInput('');
  };

  useEffect(() => {
    // Lógica para cargar mensajes iniciales, si es necesario
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      zIndex: 9999,
      width: '300px',
      height: '400px',
      borderRadius: '10px',
      padding: '10px',
      background: 'rgba(255, 255, 255, 0.9)', // Fondo blanco con opacidad
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Sombra ligera
      display: 'flex',
      flexDirection: 'column-reverse', // Reversa el orden de los hijos
    }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '10px', backgroundColor: 'transparent' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={loading ? 'Enviando...' : 'Pregunta a Ducky'}
          style={{ flex: '1', padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '12px', color: 'black' }}
          disabled={loading}
        />
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '12px', marginLeft: '5px' }}>Enviar</button>
        <button onClick={onCloseChat} style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '12px', marginLeft: '5px' }}>Cerrar Chat</button>
      </form>
      <div style={{ flex: 1, overflowY: 'auto' }} ref={chatContainerRef}>
        {messages.map((message, index) => {
          const formattedMessage = message.user === 'Ducky' ? message.text : message.text.startsWith('Bot:') ? message.text.slice(4) : message.text;

          return (
            <div
              key={index}
              style={{
                backgroundColor: message.user === 'Ducky' ? '#D8FFD8' : (message.user === 'User' ? '#E6E6FA' : 'transparent'),
                padding: '10px',
                borderRadius: '10px',
                marginBottom: '5px',
                display: 'flex',
                justifyContent: message.user === 'User' ? 'flex-end' : 'flex-start',
                fontSize: '12px',
                color: 'black',
                textAlign: message.user === 'Ducky' ? 'left' : 'right',
              }}
            >
              <strong>{message.user}:</strong> {formattedMessage}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatComponent;