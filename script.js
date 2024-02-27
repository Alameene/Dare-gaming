let selectedPosition = null;
let askingPlayerIndex = null;
let answeringPlayerIndex = null;
let questionDiv = null; // Define questionDiv globally

document.getElementById("position").addEventListener("change", function(event) {
    selectedPosition = event.target.value;
});

function spinBottle() {
    if (!selectedPosition) {
        alert("Please select your position at the table.");
        return;
    }
    askingPlayerIndex = parseInt(selectedPosition) - 1;
    answeringPlayerIndex = Math.floor(Math.random() * 12);
    const askingPlayer = "Player " + (askingPlayerIndex + 1);
    const answeringPlayer = "Player " + (answeringPlayerIndex + 1);
    questionDiv = document.getElementById("question"); // Assign to questionDiv globally
    questionDiv.textContent = `${answeringPlayer}, ask a truth or dare question:`;
    document.getElementById("questionInput").classList.remove("hidden");
    document.getElementById("answerInput").classList.add("hidden");
    const askButton = document.getElementById("askButton");
    askButton.textContent = "Ask Question";
    askButton.classList.remove("hidden");
}

document.getElementById("spinButton").addEventListener("click", spinBottle);

document.getElementById("askButton").addEventListener("click", function() {
    const askButton = document.getElementById("askButton");
    const questionInput = document.getElementById("questionInput");
    const answerInput = document.getElementById("answerInput");
    if (questionInput.classList.contains("hidden")) {
        questionInput.classList.remove("hidden");
        answerInput.classList.add("hidden");
        askButton.textContent = "Ask Question";
    } else {
        const question = questionInput.value.trim();
        if (!question) {
            alert("Please provide a question.");
            return;
        }
        questionDiv.textContent = `${askingPlayer}: ${question}`;
        questionInput.value = "";
        questionInput.classList.add("hidden");
        answerInput.classList.remove("hidden");
        askButton.textContent = "Submit Answer";
        askButton.addEventListener("click", function() {
            const answer = answerInput.value.trim();
            // JavaScript

// Establish WebSocket connection
const socket = new WebSocket('ws://your-websocket-server-url');

// Event handler for receiving messages from the server
socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    // Update game interface based on received data
};

// Function to send messages to the server
function sendMessage(message) {
    socket.send(JSON.stringify(message));
}

// Function to handle player's turn
function nextTurn() {
    sendMessage({ type: 'next_turn' });
}
            if (!answer) {
                alert("Please provide an answer.");
                return;
            }
            const answeringPlayer = "Player " + (answeringPlayerIndex + 1); // Define answeringPlayer here
            const answerDiv = document.createElement("div");
            answerDiv.textContent = `${answeringPlayer}: ${answer}`;
            answerDiv.classList.add("answer");
            document.getElementById("answersContainer").appendChild(answerDiv);
            askButton.classList.add("hidden");
        });
    }
});
