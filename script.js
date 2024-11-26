// Comprobar la respuesta
function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toLowerCase().trim();
    const correctAnswer = locations[currentLocation].answer.toLowerCase().trim();
    
    // Aceptar respuestas flexibles (incluye la respuesta correcta en cualquier parte)
    if (userInput === correctAnswer || userInput.includes(correctAnswer)) {
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
