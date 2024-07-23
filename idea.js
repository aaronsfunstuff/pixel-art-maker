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
    { text: "A pixelated knight in shining armor, ready for battle.", category: "fantasy" },
    { text: "A pixel art dragon breathing fire in a medieval setting.", category: "fantasy" },
    { text: "A pixel art robot exploring an alien planet.", category: "space" },
    { text: "A pixel art bakery with pastries and cakes displayed in the window.", category: "home" },
    { text: "A retro pixel art video game controller with colorful buttons.", category: "vintage" },
    { text: "A pixel art pirate ship sailing on a pixelated ocean.", category: "fantasy" },
    { text: "A pixel art space station orbiting a distant planet.", category: "space" },
    { text: "A pixel art magical book with glowing runes.", category: "fantasy" },
    { text: "A pixel art cozy fireplace in a quaint cottage.", category: "home" },
    { text: "A pixel art steampunk airship flying through clouds.", category: "vintage" },
    { text: "A pixel art mystical forest with enchanted trees and creatures.", category: "fantasy" },
    { text: "A pixel art underwater scene with colorful fish and coral reefs.", category: "space" },
    { text: "A pixel art wizard casting a spell in a dark cave.", category: "fantasy" },
    { text: "A pixel art futuristic city with flying cars and neon signs.", category: "space" },
    { text: "A pixel art lighthouse on a rocky shore.", category: "home" },
    { text: "A pixel art circus with clowns and acrobats.", category: "fantasy" },
    { text: "A pixel art spaceship landing on an alien planet with strange flora.", category: "space" },
    { text: "A pixel art forest with magical creatures like unicorns and fairies.", category: "fantasy" },
    { text: "A pixel art cozy coffee shop with books and comfy chairs.", category: "home" },
    { text: "A pixel art haunted house with spooky decorations.", category: "fantasy" },
    { text: "A pixel art robot with a cute design working in a lab.", category: "space" },
    { text: "A pixel art enchanted castle with tall towers and a drawbridge.", category: "fantasy" },
    { text: "A pixel art cozy mountain cabin in the snow.", category: "home" },
    { text: "A pixel art futuristic robot pet.", category: "space" },
    { text: "A pixel art medieval blacksmith forging a sword.", category: "fantasy" },
    { text: "A pixel art carnival with a ferris wheel and game booths.", category: "fantasy" },
    { text: "A pixel art underwater city with mermaids and sea creatures.", category: "space" },
    { text: "A pixel art cozy bookstore with a reading nook.", category: "home" },
    { text: "A pixel art dragon flying over a mountain range.", category: "fantasy" },
    { text: "A pixel art steampunk robot with gears and gadgets.", category: "vintage" },
    { text: "A pixel art space battle with spaceships and laser beams.", category: "space" },
    { text: "A pixel art rustic farm with animals and crops.", category: "home" },
    { text: "A pixel art fantasy map with hidden treasures and landmarks.", category: "fantasy" },
    { text: "A pixel art cozy kitchen with baking supplies and ingredients.", category: "home" },
    { text: "A pixel art futuristic space pod landing on an alien moon.", category: "space" },
    { text: "A pixel art magical garden with glowing flowers and creatures.", category: "fantasy" },
    { text: "A pixel art cozy living room with a TV and comfy furniture.", category: "home" },
    { text: "A pixel art enchanted forest with glowing mushrooms.", category: "fantasy" },
    { text: "A pixel art retro arcade with classic game cabinets.", category: "vintage" },
    { text: "A pixel art futuristic robot city with high-tech buildings.", category: "space" },
    { text: "A pixel art magical wand with sparkles and stars.", category: "fantasy" },
    { text: "A pixel art cozy attic with old treasures and memorabilia.", category: "home" },
    { text: "A pixel art dragon flying through a stormy sky.", category: "fantasy" },
    { text: "A pixel art futuristic space station with spacewalkers.", category: "space" },
    { text: "A pixel art retro diner with neon signs and a jukebox.", category: "vintage" },
    { text: "A pixel art fantasy tavern with adventurers and a roaring fire.", category: "fantasy" },
    { text: "A pixel art cozy bedroom with a large bed and plush pillows.", category: "home" },
    { text: "A pixel art medieval castle under a starry night sky.", category: "fantasy" },
    { text: "A pixel art futuristic cyborg with advanced technology.", category: "space" },
    { text: "A pixel art mythical sea creature like a kraken or leviathan.", category: "fantasy" },
    { text: "A pixel art retro robot in a science lab.", category: "vintage" },
    { text: "A pixel art whimsical amusement park with a giant wheel.", category: "fantasy" },
    { text: "A pixel art space rover exploring an alien terrain.", category: "space" },
    { text: "A pixel art enchanted potion shop with bubbling brews.", category: "fantasy" },
    { text: "A pixel art cozy farmstead with a barn and animals.", category: "home" },
    { text: "A pixel art futuristic hoverboard racing through a city.", category: "space" },
    { text: "A pixel art magical treehouse in a fantasy forest.", category: "fantasy" },
    { text: "A pixel art vintage train with steam and passengers.", category: "vintage" },
    { text: "A pixel art cozy reading nook with a window seat.", category: "home" },
    { text: "A pixel art space alien with multiple eyes and colors.", category: "space" },
    { text: "A pixel art medieval village festival with banners and stalls.", category: "fantasy" },
    { text: "A pixel art futuristic jetpack soaring through the sky.", category: "space" },
    { text: "A pixel art vintage typewriter with papers and ink.", category: "vintage" }
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
