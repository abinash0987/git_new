// const arr = [1,2,3,4,5,6]

const arr2 = [1,"hiii",true,{name: "sumit"},[4,5,6,7]]

// const newArr = arr.concat(arr2)
// arr.pop()
// console.log(arr);


// const arr3 = []

// arr3[100] = 5

// console.log(arr3);


const arr4 = [1,2,3,4,5]

const arr5 = [6,7,8,9,[10,11,12]]


const newarr = arr4.concat(...arr5)
console.log(newarr);
// console.log(arr4.includes(3))


// console.log();

// const map1 = new Map();

// map1.set(1,"a")

// console.log(map1);



const a = null

const b = "null"

if (a == b) {
    console.log("equal");
} else{
    console.log("not equal");
}