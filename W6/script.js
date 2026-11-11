"use strict";
const button = document.getElementById("generate-button");
const sentenceDisplay = document.getElementById("random-sentence");
const adjectivesInput = document.getElementById("adjectives");
const nounsInput = document.getElementById("nouns");
const verbsInput = document.getElementById("verbs");
const adverbsInput = document.getElementById("adverbs");
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generateRandomSentence() {
    const adjectives = adjectivesInput.value.split(",").map(adj => adj.trim()).filter(adj => adj.length > 0);
    const nouns = nounsInput.value.split(",").map(noun => noun.trim()).filter(noun => noun.length > 0);
    const verbs = verbsInput.value.split(",").map(verb => verb.trim()).filter(verb => verb.length > 0);
    const adverbs = adverbsInput.value.split(",").map(adverb => adverb.trim()).filter(adverb => adverb.length > 0);
    if (adjectives.length === 0 || nouns.length === 0 || verbs.length === 0 || adverbs.length === 0) {
        sentenceDisplay.textContent = "Please enter at least one adjective, noun, verb, and adverb.";
        return;
    }
    sentenceDisplay.textContent = `The ${getRandomElement(adjectives)} ${getRandomElement(nouns)} ${getRandomElement(verbs)} ${getRandomElement(adverbs)}.`;
}
button.addEventListener("click", generateRandomSentence);
