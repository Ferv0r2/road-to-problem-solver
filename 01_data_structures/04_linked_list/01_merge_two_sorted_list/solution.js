// 문제 링크: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * 접근법
 * - 두 리스트의 노드를 비교하여 작은 값을 새로운 리스트에 추가한다.
 * - 두 리스트 중 하나가 null이 될 때까지 반복한다.
 * - 두 리스트 중 하나가 null이 되면 남은 리스트를 새로운 리스트에 추가한다.
 *
 * -> ?? 런타임 측정에 버그가 있나? 0ms로 통과된다.
 * 테스트 1 〉 통과 (0ms, 52.00MB)
 * 테스트 2 〉 통과 (0ms, 52.72MB)
 */
const solution = (list1, list2) => {
  const fakeHead = { next: null }
  let current = fakeHead

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }

  // 남은 리스트를 붙여준다.
  current.next = list1 || list2
  return fakeHead.next
}

module.exports = { solution }
