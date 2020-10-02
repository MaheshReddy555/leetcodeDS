/**
 * initialize your data structure here.

 Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 */



 /**
 * initialize your data structure here.
 */


//Very simple to understand, better than below solution
var MinStack = function() {
    this.output = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(!this.output.length){
        this.output.push(x)
        this.min = [x];
        return
    }
    
    this.output.push(x)
    if(x <= this.min[this.min.length-1]){
        this.min.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.output.pop();
    if(val == this.min[this.min.length-1]){
        this.min.pop()
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.output[this.output.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2



//********************************************************** */

//It is hard to undrstand
var MinStack = function() {
    this.output = [];
    this.original = [];
    this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    console.log("original push",x,this.min)
    this.original.push(x)
    
    if(!this.output.length){
        this.output.push(x)
        this.min = x;
        return
    }
    if(x < this.min){
        let val = 2*(x) - this.min;
        this.output.push(val)
        this.min = x
    }else {
      this.output.push(x)  
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.original.pop()
    let val = this.output.pop();
    console.log("pop", val)
    if(val <= this.min){
        this.min = 2*(this.min) - (val)
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // let val = this.output[this.output.length-1]
    // console.log("top val", val)
    // if(val < this.min){
    //     console.log("originalvalue in pop", (val+ this.min)/2)
    //     return (val + this.min)/2
    // }
    
    return this.original[this.original.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2