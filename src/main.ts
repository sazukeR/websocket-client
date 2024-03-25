import { connectToServer } from './socket-client'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <h2>Websocket - Client</h2>
    <input id="jwt-token" placeholder="Json Web Token" />
    <button id="btn-connect">Connect</button>

    <br/>
    <span id="server-status"></span>

    <ul id="clients-ul"></ul>


    <form id="message-form">
      <input type="text" placeholder="message" id="message-input" />
    </form>
    
    <h3>Messagees</h3>
    <ul id="messages-ul"></ul>

  </div>
`

// connectToServer();

const jwToken = document.querySelector<HTMLInputElement>('#jwt-token')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener('click', () => {

  if ( jwToken.value.trim().length <= 0 ) return alert('Enter a valid jwt')

  connectToServer( jwToken.value.trim() );

})