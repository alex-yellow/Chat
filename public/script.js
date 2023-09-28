const socket = io();
const messages = document.querySelector('.messages');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const nameBlock = document.querySelector('.name');

const username = prompt('Введите имя:');
nameBlock.innerHTML = username;

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(input.value){
        socket.emit('chat message', {message:input.value, name:username});
        input.value = '';
    }
});

socket.on('chat message', function(data){
    const item = document.createElement('li');
    item.innerHTML = `<span>${data.name}</span>: ${data.message}`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});