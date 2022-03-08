const arr = [1, 2, 3, 4, 5]
const newArr = arr.filter((item, index, arr) => {

    // 第一个参数 遍历的数组的item
    console.log(item)
    // 第二个参数 遍历的数组的index
    console.log(index)
    // 第三个参数 遍历的数组
    console.log(arr)

    // 把返回值为true的item 添加到新的数组(符合条件的项，组成新数组)
    return item % 2 === 0
})

console.log(newArr)