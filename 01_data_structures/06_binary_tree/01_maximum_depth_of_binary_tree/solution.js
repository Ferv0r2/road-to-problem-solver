// 문제 링크: https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * 접근법
 *
 * - 이진 트리의 최대 깊이를 구하는 문제이다.
 * - 왼쪽 서브트리와 오른쪽 서브트리 중에서 더 깊은 쪽을 구한다.
 * - 현재 노드를 루트로 하는 깊이를 반영하기 위해 +1을 한다.
 * - 재귀적으로 트리의 깊이를 구한다.
 *
 * 테스트 1 〉 통과 (0ms, 51.87MB)
 * 테스트 2 〉 통과 (0ms, 52.35MB)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
function solution(root) {
  if (!root) return 0

  // 각 서브트리 전체 순회
  const leftDepth = solution(root.left)
  const rightDepth = solution(root.right)

  // 더 깊은 값에 +1
  return Math.max(leftDepth, rightDepth) + 1
}

module.exports = { solution }
