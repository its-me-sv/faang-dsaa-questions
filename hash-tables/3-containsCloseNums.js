// My Solution
const containsCloseNums = (nums, k) => {
    let register = {};
    let val = null;
    for (let i = 0; i < nums.length; i += 1) {
        if (!(nums[i] in register))
            register[nums[i]] = [];
        register[nums[i]].push(i);
        if (register[nums[i]].length > 1) {
            let [lastBefore, last] = register[nums[i]].slice(-2);
            let diff = last - lastBefore;
            val = val === null ? diff : Math.min(val, diff);
        }
    }
    return val === null ? false : val <= k;
};

// Most Voted Solution (Python)
```
def containsCloseNums(nums, k):
    dic = {}
    for i, x in enumerate(nums):
        if x in dic and i - dic[x] <= k:
            return True
        dic[x] = i
    return False
```