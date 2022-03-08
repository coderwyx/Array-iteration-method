const arr = [1, 2, 3, 4, 5]

// every方法用于监测数组中的每一项是否符合条件
// 如果全部符合 则返回值为true
// 如果其中一个item不符合 停止遍历返回false
const result = arr.every((item,index,arr)=>{

     // 第一个参数 遍历的数组的item
     console.log(item)
     // 第二个参数 遍历的数组的index
     console.log(index)
     // 第三个参数 遍历的数组
     console.log(arr)

     return item < 3
    //  return item > 0
})

console.log(result)