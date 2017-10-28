function bubbleSort (arr: number[], direction: string = 'asc'): number[] {
  let sequenceFlag: boolean = false
  let length: number = arr.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        sequenceFlag = true
      }
    }
    if (!sequenceFlag) {
      return arr
    }
  }
  return arr
}

export default bubbleSort
