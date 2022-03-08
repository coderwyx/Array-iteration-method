let myArray = [1, 2, 10, 17, 80]
console.log(myArray)
myArray.type = '数组'
Array.prototype.name = 'wyx'
// for in 可以遍历数组 但是会存在以下问题
// 使用for-in会遍历数组所有的可枚举属性 包括原型 通常需要配合hasOwnProperty()方法判断某个属性是否该对象的实例属性，来将原型对象从循环中剔除

// for in 遍历数组时获取的是数组的下标index
for(let index in myArray){
    console.log(index)
}

for(let index in myArray){
    // 遍历数组的自身属性
    if (myArray.hasOwnProperty(index)) {
        console.log(index)
    }
}

let obj = {
    a:1,
    b:2,
    c:3
}

// for in遍历对象时获取的是对象的key
for(let key in obj){
    console.log(key)
}

