const Array = require('./ArrayClass')

function main() {
    Array.SIZE_RATIO = 3

    let arr = new Array()

    //2. Explore the push() method
    arr.push(3)
    arr.push(5)
    arr.push(15)
    arr.push(19)
    arr.push(45)
    arr.push(10)

    console.log(arr)
    //Array { length: 1, ptr: 0, _capacity: 1 }
    //Array { length: 6, ptr: 15, _capacity: 6 }

    //3. Exploring the pop() method
    arr.pop()
    arr.pop()
    arr.pop()

    console.log(arr)
    //Array { length: 3, ptr: 15, _capacity: 6 }

    //4. Understanding more about how arrays work
    console.log(arr.get(0))//3
    //Empty the array
    for(let i =arr.length -1; i>=0;i--){
    arr.remove(i)
    }
    //and add just 1 item: arr.push("tauhida");
    arr.push('tauhida')
    console.log(arr.get(0))//NaN
}

main()


