let myArray = [1, 2, 10, 17, 80]
myArray.type = '数组'
Array.prototype.name = 'wyx'
// for of 遍历数组时获取的是数组的item,不会遍历数组的属性和原型对象的属性
for(let item of myArray){
    console.log(item)
}

let set = new Set();
set.add("a").add("b").add("c")

let map = new Map();
map.set('a',1).set("b",2).set(111,3).set(true,4)
// for of可以遍历set 与 map
for (let value of set){
    console.log(value)
}

for (let [key,value] of map){
    // key是map的key
    console.log(key)
    // value是map的value
    console.log(value)
}
// for (let value of obj){
//     console.log(value)
// }