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

// Comprobar la respuesta
function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toLowerCase().trim();
    const correctAnswer = locations[currentLocation].answer.toLowerCase().trim();

    if (correctAnswer.includes(userInput) || userInput.includes(correctAnswer)) {
        correctCount++;
        document.getElementById("correct-count").textContent = correctCount;
        currentLocation++;
        updateQuestion();
    } else {
        alert("❌ Respuesta incorrecta. Inténtalo de nuevo.");
    }
}

// Manejar errores inesperados
window.onerror = function (message, source, lineno, colno, error) {
    console.error("Error en el juego:", { message, source, lineno, colno, error });
    alert("Ha ocurrido un error inesperado. Por favor, recarga la página.");
};
