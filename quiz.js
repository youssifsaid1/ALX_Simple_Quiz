function checkAnswer() {
    // 1. Identify the correct answer
    const correctAnswer = "4";

    // 2. Retrieve the user’s selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : "";

    // 3. Compare the user’s answer with the correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        // 4. Provide feedback if correct
        feedback.textContent = "Correct! Well done.";
    } else {
        // 5. Provide feedback if incorrect
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// 6. Add event listener to the “Submit Answer” button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
