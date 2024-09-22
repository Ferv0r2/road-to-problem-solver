// 문제 링크: https://leetcode.com/problems/move-zeroes/

/**
 * Solution 1: sort 메서드로 해결하기
 *
 * 접근법
 * 1. 0인 값만 뒤로 보내기 위해 sort 메서드를 사용한다.
 * 2. 값이 0이기에 경우 순서를 바꾸는 경우에 1 혹은 -1을 return하고 그 외에는 0을 return한다.
 *
 * 주의사항
 * - sort 메서드는 원본 배열을 변경한다.
 *
 * Submit 1: (82 ms, 54.02 MB)
 * Submit 2: (81 ms, 53.53 MB)
 */
function solution1(nums) {
  return nums.sort((a, b) => {
    if (a === 0) return 1
    if (b === 0) return -1
    return 0
  })
}

/**
 * Solution 2: Two-pointer로 해결하기
 *
 * 접근법
 * 1. left와 right 포인터를 사용하여 0이 아닌 값을 찾아서 순서를 바꾼다.
 * 2. left 포인터는 0이 아닌 값이 나올 때마다 증가하고, right 포인터는 배열의 길이만큼 증가한다.
 * 3. left 포인터가 가리키는 값과 right 포인터가 가리키는 값을 바꾼다.
 *
 * Submit 1: (62 ms, 53.76 MB)
 * Submit 2: (74 ms, 54.25 MB)
 */
function solution2(nums) {
  let left = 0
  let right = 0

  for (right; right < nums.length; right++) {
    if (nums[right] !== 0) {
      const temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
    }
  }
  return nums
}

module.exports = { solution1, solution2 }
