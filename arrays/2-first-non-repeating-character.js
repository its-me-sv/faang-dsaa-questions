// My Solution
const firstNotRepeatingCharacter = string => {
    let frequency = new Array(26).fill(0);
    let visited = new Array(26).fill(false);
    let distinct = "";
    for (let character of string) {
        let index = character.charCodeAt(0) - 97;
        if (visited[index] === false)
            distinct += character;
        visited[index] = true;
        frequency[index] += 1;
    }
    for (let character of distinct) {
        let index = character.charCodeAt(0) - 97;
        if (frequency[index] === 1)
            return character;
    }
    return "_";
};

// Most Voted Solution (Python)
/*
def firstNotRepeatingCharacter(s):
    for c in s:
        if s.index(c) == s.rindex(c):
            return c
    return '_'
*/