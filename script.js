document.addEventListener('DOMContentLoaded', () => {
    const pixelArtGrid = document.getElementById('pixel-art-grid');
    const clearButton = document.getElementById('clear');
    const saveButton = document.getElementById('save');
    const eraserButton = document.getElementById('eraser');
    const undoButton = document.getElementById('undo');
    const redoButton = document.getElementById('redo');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const mirrorButton = document.getElementById('mirror');
    const colorPicker = document.getElementById('color-picker');
    const gridSizeInput = document.getElementById('grid-size');
    const resizeGridButton = document.getElementById('resize-grid');
    const colorSwatches = document.querySelectorAll('.color-swatch');

    let currentColor = colorPicker.value;
    let erasing = false;
    let history = [];
    let redoHistory = [];
    let zoomLevel = 1;
    let isMirroring = false;

    function createGrid(size) {
        pixelArtGrid.innerHTML = '';
        pixelArtGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        pixelArtGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('pixel-art-grid-cell');
            cell.dataset.index = i;
            cell.addEventListener('mousedown', fillCell);
            cell.addEventListener('mouseover', (e) => {
                if (e.buttons === 1) fillCell(e);
            });
            pixelArtGrid.appendChild(cell);
        }
    }

    function fillCell(event) {
        const cell = event.target;
        const index = parseInt(cell.dataset.index);
        const previousColor = cell.style.backgroundColor;
        if (erasing) {
            cell.style.backgroundColor = '';
            addToHistory(index, previousColor, '');
        } else {
            cell.style.backgroundColor = currentColor;
            addToHistory(index, previousColor, currentColor);
            if (isMirroring) {
                mirrorFill(index, currentColor);
            }
        }
    }

    function mirrorFill(index, color) {
        const size = Math.sqrt(pixelArtGrid.children.length);
        const row = Math.floor(index / size);
        const col = index % size;
        const mirroredIndex = (size - 1 - row) * size + col;
        const mirroredCell = pixelArtGrid.children[mirroredIndex];
        const previousColor = mirroredCell.style.backgroundColor;
        mirroredCell.style.backgroundColor = color;
        addToHistory(mirroredIndex, previousColor, color);
    }

    function addToHistory(index, oldColor, newColor) {
        history.push({ index, oldColor, newColor });
        redoHistory = []; // Clear redo history
    }

    function undo() {
        if (history.length === 0) return;
        const lastAction = history.pop();
        const cell = pixelArtGrid.children[lastAction.index];
        redoHistory.push({
            index: lastAction.index,
            oldColor: cell.style.backgroundColor,
            newColor: lastAction.oldColor
        });
        cell.style.backgroundColor = lastAction.oldColor;
    }

    function redo() {
        if (redoHistory.length === 0) return;
        const lastRedo = redoHistory.pop();
        const cell = pixelArtGrid.children[lastRedo.index];
        history.push({
            index: lastRedo.index,
            oldColor: cell.style.backgroundColor,
            newColor: lastRedo.newColor
        });
        cell.style.backgroundColor = lastRedo.newColor;
    }

    clearButton.addEventListener('click', () => {
        const cells = pixelArtGrid.querySelectorAll('.pixel-art-grid-cell');
        cells.forEach(cell => cell.style.backgroundColor = '');
        history = [];
        redoHistory = [];
    });

    saveButton.addEventListener('click', () => {
        html2canvas(pixelArtGrid, { backgroundColor: null }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'pixel-art.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    eraserButton.addEventListener('click', () => {
        erasing = !erasing;
        eraserButton.style.backgroundColor = erasing ? '#ff999c' : '#ffb6b9';
    });

    undoButton.addEventListener('click', () => {
        undo();
    });

    redoButton.addEventListener('click', () => {
        redo();
    });

    zoomInButton.addEventListener('click', () => {
        if (zoomLevel < 3) {
            zoomLevel += 0.25;
            pixelArtGrid.style.transform = `scale(${zoomLevel})`;
        }
    });

    zoomOutButton.addEventListener('click', () => {
        if (zoomLevel > 0.5) {
            zoomLevel -= 0.25;
            pixelArtGrid.style.transform = `scale(${zoomLevel})`;
        }
    });

    mirrorButton.addEventListener('click', () => {
        isMirroring = !isMirroring;
        mirrorButton.style.backgroundColor = isMirroring ? '#ff999c' : '#ffb6b9';
    });

    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
        deselectSwatches();
    });

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            currentColor = swatch.dataset.color;
            deselectSwatches();
            swatch.classList.add('selected');
        });
    });

    function deselectSwatches() {
        colorSwatches.forEach(swatch => swatch.classList.remove('selected'));
    }

    resizeGridButton.addEventListener('click', () => {
        const newSize = parseInt(gridSizeInput.value);
        if (newSize >= 4 && newSize <= 128) {
            createGrid(newSize);
        } else {
            alert('Grid size must be between 4 and 128.');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'z') {
            undo();
        } else if (e.ctrlKey && e.key === 'y') {
            redo();
        } else if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveButton.click();
        }
    });

    createGrid(parseInt(gridSizeInput.value));
});


