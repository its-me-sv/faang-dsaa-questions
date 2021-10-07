// My Solution
const rotateImage = image => {
    const rows = image.length;
    const cols = image[0].length;

    // Transposing array
    for (let i = 0; i < rows; i += 1)
        for (let j = i + 1; j < cols; j += 1)
            [image[i][j], image[j][i]] = [image[j][i], image[i][j]];

    // Reversing each row
    for (let i = 0; i < rows; i += 1)
        for (let j = 0; j < Math.floor(cols / 2); j += 1)
            [image[i][j], image[i][cols - 1 - j]] = [image[i][cols - 1 - j], image[i][j]];

    return image;
};

// Most Voted Solution (JavaScript)
// rotateImage = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())