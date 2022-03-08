const str = 'coolkit' 

// stringObject.indexOf(searchvalue,fromindex)
// 参数1：searchvalue 需检索的字符串值
// 参数2：fromindex 规定在字符串中开始检索的位置 如省略该参数 则从字符串的首字符开始检索

// indexOf方法会返回str中首次出现searchvale的index
console.log(str.indexOf('ol'))

// 如果str中没有检索到searchvalue 则返回-1
console.log(str.indexOf('a'))

const num = '2022'

// indexOf会做简单的类型转换 把数字转换成字符串'2'然后再执行
console.log(num.indexOf(2))

const arr = ['apple','orange','peach','2016']


console.log(arr.indexOf('orange'))

// indexOf不会在一个数组元素的基础上再执行indexOf匹配
console.log(arr.indexOf('ora'))

// indexOf不会在数组元素匹配时做隐式转换(内部使用的是===做判断)
console.log(arr.indexOf(2016))
