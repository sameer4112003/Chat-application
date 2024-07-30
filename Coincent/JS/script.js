const chatWindow = document.getElementById('chat-window');
const messageContainer = document.getElementById('message-container');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const emojiButton = document.getElementById('emoji-button');
const audioButton = document.getElementById('audio-button');
const audioInput = document.getElementById('audio-input');

sendButton.addEventListener('click', sendMessage);
emojiButton.addEventListener('click', insertEmoji);
audioButton.addEventListener('click', () => audioInput.click());
audioInput.addEventListener('change', sendAudio);

chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message !== '') {
        appendMessage('user', message);
        chatInput.value = '';
        // Simulate receiving a response
        setTimeout(() => {
            appendMessage('other', 'This is a reply.');
        }, 1000);
    }
}

function insertEmoji() {
    chatInput.value += '😊';
    chatInput.focus();
}

function sendAudio(event) {
    const file = event.target.files[0];
    if (file) {
        const audioURL = URL.createObjectURL(file);
        appendMessage('user', `<audio controls src="${audioURL}"></audio>`);
        // Simulate receiving a response
        setTimeout(() => {
            appendMessage('other', `<audio controls src="${audioURL}"></audio>`);
        }, 1000);
    }
}

function appendMessage(user, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${user}`;
    messageElement.innerHTML = message;
    messageContainer.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
