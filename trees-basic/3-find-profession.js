// My Solution
const findProfession = (level, pos) => {
    let binPos = (pos - 1).toString(2).split('').filter(d => d == 1).length;
    return binPos % 2 ? "Doctor" : "Engineer";
};

// Most Voted Solution (Python)
```
def findProfession(level, pos):
    """
    Level 1: E
    Level 2: ED
    Level 3: EDDE
    Level 4: EDDEDEED
    Level 5: EDDEDEEDDEEDEDDE

    Level input is not necessary because first elements are the same
    The result is based on the count of 1's in binary representation of position-1
    If position is even, then Engineer; Else Doctor
    """
    bits  = bin(pos-1).count('1')
    if bits%2 == 0:
        return "Engineer"
    else:
        return "Doctor"
```