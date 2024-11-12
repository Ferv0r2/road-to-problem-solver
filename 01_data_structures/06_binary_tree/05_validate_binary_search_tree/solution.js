// 문제 링크: https://leetcode.com/problems/validate-binary-search-tree/description/

/**
 * 접근법
 * - 이진 탐색 트리가 올바른지 확인하는 문제이다.
 * - 이진 탐색 트리는 왼쪽 서브트리의 모든 노드가 현재 노드보다 작아야 하고,
 * - 오른쪽 서브트리의 모든 노드가 현재 노드보다 커야 한다.
 * - 현재 노드의 값이 최소값과 최대값 사이에 있는지 확인한다.
 * - 왼쪽 서브트리는 최대값을 현재 노드 값으로 갱신하고,
 * - 오른쪽 서브트리는 최소값을 현재 노드 값으로 갱신한다.
 *
 * 테스트 1 〉 통과 (0ms, 53.23MB)
 * 테스트 2 〉 통과 (0ms, 52.22MB)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
function solution(root) {
  function isBST(node, min, max) {
    // 노드가 없으면 true 반환
    if (!node) return true

    // 현재 노드의 값이 최소값과 최대값 사이에 있는지 확인
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max))
      return false

    // 왼쪽 서브트리 -> 최대값 갱신
    // 오른쪽 서브트리 -> 최소값 갱신
    return isBST(node.left, min, node.val) && isBST(node.right, node.val, max)
  }

  // 최소값과 최대값을 null로 초기화하여 루트 노드부터 시작
  return isBST(root, null, null)
}

module.exports = { solution }
