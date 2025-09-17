import { useState } from 'react';
import './App.css';

function App() {
  const [responseMessage, setResponseMessage] = useState('');

  const handleButtonClick = () => {
    setResponseMessage('Cargando...'); // Set a loading message

    fetch('https://juan-jso.app.n8n.cloud/webhook-test/11d59ab3-f330-4c56-9983-3bc163516e95', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Enviado desde Iniciar Prueba' }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        return response.json();
      })
      .then(data => {
        // La respuesta es un array, accedemos al primer elemento
        if (Array.isArray(data) && data.length > 0 && data[0].output) {
          setResponseMessage(data[0].output);
        } else {
          setResponseMessage("Respuesta inesperada: " + JSON.stringify(data));
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setResponseMessage('Hubo un error al iniciar la prueba.');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prueba Firebase con n8n</h1>
        <button onClick={handleButtonClick}>Iniciar Prueba</button>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </header>
    </div>
  );
}

export default App;
