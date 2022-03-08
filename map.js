const arr = [1, 2, 3, 4, 5]

// map方法同样会遍历数组，但是会返回一个新的数组
// map方法一定要有返回值
const newArr = arr.map((item, index, arr) => {
    // 第一个参数 遍历的数组的item
    console.log(item)
    // 第二个参数 遍历的数组的index
    console.log(index)
    // 第三个参数 遍历的数组
    console.log(arr)
    return item * 2
})

console.log(newArr)