
const button: HTMLButtonElement = document.getElementById("generate-button") as HTMLButtonElement;

const adjectives: string[] = ["quick", "lazy", "sleepy", "noisy", "hungry"];

function generateRandomSentence() {
    alert("Generating a random sentence...");
}

button.addEventListener("click", generateRandomSentence);