// 문제 링크: https://leetcode.com/problems/valid-anagram/description/

/**
 * 접근법
 * - 해시 테이블을 사용하여 각 문자의 개수를 저장한다.
 * - s 문자열의 각 문자를 해시 테이블에 저장한다.
 * - t 문자열의 각 문자를 해시 테이블에서 찾아서 -1을 한다.
 * - 모든 문자가 0이면 true를 반환한다.
 *
 * 확인사항
 * - s와 t는 무조건 영문 소문자이다.
 *
 * 테스트 1 〉 통과 (12ms, 51.01MB)
 * 테스트 2 〉 통과 (15ms, 51.50MB)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function solution(s, t) {
  // 길이가 다르면 false를 반환한다.
  if (s.length !== t.length) return false

  const map = {}

  // s 문자열의 각 문자를 해시 테이블에 저장한다.
  for (let i = 0; i < s.length; i++) {
    // 문자가 있으면 +1, 없으면 1로 초기화한다.
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
  }

  // t 문자열의 각 문자를 해시 테이블에서 찾아서 -1을 한다.
  for (let i = 0; i < t.length; i++) {
    // 문자가 없으면 false를 반환한다.
    if (!map[t[i]]) return false

    map[t[i]]--
  }

  // 모든 문자가 0이면 true를 반환한다.
  return Object.values(map).every((value) => value === 0)
}

module.exports = { solution }
