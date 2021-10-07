// My Solution
const areFollowingPatterns = (strings, patterns) => {
    let hashTables = {};
    for (let i = 0; i < strings.length; i += 1) {
        if (!hashTables[strings[i]]
            && !Object.values(hashTables).includes(patterns[i]))
            hashTables[strings[i]] = patterns[i];
        if (hashTables[strings[i]] != patterns[i])
            return false;
    }
    return true;
};

// Most Voted Solution (Python)
```
def areFollowingPatterns(strings, patterns):
    return len(set(strings)) == len(set(patterns)) == len(set(zip(strings, patterns)))
```