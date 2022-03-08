const arr = [{
    id: 1,
    name: 'coderwxx'
}, {
    id: 2,
    name: 'yydswyx'
}, {
    id: 3,
    name: 'ptrwyx'
}]

// find方法是用于查找数组中是否含有符合条件的元素
// 如果有 则返回第一个满足条件的元素 之后不会再调用执行函数
// 如果没有 则返回 undefined
const person = arr.find((item,index,arr)=>{
      // 第一个参数 遍历的数组的item
      console.log(item)
      // 第二个参数 遍历的数组的index
      console.log(index)
      // 第三个参数 遍历的数组
      console.log(arr)
      
    return item.id === 3
})

console.log(person)
person.name = 'hndrwyx'
// find方法返回的结果内存指向仍然是原数组所指向的内存地址 所有这里是浅拷贝数据 
// 改变了find返回结果的熟悉，原数组中的对应item也会改变
console.log(arr)