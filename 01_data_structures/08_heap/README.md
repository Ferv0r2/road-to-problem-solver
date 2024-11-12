# [힙](https://www.algodale.com/data-structures/heap/)

## 정의

- 힙(Heap)은 **이진 트리** 기반의 자료 구조로, "최댓값" 또는 "최솟값"을 빠르게 찾기 위해 설계된 트리 구조입니다.
- 힙의 종류
  - 최대 힙 (Max Heap):
    - 각 부모 노드가 자식 노드보다 크거나 같은 값을 가집니다. 즉, 루트 노드에는 트리의 최댓값이 위치합니다.
  - 최소 힙 (Min Heap):
    - 각 부모 노드가 자식 노드보다 작거나 같은 값을 가집니다. 즉, 루트 노드에는 트리의 최솟값이 위치합니다.
- 힙의 특성
  - 완전 이진 트리:
    - 힙은 "완전 이진 트리"로, 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져야 하며, 마지막 레벨은 왼쪽에서 오른쪽 순서대로 채워져야 합니다.
  - 힙 속성:
    - 각 부모 노드가 자식 노드들에 대해 특정한 순서를 유지합니다.
    - 최대 힙에서는 부모 노드가 자식보다 크거나 같아야 하고, 최소 힙에서는 부모 노드가 자식보다 작거나 같아야 합니다.
- 힙의 시간 복잡도
  - 삽입과 삭제는 `O(log n)`
  - 최대/최솟값 조회는 `O(1)`

## 문제

1. [LeetCode - Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/description/)
2. [LeetCode - Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description/)
3. [LeetCode - Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/description/)
4. [LeetCode - Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/description/) - Premium 문제
