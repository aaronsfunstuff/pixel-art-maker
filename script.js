document.addEventListener('DOMContentLoaded', () => {
    const pixelArtGrid = document.getElementById('pixel-art-grid');
    const clearButton = document.getElementById('clear');
    const saveButton = document.getElementById('save');
    const eraserButton = document.getElementById('eraser');
    const colorPicker = document.getElementById('color-picker');
    const gridSizeInput = document.getElementById('grid-size');
    const resizeGridButton = document.getElementById('resize-grid');
    const colorSwatches = document.querySelectorAll('.color-swatch');

    let currentColor = colorPicker.value;
    let erasing = false;

    function createGrid(size) {
        pixelArtGrid.innerHTML = '';
        pixelArtGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        pixelArtGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('pixel-art-grid-cell');
            cell.addEventListener('mousedown', fillCell);
            cell.addEventListener('mouseover', (e) => {
                if (e.buttons === 1) fillCell(e);
            });
            pixelArtGrid.appendChild(cell);
        }
    }

    function fillCell(event) {
        const cell = event.target;
        if (erasing) {
            cell.style.backgroundColor = '';
        } else {
            cell.style.backgroundColor = currentColor;
        }
    }

    clearButton.addEventListener('click', () => {
        const cells = pixelArtGrid.querySelectorAll('.pixel-art-grid-cell');
        cells.forEach(cell => cell.style.backgroundColor = '');
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
        if (newSize >= 4 && newSize <= 64) {
            createGrid(newSize);
        } else {
            alert('Grid size must be between 4 and 64.');
        }
    });

    createGrid(parseInt(gridSizeInput.value));
});

