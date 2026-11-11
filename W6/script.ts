
const button: HTMLButtonElement = document.getElementById("generate-button") as HTMLButtonElement;
const sentenceDisplay: HTMLParagraphElement = document.getElementById("random-sentence") as HTMLParagraphElement;
const adjectivesInput: HTMLTextAreaElement = document.getElementById("adjectives") as HTMLTextAreaElement;
const nounsInput: HTMLTextAreaElement = document.getElementById("nouns") as HTMLTextAreaElement;
const verbsInput: HTMLTextAreaElement = document.getElementById("verbs") as HTMLTextAreaElement;
const adverbsInput: HTMLTextAreaElement = document.getElementById("adverbs") as HTMLTextAreaElement;

function getRandomElement(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomSentence(): void {
    
    const adjectives: string[] = adjectivesInput.value.split(",").map(adj => adj.trim()).filter(adj => adj.length > 0);
    const nouns: string[] = nounsInput.value.split(",").map(noun => noun.trim()).filter(noun => noun.length > 0);
    const verbs: string[] = verbsInput.value.split(",").map(verb => verb.trim()).filter(verb => verb.length > 0);
    const adverbs: string[] = adverbsInput.value.split(",").map(adverb => adverb.trim()).filter(adverb => adverb.length > 0);

    if (adjectives.length === 0 || nouns.length === 0 || verbs.length === 0 || adverbs.length === 0) {
        sentenceDisplay.textContent = "Please enter at least one adjective, noun, verb, and adverb.";
        return;
    }
    sentenceDisplay.textContent = `The ${getRandomElement(adjectives)} ${getRandomElement(nouns)} ${getRandomElement(verbs)} ${getRandomElement(adverbs)}.`;
}

button.addEventListener("click", generateRandomSentence);