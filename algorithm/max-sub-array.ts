export default function maxSubArray (arr: number[]): number[] {
  if (arr.length === 1) return arr
  let length = arr.length
  let temp = [{
    sum: arr[0],
    leftIndex: 0,
    rightIndex: 0
  }]
  let max: number = arr[0]
  let leftIndex: number = 0
  let rightIndex: number = 0

  for (let i = 1; i < length; i++) {
    if (temp[i - 1].sum < 0) { // 如果前项是负数，对后续相加已经是负作用
      temp[i] = { // 直接等于当前项，抛弃前项
        sum: arr[i],
        leftIndex: i,
        rightIndex: i
      }
      if (temp[i].sum > max) {
        max = temp[i].sum
        leftIndex = i
        rightIndex = i
      }
    } else {
      temp[i] = { // 如果前项为正项，则继续加，同时记录left、right、max
        sum: temp[i - 1].sum + arr[i],
        leftIndex: temp[i - 1].leftIndex, // 延续leftIndex
        rightIndex: i // 更新rightIndex
      }
      if (temp[i].sum > max) {
        max = temp[i].sum
        leftIndex = temp[i - 1].leftIndex
        rightIndex = i
      }
    }
  }
  console.log(max, leftIndex, rightIndex)
  return arr.slice(leftIndex, rightIndex + 1)
}

maxSubArray([-1, -2, -3, 4])
maxSubArray([-1, -2, 3, -4, 6, 2])
maxSubArray([-1, 2])
