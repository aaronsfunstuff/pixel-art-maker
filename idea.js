const ideas = [
    "A retro spaceship flying through space.",
    "A pixelated dragon guarding a treasure chest.",
    "A small cozy house nestled in a pixelated forest.",
    "A pixel art character wielding a sword and shield.",
    "A vintage arcade machine with colorful buttons.",
    "A magical sprite dancing in a pixelated forest.",
    "A pixel art cat sitting on a window sill, watching the world outside.",
    "A pixel art coffee cup with swirling steam rising from it.",
    "A retro-style 8-bit cityscape with skyscrapers and neon lights.",
    "A pixelated knight in shining armor ready for adventure."
];

// to get a random idea
function generateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    document.getElementById('idea').innerText = ideas[randomIndex];
}

//  save the current idea
function saveIdea() {
    const idea = document.getElementById('idea').innerText;
    const savedIdeasList = document.getElementById('saved-ideas-list');

    if (idea !== 'Click the button to get a pixel art idea!') {
        // Create a new list item for the saved idea
        const listItem = document.createElement('li');
        listItem.textContent = idea;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            savedIdeasList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        savedIdeasList.appendChild(listItem);

        alert('Idea saved: ' + idea);
    } else {
        alert('No idea to save!');
    }
}

// to share the current idea
function shareIdea() {
    const idea = document.getElementById('idea').innerText;
    if (idea !== 'Click the button to get a pixel art idea!') {
        alert('Idea shared: ' + idea);
    } else {
        alert('No idea to share!');
    }
}

// page with a random idea
document.addEventListener('DOMContentLoaded', () => {
    generateIdea();
});
