// const arr = [1, 2, 3, 4, 5]

const arr = [{a:1},{b:2}]

// forEach用于遍历数组 将遍历到的元素传递给回调函数 遍历的数组不能时空的

// forEach没有返回值
arr.forEach((item, index, arr) => {
   
//使用arr[index]会改变原数组
// arr[index] = item * 2

//arr里面的子元素是对象 那么是可以改变对应属性的 
// item.c = 3

    // 第一个参数 遍历的数组的item
    console.log(item)
    // 第二个参数 遍历的数组的index
    console.log(index)
    // 第三个参数 遍历的数组
    console.log(arr)
})