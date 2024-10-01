document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    fetchBotResponse(userInput);
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;

    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function fetchBotResponse(userInput) {
    // Replace with your bot API endpoint
    const apiEndpoint = 'https://dialogflow.googleapis.com/$discovery/rest?version=v3';
    const payload = {
        message: userInput,
    };

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => {
            displayMessage(data.response, 'bot');
        })
        .catch((error) => {
            console.error('Error:', error);
            displayMessage('Sorry, something went wrong.', 'bot');
        });
}
