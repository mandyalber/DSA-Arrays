const Memory = require('./memory')

const memory = new Memory()

class Array {
    constructor() {
        this.length = 0
        this.ptr = memory.allocate(this.length)
    }
    //push 
    push(value) {
        this._resize(this.length + 1)
        memory.set(this.ptr + this.length, value)
        this.length++
    }

    //_resize
    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Out of memory')
        }
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capacity = size
    }
    //get
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('index error')
        }
        return memory.get(this.ptr + index)
    }
    //pop
    pop() {
        if (this.length == 0) {
            throw new Error('index error')
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value
    }
    //insert
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('index error')
        }
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }
        memory.copy(this.ptr + index + 1, this.length - index - 1)
        memory.set(this.ptr + index, value)
        this.length++
    }
    //remove
    remove(index){
        if(index < 0 || index >= this.length){
            throw new Error('index error')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--
    }

}
Array.SIZE_RATIO = 3
module.exports = Array
