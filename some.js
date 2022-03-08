const arr = [1, 2, 3, 4, 5]

// every方法用于监测数组中是否有符合条件的项
// 如果全部不符合 则返回值为false
// 如果其中一个item符合 停止遍历返回true
const result = arr.some((item,index,arr)=>{

     // 第一个参数 遍历的数组的item
     console.log(item)
     // 第二个参数 遍历的数组的index
     console.log(index)
     // 第三个参数 遍历的数组
     console.log(arr)

    //  return item < 3
     return item === 3
})

console.log(result)