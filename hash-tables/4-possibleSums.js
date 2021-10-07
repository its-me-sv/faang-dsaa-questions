// My Solution
const possibleSums = (coins, quantity) => {
    let possibilities = new Set([0]);
    for (let i = 0; i < coins.length; i += 1)
        for (let sum of [...possibilities])
            for (let j = 1; j <= quantity[i]; j += 1)
                possibilities.add(sum + coins[i] * j);
    return possibilities.size - 1;
}

// Most Voted Solution (Python)
```
def possibleSums(coins, quantity):
    possible_sums = {0}
    for c, q in zip(coins, quantity):
        possible_sums = {x + c * i for x in possible_sums for i in range(q + 1)}

    return len(possible_sums) - 1
```