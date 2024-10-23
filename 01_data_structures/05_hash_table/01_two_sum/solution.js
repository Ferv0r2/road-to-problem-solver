// 문제 링크: https://leetcode.com/problems/two-sum/description/

/**
 * Solution 1 - reduce로 접근하기
 * -> (비효율적이며 로컬 테스트에선 정렬 이슈로 실패한다.)
 *
 * 테스트 1 〉 통과 (80ms, 49.25MB)
 * 테스트 2 〉 통과 (80ms, 48.18MB)
 */
const solution1 = (nums, target) => {
  return nums.reduce((acc, num, idx) => {
    // 현재 요소와 target에서 현재 요소를 뺀 값과 index를 구한다.
    const diff = target - num
    const diffIdx = nums.indexOf(diff)

    // 두 수의 합이 target이 되는 경우와 인덱스가 다른 경우
    // 두 수의 인덱스를 배열로 반환한다.
    if (diffIdx !== -1 && diffIdx !== idx) {
      acc = [idx, diffIdx]
    }

    return acc
  }, [])
}

/**
 * Solution 2 - 해시 테이블로 접근하기
 *
 * 테스트 1 〉 통과 (1ms, 50.86MB)
 * 테스트 2 〉 통과 (3ms, 50.93MB)
 */
const solution2 = (nums, target) => {
  const hashTable = {}

  // nums 배열을 순회하면서 target에서 현재 요소를 뺀 값을 해시 테이블에 저장한다.
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]

    // 두 수의 합이 target이 되는 경우 -> 해시 테이블에 현재 요소가 있다는 것
    if (hashTable[diff] !== undefined) {
      // 두 수의 인덱스를 배열로 반환한다.
      return [hashTable[diff], i]
    }

    // 현재 요소를 해시 테이블에 저장한다.
    hashTable[nums[i]] = i
  }

  return []
}

module.exports = { solution1, solution2 }
