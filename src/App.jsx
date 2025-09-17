import './App.css'

function App() {

  const handleButtonClick = () => {
    fetch('https://juan-jso.app.n8n.cloud/webhook-test/11d59ab3-f330-4c56-9983-3bc163516e95', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Enviado desde Iniciar Prueba' })
    })
    .then(response => {
      if (response.ok) {
        alert('Prueba iniciada con éxito!');
      } else {
        alert('Hubo un error al iniciar la prueba.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Hubo un error al iniciar la prueba.');
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prueba Firebase con n8n</h1>
        <button onClick={handleButtonClick}>Iniciar Prueba</button>
      </header>
    </div>
  )
}

export default App
