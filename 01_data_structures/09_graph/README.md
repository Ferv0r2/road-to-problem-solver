# [그래프](https://www.algodale.com/data-structures/graph/)

## 정의

- 그래프(Graph)는 **노드(Node)**와 **간선(Edge)**으로 구성된 자료 구조로, 데이터의 관계를 나타내는 데 사용됩니다.
- 그래프의 종류
  - 무방향 그래프 (Undirected Graph):
    - 간선이 양방향으로 연결된 그래프입니다. 간선 `(u, v)`는 노드 `u`와 `v`를 상호 연결합니다.
  - 방향 그래프 (Directed Graph):
    - 간선이 특정 방향으로만 연결된 그래프입니다. 간선 `(u, v)`는 노드 `u`에서 `v`로만 연결됩니다.
  - 가중치 4그래프 (Weighted Graph):
    - 간선에 가중치가 부여된 그래프입니다. 가중치는 두 노드 간의 거리나 비용 등을 나타냅니다.
  - 비가중치 그래프 (Unweighted Graph):
    - 간선에 가중치가 없는 그래프입니다.
- 그래프의 특성
  - 인접 리스트 (Adjacency List):
    - 각 노드에 연결된 다른 노드의 목록을 저장합니다.
    - 메모리 효율적이며, 노드 연결 관계를 쉽게 확인할 수 있습니다.
- 인접 행렬 (Adjacency Matrix):
  - 노드 간의 연결 상태를 2차원 배열로 나타냅니다.
  - 특정 간선의 존재 여부를 빠르게 확인할 수 있지만, 메모리 소모가 큽니다.
- 그래프의 용도
  - 탐색 알고리즘: `DFS`, `BFS`
  - 최단 경로 알고리즘: 다익스트라, 벨만-포드
  - 최소 신장 트리: 크루스칼, 프림
  - 위상 정렬: 방향 비순환 그래프(`DAG`)에서 수행

## 문제

1. [LeetCode - Flood Fill](https://leetcode.com/problems/flood-fill/description/)
2. [LeetCode - Clone Graph](https://leetcode.com/problems/clone-graph/description/)
3. [프로그래머스 - 네트워크](https://school.programmers.co.kr/learn/courses/30/lessons/43162?language=javascript)
4. [LeetCode - Number of Connected Components In An Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/) - Premium 문제
5. [LeetCode - Number of Islands](https://leetcode.com/problems/number-of-islands/description/)
6. [LeetCode - 01 Matrix](https://leetcode.com/problems/01-matrix/description/)
7. [LeetCode - Course Schedule](https://leetcode.com/problems/course-schedule/description/)
