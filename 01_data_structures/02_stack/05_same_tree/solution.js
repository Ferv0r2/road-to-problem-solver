// 문제 링크: https://leetcode.com/problems/same-tree/description/

/**
 * Solution
 *
 * 접근법
 * 1. p와 q가 모두 null이면 같은 트리이므로 true를 반환한다.
 * 2. 둘 중 하나만 null이면 다른 트리이므로 false를 반환한다.
 * 2. p와 q의 값이 같지 않다면 다른 트리이므로 false를 반환한다.
 * 3. p와 q의 left와 right를 재귀적으로 비교하여 모든 노드를 확인한다.
 *
 * 테스트 1 〉 통과 (60ms, 49.27MB)
 * 테스트 2 〉 통과 (51ms, 48.66MB)
 */

function solution(p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false
  if (p.val !== q.val) return false

  return solution(p.left, q.left) && solution(p.right, q.right)
}

module.exports = { solution }
