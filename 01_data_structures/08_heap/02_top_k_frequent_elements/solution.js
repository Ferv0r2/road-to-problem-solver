// 문제 링크: https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * 접근법
 *
 * - 각 숫자의 빈도를 계산한다.
 * - 숫자와 그 빈도를 키-값으로 저장한다.
 * - 빈도를 기준으로 정렬하여 상위 k개의 숫자를 반환한다.
 *
 * 테스트 1 〉통과 (40ms, 56.19MB)
 * 테스트 2 〉통과 (41ms, 55.74MB)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function solution(nums, k) {
  const freqMap = new Map()

  // 입력 배열을 순회하며 각 숫자의 빈도를 계산
  nums.forEach((num) => {
    // Map에 num이 존재하면 기존 값 + 1, 아니면 1로 초기화
    freqMap.set(num, freqMap.get(num) + 1 || 1)
  })

  // 힙(리스트 형태) 초기화
  const heap = []
  const pushToHeap = (item) => {
    heap.push(item)
    heap.sort((a, b) => a.value - b.value) // Min-Heap 유지
    if (heap.length > k) heap.shift() // k개 초과 시 가장 작은 값 제거
  }

  // 빈도를 기반으로 Min-Heap 유지
  freqMap.forEach((value, key) => {
    pushToHeap({ key, value })
  })

  // 힙을 빈도를 기준으로 내림차순 정렬
  const compare = (a, b) => a.value - b.value
  heap.sort((a, b) => compare(b, a))

  // 상위 k개의 요소를 추출하여 key(숫자)만 반환
  return heap.slice(0, k).map((item) => item.key)
}

module.exports = { solution }
