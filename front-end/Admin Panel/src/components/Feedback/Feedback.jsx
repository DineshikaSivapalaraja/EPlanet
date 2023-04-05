import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/style.css";

function Feedback() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/api/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Delete this message?')) {
      axios.delete(`/api/messages/${id}`)
        .then(response => {
          setMessages(messages.filter(message => message.id !== id));
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <section className="contacts">
      <h1 className="heading">messages</h1>
      <div className="box-container">
        {messages.length > 0 ? (
          messages.map(message => (
            <div key={message.id} className="box">
              <p>user id : <span>{message.user_id}</span></p>
              <p>name : <span>{message.name}</span></p>
              <p>email : <span>{message.email}</span></p>
              <p>number : <span>{message.number}</span></p>
              <p>message : <span>{message.message}</span></p>
              <button onClick={() => handleDelete(message.id)} className="delete-btn">delete</button>
            </div>
          ))
        ) : (
          <p className="empty">you have no messages</p>
        )}
      </div>
    </section>
  );
}

export default Feedback;
