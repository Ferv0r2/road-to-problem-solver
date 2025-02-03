// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

/**
 * 접근법: DFS
 * - 한 번 방문한 노드는 다시 방문하지 않도록 visited 배열을 만들어 체크한다.
 *
 * 테스트 1 〉 통과 (0.21ms, 33.4MB)
 * 테스트 2 〉 통과 (0.15ms, 33.5MB)
 */
/**
 * @param {number} n
 * @param {number[][]} computers
 * @return {number}
 */
function solution(n, computers) {
  let count = 0
  const visited = new Set()

  const dfs = (node) => {
    visited.add(node)
    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited.has(i)) {
        dfs(i)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i)
      count++
    }
  }

  return count
}
module.exports = { solution }
