// 문제 링크: https://leetcode.com/problems/non-overlapping-intervals/description/

/**
 * 접근법
 * - 종료 시간을 기준으로 정렬한다.
 * - 이전 종료 시간과 현재 시작 시간을 비교하여 중복 구간이 있는지 확인한다.
 * - 중복 구간이 있다면 count를 증가시킨다.
 * - 중복 구간이 없다면 이전 구간을 현재 구간으로 갱신한다.
 *
 * 테스트 1 〉통과 (81ms, 79.90MB)
 * 테스트 2 〉통과 (69ms, 80.35MB)
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function solution(intervals) {
  intervals.sort((a, b) => a[1] - b[1])

  let count = 0
  // 첫 번째 구간을 기본 값으로 설정한다.
  let prev = intervals[0]

  // 두 번째 구간부터 시작 시간과 종료 시간을 비교한다.
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i]

    // 이전 구간의 끝이 현재 구간의 시작보다 크다면 중복 구간이 있다면 count를 증가시킨다.
    if (prev[1] > curr[0]) {
      count++
      continue
    }

    // 중복 구간이 없다면 이전 구간을 현재 구간으로 갱신한다.
    prev = curr
  }

  return count
}

module.exports = { solution }
