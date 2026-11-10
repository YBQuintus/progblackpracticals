"use strict";
const button = document.getElementById("generate-button");
const adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry"];
function generateRandomSentence() {
    alert("Generating a random sentence...");
}
button.addEventListener("click", generateRandomSentence);
