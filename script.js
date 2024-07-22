document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.pixel-art-grid');
    const clearButton = document.getElementById('clear');
    const saveButton = document.getElementById('save');
    const colorSwatches = document.querySelectorAll('.color-swatch');
    let currentColor = '#000000';

    for (let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        cell.classList.add('pixel-art-grid-cell');
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = currentColor;
        });
        grid.appendChild(cell);
    }

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            colorSwatches.forEach(s => s.classList.remove('selected'));
            swatch.classList.add('selected');
            currentColor = swatch.dataset.color;
        });
    });

    clearButton.addEventListener('click', () => {
        document.querySelectorAll('.pixel-art-grid-cell').forEach(cell => {
            cell.style.backgroundColor = '#fff';
        });
    });

    saveButton.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const cellSize = 20;
        canvas.width = 16 * cellSize;
        canvas.height = 16 * cellSize;

        document.querySelectorAll('.pixel-art-grid-cell').forEach((cell, i) => {
            const x = (i % 16) * cellSize;
            const y = Math.floor(i / 16) * cellSize;
            ctx.fillStyle = cell.style.backgroundColor || '#fff';
            ctx.fillRect(x, y, cellSize, cellSize);
        });

        const link = document.createElement('a');
        link.download = 'pixel-art.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
