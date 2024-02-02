const botaoEnviar = document.getElementById('enviar');
const caixaDeTexto = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaDeTexto.value !== "") {
        socket.emit('nova mensagem', caixaDeTexto.value); //criação de novo evento
        caixaDeTexto.value = "";
    }
});

socket.addEventListener('nova mensagem', (mensagem) => {
    const elementoMensagem = document.createElement('li'); //cria elemento <li>
    elementoMensagem.textContent = mensagem; // coloca a mensagem no <li>
    elementoMensagem.classList.add('mensagem'); // adiciona a classe css 
    chat.appendChild(elementoMensagem); // adiciona o <li> a um elemento, neste caso uma <div>
});