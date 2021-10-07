// My Solution
const sudoku2 = grid => {
    // Checking Row
    const validRow = row => {
        let visited = [];
        for (let i = 0; i < 9; i += 1) {
            let value = grid[row][i];
            if (visited.includes(value))
                return false;
            if (value !== '.')
                visited.push(value);
        }
        return true;
    };
    // Checking Column
    const validCol = col => {
        let visited = [];
        for (let i = 0; i < 9; i += 1) {
            let value = grid[i][col];
            if (visited.includes(value))
                return false;
            if (value !== '.')
                visited.push(value);
        }
        return true;
    };
    // Checking 3 x 3 Box
    const validBox = (row, col) => {
        let visited = [];
        for (let r = 0; r < 3; r += 1) {
            for (let c = 0; c < 3; c += 1) {
                let value = grid[r + row][c + col];
                if (visited.includes(value))
                    return false;
                if (value !== '.')
                    visited.push(value);
            }
        }
        return true;
    };
    // Checking the given place for rows, columns and box
    const validPlace = (row, col) => {
        return validRow(row)
            && validCol(col)
            && validBox(row - row % 3, col - col % 3);
    };
    // Checking for each and every single element
    for (let i = 0; i < 9; i += 1)
        for (let j = 0; j < 9; j += 1)
            if (!validPlace(i, j))
                return false;
    return true;
};

// Most Voted Solution (JAVA)
/*
boolean sudoku2(char[][] grid) {
    int n = grid.length;

    Set < String > set = new HashSet < String > ();

    for (int row = 0; row < n ; row++) {
        for (int col = 0; col < n; col++) {
            if (grid[row][col] != '.' && !set.add(grid[row][col] + " in row " + row))
                return false;
            if (grid[row][col] != '.' && !set.add(grid[row][col] + " in col " + col))
                return false;
            if (grid[row][col] != '.' && !set.add(grid[row][col] + " in square " + row / 3 + " " + col / 3))
                return false;
        }
    }

    return true;
}
*/