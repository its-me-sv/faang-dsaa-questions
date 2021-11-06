const findSubstrings = (words, parts) => {
    let trie = [{}];
    for (let part of parts) {
        let pos = 0;
        for (let ch of part) {
            let next = trie[pos][ch];
            if (!next) {
                next = trie.push({}) - 1;
                trie[pos][ch] = next;
            }
            pos = next;
        }
        trie[pos].end = part;
    }

    return words.map(
        word => {
            let states = [], y = 0, x = 0;
            for (let i = 0; i < word.length; ++i) {
                let ch = word[i];

                states.push(0);
                states = states.map(
                    state => trie[state][ch]
                ).filter(
                    state => state
                );

                for (let end of states.map(state => trie[state].end))
                    if (end && (!y || y - x < end.length)) {
                        x = i - end.length + 1;
                        y = i + 1;
                    }
            }
            return !y ? word :
                word.slice(0, x) + "[" +
                word.slice(x, y) + "]" +
                word.slice(y);

        }
    );
};