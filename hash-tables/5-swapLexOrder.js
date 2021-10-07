function swapLexOrder(str, pairs) {
    var len = pairs.length
    // join all swappable pairs
    for (var i = 0; i < len; i++) {
        var current = pairs[i]
        for (var j = i + 1; j < len; j++) {
            var next = pairs[j],
                nextlen = next.length
            for (var k = 0; k < nextlen; k++) {
                if (current.includes(next[k])) {
                    pairs[i] = current = [...current, ...next];
                    pairs[j] = [];
                    j = i;
                    break;
                }
            }
        }
    }

    str = [...str]
    // walk on swappable lists
    pairs.map(list => {
        list = list.sort((a, b) => a - b)
            .reduce((l, a) => a > b ? [...l, b = a] : l, [], b = 0)
        console.log(list)
        var letters = []
        // get letters from list positions
        list.map(pos => letters = [...letters, str[pos - 1]])
        // sort letters descending order
        letters = letters.sort().reverse()
        // swap str letters with the new order
        list.map((pos, i) => str[pos - 1] = letters[i])
    })
    return str.join``
}