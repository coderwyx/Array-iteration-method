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

// findIndex方法是用于查找数组中是否含有符合条件的元素
// 如果有 则返回第一个满足条件的元素的下标 之后不会再调用执行函数
// 如果没有 则返回 -1
const index = arr.findIndex((item,index,arr)=>{
      // 第一个参数 遍历的数组的item
      console.log(item)
      // 第二个参数 遍历的数组的index
      console.log(index)
      // 第三个参数 遍历的数组
      console.log(arr)

      return item.id === 2
})

console.log(index)