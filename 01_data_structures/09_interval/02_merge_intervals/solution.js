// 문제 링크: https://leetcode.com/problems/merge-intervals/

/**
 * 접근법
 * - 중복 구간이 있다면 하나로 합치는 문제이다.
 * - 구간을 시작 시간을 기준으로 정렬한다.
 * - 각 구간을 순회하며 이전 구간의 종료 시간과 현재 구간의 시작 시간을 비교한다.
 * - 만약 이전 구간의 종료 시간이 현재 구간의 시작 시간보다 작다면 중복 구간이 없으니 합치지 않는다.
 * - 중복 구간이 있다면 이전 구간의 종료 시간을 현재 구간의 종료 시간으로 갱신한다.
 *
 * 테스트 1 〉통과 (12ms, 60.14MB)
 * 테스트 2 〉통과 (15ms, 59.18MB)
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function solution(intervals) {
  // 시작 시간을 기준으로 정렬한다.
  const sorted = intervals.sort((a, b) => a[0] - b[0])

  // 첫 번째 구간 기본 값으로 추가한다.
  const result = [sorted[0]]

  // 두 번째 구간부터 시작 시간과 종료 시간을 비교한다.
  for (let i = 1; i < sorted.length; i++) {
    const [prevStart, prevEnd] = result[result.length - 1]
    const [currStart, currEnd] = sorted[i]

    // 이전 구간의 끝이 현재 구간의 시작보다 작다면 중복 구간이 없으니 합치지 않는다.
    if (prevEnd < currStart) {
      result.push(sorted[i])
      continue
    }

    // 중복 구간이 있다면 이전 구간의 끝을 현재 구간의 끝으로 갱신한다.
    result[result.length - 1] = [prevStart, Math.max(prevEnd, currEnd)]
  }

  return result
}

module.exports = { solution }
