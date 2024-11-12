// 문제 링크: https://leetcode.com/problems/subtree-of-another-tree/description/

/**
 * 접근법
 * - 이진 트리의 서브트리인지 확인하는 문제이다.
 * - 두 트리의 루트 노드부터 비교하며 같은지 확인한다.
 * - 루트 노드가 같다면 좌우 서브트리도 같은지 확인한다.
 *
 * 테스트 1 〉 통과 (12ms, 56.58MB)
 * 테스트 2 〉 통과 (8ms, 54.71MB)
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function solution(root, subRoot) {
  // root가 없으면 서비트리가 없으므로 false
  if (!root) return false

  // 현재 root에서 메인 트리와 서브트리가 같은지 확인
  if (isSameTree(root, subRoot)) return true

  // root의 왼쪽과 오른쪽 서브트리를 재귀적으로 탐색
  return solution(root.left, subRoot) || solution(root.right, subRoot)
}

function isSameTree(root, subRoot) {
  // 두 노드가 모두 null인 경우 (리프 노드까지 동일한 구조) -> true 반환
  if (!root && !subRoot) return true

  // 한 노드만 null인 경우 -> 구조가 다르므로 false 반환
  if (!root || !subRoot) return false

  // 현재 노드 값이 동일하고 좌우 서브트리도 각각 동일한지 검사
  return (
    root.val === subRoot.val &&
    isSameTree(root.left, subRoot.left) &&
    isSameTree(root.right, subRoot.right)
  )
}

module.exports = { solution }
