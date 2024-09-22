// 문제 링크: https://leetcode.com/problems/container-with-most-water/

/**
 * Solution: Two-pointer로 해결하기
 *
 * 접근법
 * 1. left와 right 포인터를 사용하여 최대 넓이를 구한다.
 * 2. height[left]와 height[right] 중 작은 값을 찾아서 더 낮은 쪽의 포인터를 이동시킨다.
 * 3. 두 포인터가 만나면 최대 넓이를 반환한다.
 *
 * Submit 1: (59 ms, 56.96 MB)
 * Submit 2: (62 ms, 57.74 MB)
 */
function solution(height) {
  let left = 0
  let right = height.length - 1
  let max = 0

  while (left < right) {
    const width = right - left
    const minHeight = Math.min(height[left], height[right])
    const area = width * minHeight

    max = Math.max(max, area)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return max
}

module.exports = { solution }
