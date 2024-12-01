// 문제 링크: https://leetcode.com/problems/flood-fill/

/**
 * 접근법: DFS
 * - 시작 좌표의 색상을 변경하고 상하좌우로 탐색하며 같은 색상을 가진 좌표를 찾아 색상을 변경한다.
 *   - 예외 1) 시작 좌표의 색상과 변경할 색상이 같은 경우
 *   - 예외 2) 이미 방문한 경우
 * - DFS 함수를 만들어 상하좌우로 탐색하며 색상을 변경한다.
 *
 * 테스트 1 〉 통과 (0ms, 53.23MB)
 * 테스트 2 〉 통과 (0ms, 53.91MB)
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function solution(image, sr, sc, color) {
  const originalColor = image[sr][sc]

  // 원래 색상과 변경할 색상이 같다면 작업이 필요하지 않다.
  if (originalColor === color) return image

  const dfs = (row, col) => {
    // 경계를 벗어나거나 색상이 다르면 종료한다.
    if (
      row < 0 ||
      col < 0 ||
      row >= image.length ||
      col >= image[0].length ||
      image[row][col] !== originalColor
    ) {
      return
    }

    // 색상을 변경한다.
    image[row][col] = color

    // 상하좌우로 탐색한다.
    dfs(row - 1, col) // 위
    dfs(row + 1, col) // 아래
    dfs(row, col - 1) // 왼쪽
    dfs(row, col + 1) // 오른쪽
  }

  // 시작 좌표에서 DFS 실행한다.
  dfs(sr, sc)

  return image
}
module.exports = { solution }
