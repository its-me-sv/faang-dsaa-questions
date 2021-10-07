// My Solution
const groupingDishes = dishes => {
    let ingredients = {};
    for (let i = 0; i < dishes.length; i += 1) {
        let dish = dishes[i][0];
        for (let j = 1; j < dishes[i].length; j += 1) {
            let ingredient = dishes[i][j];
            if (!ingredients[ingredient])
                ingredients[ingredient] = {};
            ingredients[dishes[i][j]][dish] = 1;
        }
    }
    let result = [];
    for (let key of [...Object.keys(ingredients)].sort())
        if (Object.keys(ingredients[key]).length > 1)
            result.push([key, ...Object.keys(ingredients[key]).sort()]);
    return result;
};

// Most Voted Solution (Python)
```
def groupingDishes(dishes):
    groups = {}
    for d, *v in dishes:
        for x in v:
            groups.setdefault(x, []).append(d)
    ans = []
    for x in sorted(groups):
        if len(groups[x]) >= 2:
            ans.append([x] + sorted(groups[x]))
    return ans
```