// Variables globales
let currentLocation = 0;
let correctCount = 0;

// Inicializar el juego
document.addEventListener("DOMContentLoaded", () => {
    updateQuestion();
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
});

// Actualizar la pregunta actual
function updateQuestion() {
    if (currentLocation < locations.length) {
        const current = locations[currentLocation];
        document.getElementById("prompt").textContent = current.question;
        document.getElementById("user-input").value = ""; // Limpiar campo de entrada
    } else {
        // Si ya no hay más preguntas, termina el juego
        document.getElementById("prompt").textContent = "🎉 ¡Felicidades! Has completado el escape room.";
        document.getElementById("input-container").style.display = "none";
    }
}

// Variables del juego
let currentLocation = 0;
let hintsRemaining = 3;
let correctCount = 0;
let timer = 0;

// Pistas y respuestas
const locations = [
    {
        question: "Estás en el Cementerio de los Libros Olvidados. Pista: 'El corazón de la historia está perdido, busca su sombra en la plaza que nunca duerme.'",
        answer: "plaza real",
        hint: "Es una plaza famosa de Barcelona donde se reúnen artistas y turistas."
    },
    {
        question: "Estás en la Plaza Real. Pista: 'En este lugar se escuchan campanas del pasado. Las piedras hablan si sabes escuchar.'",
        answer: "iglesia de santa maria del mar",
        hint: "Es una iglesia icónica conocida como la Catedral del Mar."
    },
    {
        question: "Estás en la Iglesia de Santa María del Mar. Pista: 'Junto a libros y sabios encontrarás una respuesta.'",
        answer: "ateneu barcelonès",
        hint: "Es un lugar donde se reúnen intelectuales y lectores."
    },
    {
        question: "Estás en el Ateneu Barcelonès. Pista: 'Busca un lugar donde los gatos beben vino.'",
        answer: "els quatre gats",
        hint: "Un famoso café artístico frecuentado por Picasso."
    },
    {
        question: "Estás en Els Quatre Gats. Pista: 'Cruza la ciudad y busca la casa de los Sempere.'",
        answer: "librería sempere e hijos",
        hint: "Es una librería emblemática de la novela."
    },
    {
        question: "Estás en la Librería Sempere e Hijos. Pista: 'Sube a la cima donde las sombras caen.'",
        answer: "tibidabo y colegio sant gabriel",
        hint: "Es un parque de atracciones y un colegio en la cima de Barcelona."
    },
    {
        question: "Estás en el Tibidabo. Pista: 'Regresa al lugar donde todo comenzó.'",
        answer: "cementerio de los libros olvidados",
        hint: "Es el lugar donde iniciaste esta aventura."
    }
];

// Actualizar la pregunta
function updateQuestion() {
    const prompt = document.getElementById("prompt");
    prompt.textContent = locations[currentLocation].question;
}

// Comprobar la respuesta
function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toLowerCase().trim();
    if (userInput === locations[currentLocation].answer) {
        correctCount++;
        document.getElementById("correct-count").textContent = correctCount;
        currentLocation++;
        if (currentLocation < locations.length) {
            updateQuestion();
        } else {
            document.getElementById("prompt").textContent = "🎉 ¡Felicidades! Has completado el escape room.";
            document.getElementById("input-container").style.display = "none";
        }
    } else {
        alert("❌ Respuesta incorrecta. Inténtalo de nuevo.");
    }
}

// Pista
function giveHint() {
    if (hintsRemaining > 0) {
        alert(locations[currentLocation].hint);
        hintsRemaining--;
        document.getElementById("hint-button").textContent = `Pista (${hintsRemaining} restantes)`;
    } else {
        alert("⚠️ No te quedan pistas.");
    }
}

// Temporizador
function startTimer() {
    setInterval(() => {
        timer++;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }, 1000);
}

// Inicialización
document.getElementById("submit-button").addEventListener("click", checkAnswer);
document.getElementById("hint-button").addEventListener("click", giveHint);
updateQuestion();
startTimer();
