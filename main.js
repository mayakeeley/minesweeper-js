const emptyGrid = document.getElementById('grid');

const rows = 10;
const columns = 15;
const mines = 40;

const createMines = (mines, columns, rows) => {
    const grid = new Array(rows).fill().map(row => {
        return new Array(columns).fill(0);
    });
    const fields = columns * rows;
    const numbers = Array(fields).fill().map((field, index) => index);
    numbers.sort(() => (Math.random() - 0.5));
    const rawMines = numbers.slice(0, mines);
    rawMines.forEach(number => {
        const x = Math.floor(number / columns);
        const y = number % columns;
        grid[x][y] = 'x';

        for( let i = x - 1; i <= x + 1; i++) {
            for (let j = y - 1; j <= y + 1; j++) {
                // if co-ordinates are within bounds of grid
                if (i >=0 && i < rows && j >=0 && j < columns) {
                    // if co-ordinates are either side to side or up and down from mine and co-ordinates do not contain a mine
                        if (grid[i][j] !== 'x') {
                            grid[i][j] = grid[i][j] + 1;
                        }
                }
            }
        }
    })
    return grid;
}
const minefield = createMines(mines, columns, rows);
console.log(minefield);