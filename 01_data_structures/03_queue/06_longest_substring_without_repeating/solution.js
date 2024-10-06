// 문제 링크: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * 접근법
 * - 문자열을 순회하며 문자를 하나씩 추가한다.
 * - 추가할 때, 중복되는 문자가 있는지 확인한다.
 *   - 중복 문자 O: 중복되는 문자까지의 문자열을 삭제한다.
 *  - 문자열을 추가한다.
 * - 문자열의 길이를 비교하여 최대 길이를 반환한다.
 *
 * Submit 1: (86 ms, 52.80 MB)
 * Submit 2: (83 ms, 52.55 MB)
 */

function solution(s) {
  const queue = []
  let max = 0

  for (let i = 0; i < s.length; i++) {
    const idx = queue.indexOf(s[i])

    if (idx !== -1) {
      // queue에서 해당 문자 이전의 모든 문자와 그 문자를 제거
      // 중복을 없애고 중복된 문자 이후부터 새로운 부분 문자열 재구성
      // ex) 'abcabcbb' -> 'abc' -> 'bca' -> 'cab' -> 'abc' -> 'bca' -> 'cab' -> 'abc' -> 'bc' -> 'c'
      queue.splice(0, idx + 1)
    }

    queue.push(s[i])
    max = Math.max(max, queue.length)
  }

  return max
}

module.exports = { solution }
