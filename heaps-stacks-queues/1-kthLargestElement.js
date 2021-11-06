// My solution
const MinHeap = function () {
    this.heap = [];
    this.insert = data => {
        this.heap.push(data);
        let size = this.heap.length - 1;
        for (let i = size; i >= 0 && this.heap[i] < this.heap[Math.floor(i / 2)]; i = Math.floor(i / 2))
            [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
    };
    this.remove = () => {
        let min = this.heap.shift();
        let last = this.heap.pop();
        if (last)
            this.heap.unshift(last);
        let i = 0;
        let size = this.heap.length;
        while (true) {
            let smallest = i;
            let left = (i * 2) + 1;
            let right = (i * 2) + 2;
            if (left < size && this.heap[left] < this.heap[smallest])
                smallest = left;
            if (right < size && this.heap[right] < this.heap[smallest])
                smallest = right;
            if (smallest != i) {
                [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
                i = smallest;
            } else
                break;
        }
        return min;
    };
    this.sort = () => {
        let result = [];
        while (this.heap.length > 0)
            result.push(this.remove());
        return result;
    };
};

const kthLargestElement = (nums, k) => {
    const heap = new MinHeap();
    for (let num of nums)
        heap.insert(num);
    return heap.sort()[nums.length - k];
};

// Most voted solution (JavaScript)
```
//Basic idea:
// - Use a heap to store all values
// - Heap insertion is, on average, O(1)
// - Heap removal is, on average, O(log n)
// - Therefore, the total time is O(n + k log n)

//We can use a min heap if k~n.

var min = false;

function Heap() {
    this.heap = [];
}

//Stopping condition for swapping elements
Heap.prototype.brake = function(a,b) {
    return typeof b == "undefined" ||
       (min ? a < b : a > b);
}

//Insert and, as long as the parent is greater,
// pivot the value with its parent
Heap.prototype.insert = function(value) {
    var vIx = this.heap.push(value)-1;
    for(; vIx; ) {
        var pIx = (vIx+1>>1)-1,
            v = this.heap[vIx],
            p = this.heap[pIx];
        if(this.brake(p,v))
            break;
        this.heap[vIx] = p;
        this.heap[pIx] = v;
        vIx = pIx;
    }
}

//Pop, swap the bottom into the top,
// and pivot it down the tree
Heap.prototype.pop = function() {
    var out = this.heap[0],
        pIx = 0,
        len = this.heap.length;

    if(len == 1)
        return this.heap.pop();

    this.heap[0] = this.heap.pop();
    len--;

    //We have to compare both children
    for(; pIx<len; ) {
        var c2Ix = 2*(pIx+1),
            c1Ix = c2Ix-1,
            c1 = this.heap[c1Ix],
            c2 = this.heap[c2Ix],
            c, cIx,
            p = this.heap[pIx];
        if(this.brake(c1,c2)) {
            c = c1;
            cIx = c1Ix;
        } else {
            c = c2;
            cIx = c2Ix;
        }
        if(this.brake(p,c))
            break;
        this.heap[pIx] = c;
        this.heap[cIx] = p;
        pIx = cIx;
    }

    return out;
}

function kthLargestElement(nums, k) {
    var heap = new Heap(),
        out = 0;

    //Should we use a min or a max heap?
    if(min = k > nums.length/2)
        k = 1+nums.length-k;

    //Insert all values into the heap
    for(var v of nums)
        heap.insert(v);

    //Pop the first k values
    for(; k--; )
        out = heap.pop();

    //Return the last value popped
    return out;
}
```