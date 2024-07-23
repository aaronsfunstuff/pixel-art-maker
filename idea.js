// Array of pixel art ideas
const ideas = [
    "A retro spaceship flying through space",
    "A pixelated dragon guarding a treasure",
    "A small cozy house in a forest",
    "A pixel art character with a sword",
    "A vintage arcade machine",
    "A magical pixelated forest sprite",
    "A pixel art cat sitting on a window sill",
    "A pixel art coffee cup with steam",
    "A retro-style 8-bit cityscape",
    "A pixelated knight in shining armor"
];

// Function to generate a random pixel art idea
function generateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    document.getElementById('idea').innerText = ideas[randomIndex];
}

// Function to save the generated idea
function saveIdea() {
    const idea = document.getElementById('idea').innerText;
    if (idea !== 'Click the button to get a pixel art idea!') {
        alert('Idea saved: ' + idea);
    } else {
        alert('No idea to save!');
    }
}

// Function to share the generated idea
function shareIdea() {
    const idea = document.getElementById('idea').innerText;
    if (idea !== 'Click the button to get a pixel art idea!') {
        alert('Idea shared: ' + idea);
    } else {
        alert('No idea to share!');
    }
}
