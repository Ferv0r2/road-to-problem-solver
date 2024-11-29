// 문제 링크: https://leetcode.com/problems/kth-largest-element-in-an-array/description/

/**
 * 접근법 (이것을 원한 것이 아닐터... 그런데 통과는 시켜준다.)
 * -> Can you solve it without sorting?
 *
 * - 배열을 내림차순으로 정렬한다. (최대 힙)
 * - 이때, 0-based index이므로 k-1번째 요소를 반환한다.
 *
 * 테스트 1 〉통과 (88ms, 58.44MB)
 * 테스트 2 〉통과 (86ms, 58.46MB)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function solution1(nums, k) {
  // 배열을 내림차순으로 정렬
  nums.sort((a, b) => b - a)

  // k-1번째 요소 반환 (0-based index이므로 k-1)
  return nums[k - 1]
}

/**
 * 접근법
 *
 * - nums 배열에서 k개의 요소만 순회한다.
 * - k개의 요소를 k_largest 배열로 설정한다.
 * - nums 배열의 나머지 요소들을 순회한다.
 * - 현재 요소가 k_largest 배열의 최솟값보다 큰 경우, 대체한다.
 * - k_largest 배열의 최솟값을 반환한다.
 *
 * 테스트 1 〉실패 (Time Limit Exceeded)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function solution2(nums, k) {
  // 초기 k개의 요소를 k_largest 배열로 설정한다.
  const kLargest = nums.slice(0, k)

  // nums 배열의 나머지 요소들을 순회한다.
  for (let i = k; i < nums.length; i++) {
    const num = nums[i]
    const smallest = Math.min(...kLargest)

    // 현재 요소가 k_largest 배열의 최솟값보다 큰 경우, 대체
    if (num > smallest) {
      const index = kLargest.indexOf(smallest)
      kLargest.splice(index, 1) // 최솟값을 제거
      kLargest.push(num) // 새로운 요소 추가
    }
  }

  // k_largest 배열의 최솟값 반환
  return Math.min(...kLargest)
}

/**
 * 접근법 -> 결국 풀이를 찾아보았다 ㅜ
 *
 * - k번째로 큰 요소를 찾기 위해 Min-Heap을 활용합니다.
 * - Min-Heap의 크기를 항상 k로 유지하면서, k번째로 큰 값이 루트에 위치하도록 합니다.
 * - 입력 배열의 모든 요소를 순회한다.
 *   - Min-Heap의 크기가 k보다 작으면 요소를 삽입한다.
 *   - Min-Heap의 크기가 k 이상이고 새로운 요소가 Min-Heap의 루트(최소값)보다 크면, 루트를 제거하고 새로운 요소를 삽입한다.
 * - 순회를 완료하면 Min-Heap의 루트에 k번째로 큰 값이 남는다.
 *
 * 테스트 1 〉통과 (38ms, 67.40MB)
 * 테스트 2 〉통과 (46ms, 67.40MB)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function solution3(nums, k) {
  const heap = []

  const heappush = (num) => {
    // 새로운 요소를 배열 끝에 추가
    heap.push(num)
    // 삽입된 요소의 인덱스
    let i = heap.length - 1

    // 부모와 비교하여 Min-Heap 조건을 만족할 때까지 스왑한다.
    while (i > 0) {
      // 부모의 인덱스를 구한다.
      const parent = Math.floor((i - 1) / 2)

      // 부모가 자식보다 작거나 같으면 종료한다.
      if (heap[parent] <= heap[i])
        break

        // 부모와 자식을 스왑하고 인덱스를 부모로 이동한다.
      ;[heap[parent], heap[i]] = [heap[i], heap[parent]]
      i = parent
    }
  }

  const heappop = () => {
    // 루트 요소 저장한다.
    const root = heap[0]
    // 마지막 요소를 가져온다.
    const last = heap.pop()

    if (heap.length > 0) {
      heap[0] = last // 마지막 요소를 루트로 이동
      let i = 0 // 현재 인덱스
      // 자식들과 비교하여 Min-Heap 조건을 만족할 때까지 스왑
      while (true) {
        // 왼쪽, 오른쪽 자식의 인덱스를 스왑한다.
        const left = 2 * i + 1
        const right = 2 * i + 2

        // 현재 인덱스를 가장 작은 값으로 설정
        let smallest = i

        // 왼쪽 자식이 존재하고, 현재 값보다 작으면 갱신한다.
        if (left < heap.length && heap[left] < heap[smallest]) {
          smallest = left
        }
        // 오른쪽 자식이 존재하고, 갱신된 값보다 작으면 갱신한다.
        if (right < heap.length && heap[right] < heap[smallest]) {
          smallest = right
        }
        if (smallest === i)
          break // 현재 값이 가장 작으면 종료한다.
        ;[heap[i], heap[smallest]] = [heap[smallest], heap[i]] // 스왑한다.
        i = smallest // 인덱스를 자식으로 이동한다.
      }
    }

    // 제거된 루트를 반환한다.
    return root
  }

  for (const num of nums) {
    if (heap.length < k) {
      heappush(num)
    } else if (num > heap[0]) {
      heappop()
      heappush(num)
    }
  }

  return heap[0]
}

module.exports = { solution1, solution2, solution3 }
