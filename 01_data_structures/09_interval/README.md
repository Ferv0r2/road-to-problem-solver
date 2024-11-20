# [구간](https://www.algodale.com/data-structures/interval/)

## 정의

- 간은 연속된 값들의 범위를 표현하는 자료 구조나 개념으로, 주로 시작점과 끝점을 통해 정의됩니다.
- 이 구간을 다루는 문제는 구간의 정렬, 병합, 겹침 여부 등의 연산을 포함합니다.
- 구간의 종류
  - 닫힌 구간 [a, b]:
    - 시작점 a와 끝점 b가 구간에 포함됩니다.
  - 열린 구간 (a, b):
    - 시작점 a와 끝점 b가 구간에 포함되지 않습니다.
  - 혼합 구간 [a, b) 또는 (a, b]:
    - 시작점 또는 끝점 중 하나만 구간에 포함됩니다.
- 구간의 특성
  - 구간 병합:
    - 겹치는 구간들을 하나로 합칩니다. 예: [1, 3]과 [2, 5] → [1, 5]
  - 구간 분할:
    - 하나의 구간을 여러 개로 나눕니다. 예: [1, 5] → [1, 3], [3, 5]
- 구간 정렬:
  - 구간의 시작점이나 끝점을 기준으로 정렬합니다.
- 구간의 시간 복잡도
  - 정렬: `O(n log n)` (구간의 시작점 기준으로 정렬)
  - 병합: `O(n)` (정렬된 구간 리스트에서 병합 수행)

## 문제

1. [LeetCode - Meeting Rooms](https://leetcode.com/problems/meeting-rooms/description/) - Premium 문제
2. [LeetCode - Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)
3. [LeetCode - Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/description/)
4. [프로그래머스 - 호텔 대실](https://school.programmers.co.kr/learn/courses/30/lessons/155651)
