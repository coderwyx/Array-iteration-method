const arr = [1, 2, 3, 4, 5]

const total = arr.reduce((preValue, item, index, arr) => {
    // 第一个参数 上一次的返回值
    console.log(preValue)
    // 第二个参数 遍历的数组的item
    console.log(item)
    // 第三个参数 遍历的数组的index
    console.log(index)
    // 第四个参数 遍历的数组
    console.log(arr)

    return preValue + item
}, initVakue = 0)

console.log(total)