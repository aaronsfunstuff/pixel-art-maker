const ideas = [
    { text: "A retro spaceship flying through space.", category: "space" },
    { text: "A pixelated dragon guarding a treasure chest.", category: "fantasy" },
    { text: "A small cozy house nestled in a pixelated forest.", category: "home" },
    { text: "A pixel art character wielding a sword and shield.", category: "fantasy" },
    { text: "A vintage arcade machine with colorful buttons.", category: "vintage" },
    { text: "A magical sprite dancing in a pixelated forest.", category: "fantasy" },
    { text: "A pixel art cat sitting on a window sill, watching the world outside.", category: "home" },
    { text: "A pixel art coffee cup with swirling steam rising from it.", category: "home" },
    { text: "A retro-style 8-bit cityscape with skyscrapers and neon lights.", category: "vintage" },
    { text: "A pixelated knight in shining armor, ready for battle.", category: "fantasy" }
];

let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];
let ideaHistory = JSON.parse(localStorage.getItem('ideaHistory')) || [];

function generateIdea() {
    const category = document.getElementById('category').value;
    let filteredIdeas = ideas;
    
    if (category !== 'all') {
        filteredIdeas = ideas.filter(idea => idea.category === category);
    }

    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    const selectedIdea = filteredIdeas[randomIndex].text;

    document.getElementById('idea').innerText = selectedIdea;
    updateIdeaHistory(selectedIdea);
}

function saveIdea() {
    const idea = document.getElementById('idea').innerText;
    if (idea !== 'Click the button to get a pixel art idea!') {
        if (!savedIdeas.includes(idea)) {
            savedIdeas.push(idea);
            localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
            displaySavedIdeas();
        } else {
            alert('Idea already saved!');
        }
    } else {
        alert('No idea to save!');
    }
}

function shareIdea() {
    const idea = document.getElementById('idea').innerText;
    if (idea !== 'Click the button to get a pixel art idea!') {
        navigator.clipboard.writeText(idea).then(() => {
            alert('Idea copied to clipboard!');
        });
    } else {
        alert('No idea to share!');
    }
}

function downloadIdea() {
    const idea = document.getElementById('idea').innerText;
    if (idea !== 'Click the button to get a pixel art idea!') {
        const blob = new Blob([idea], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pixel-art-idea.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert('No idea to download!');
    }
}

function updateIdeaHistory(idea) {
    ideaHistory.unshift(idea);
    if (ideaHistory.length > 5) {
        ideaHistory.pop();
    }
    localStorage.setItem('ideaHistory', JSON.stringify(ideaHistory));
    displayIdeaHistory();
}

function displaySavedIdeas() {
    const savedIdeasList = document.getElementById('saved-ideas-list');
    savedIdeasList.innerHTML = '';
    savedIdeas.forEach(idea => {
        const listItem = document.createElement('li');
        listItem.textContent = idea;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            if (confirm('Are you sure you want to remove this idea?')) {
                savedIdeas = savedIdeas.filter(item => item !== idea);
                localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
                displaySavedIdeas();
            }
        };

        listItem.appendChild(removeButton);
        savedIdeasList.appendChild(listItem);
    });
}

function displayIdeaHistory() {
    const ideaHistoryList = document.getElementById('idea-history-list');
    ideaHistoryList.innerHTML = '';
    ideaHistory.forEach(idea => {
        const listItem = document.createElement('li');
        listItem.textContent = idea;
        ideaHistoryList.appendChild(listItem);
    });
}

function filterIdeas() {
    generateIdea();
}

generateIdea();
