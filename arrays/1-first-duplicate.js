// My Solution
const firstDuplicate = arr => {
    const visited = new Array(arr.length + 1).fill(false);
    for (let element of arr) {
        if (visited[element])
            return element;
        visited[element] = true;
    }
    return -1;
};

// Most Voted Solution (JavaScript)
/*
firstDuplicate = a => {
    r = new Set()
    for (e of a)
        if (r.has(e))
            return e
        else
            r.add(e)
    return -1
}
*/
