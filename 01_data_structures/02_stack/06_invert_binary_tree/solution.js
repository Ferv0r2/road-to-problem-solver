// 문제 링크: https://leetcode.com/problems/invert-binary-tree/description/

/**
 * Solution
 *
 * 접근법
 * 1. root가 null이면 null을 반환한다.
 * 2. root의 left와 right를 재귀적으로 호출하여 뒤집은 트리를 만든다.
 * 3. root의 left와 right를 서로 바꾼다.
 * 4. root를 반환한다.
 *
 * 테스트 1 〉 통과 (64ms, 49.58MB)
 * 테스트 2 〉 통과 (55ms, 49.28MB)
 */

function solution(root) {
  if (root === null) return null

  const left = solution(root.left)
  const right = solution(root.right)

  root.left = right
  root.right = left

  return root
}

module.exports = { solution }
