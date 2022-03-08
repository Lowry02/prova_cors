import logo from './logo.svg';
import $ from "jquery"
import './App.css';

// url di base
const api_url = "https://finanz-developing.herokuapp.com/"
// token di accesso
const accessToken = "<< METTI IL TUO TOKEN >>"

function App() {

  // funzione che gestisce la richiesta
  function handleRequest() {
    $.ajax({
      type: "GET",
      url: api_url + "arguments",
      contentType: "application/json",
      beforeSend: (request) => request.setRequestHeader('Authorization', "Bearer " + accessToken),
      success: (data) => console.log(data),
      error: (message) => console.log(message)
    })
  }

  return (
    <div className="App">
      <h1>GUARDA LA CONSOLE</h1>
      <button onClick={handleRequest}>Fai richiesta</button>
    </div>
  );
}

export default App;
