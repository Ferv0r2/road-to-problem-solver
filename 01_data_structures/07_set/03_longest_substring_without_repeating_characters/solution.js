// 문제 링크: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * 접근법
 * - 투 포인터를 사용하여 중복되지 않는 문자열의 길이를 구한다.
 * - 중복되는 문자가 있으면 left 포인터를 이동시키며 중복되지 않을 때까지 제거한다.
 * - 중복되지 않는 문자열의 길이를 반환한다.
 *
 * 테스트 1 〉 통과 (7ms, 52.87MB)
 * 테스트 2 〉 통과 (13ms, 55.93MB)
 */

/**
 * @param {string} s
 * @return {number}
 */
function solution(s) {
  const set = new Set()
  let left = 0
  let right = 0
  let longest = 0

  // 오른쪽 포인터가 문자열의 끝에 도달할 때까지 반복한다.
  while (right < s.length) {
    // 현재 문자가 Set에 있다면 왼쪽 포인터를 이동시키며 중복되지 않을 때까지 제거한다.
    if (set.has(s[right])) {
      set.delete(s[left])
      left += 1
      continue
    }

    // 현재 문자를 Set에 추가한다.
    set.add(s[right])
    right += 1

    // 중복되지 않는 문자열의 길이를 갱신한다.
    longest = Math.max(longest, set.size)
    continue
  }

  // 중복되지 않는 문자열의 길이를 반환한다.
  return longest
}

module.exports = { solution }
