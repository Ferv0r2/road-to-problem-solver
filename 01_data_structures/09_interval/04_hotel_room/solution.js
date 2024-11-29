// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/155651

/**
 * 접근법
 * - 예약 시간을 시작 시간 기준으로 정렬한다.
 * - 각 예약 시간을 순회하며 시작 시간에 이용 가능한 방이 있는지 확인한다.
 *    - 방이 비어 있으면 해당 방에 예약 종료 시간을 업데이트한다.
 *    - 방이 없으면 새 방을 추가한다.
 * - 방의 개수를 반환한다.
 *
 * 테스트 1 〉통과 (0.25ms, 33.5MB)
 * 테스트 2 〉통과 (1.18ms, 33.7MB)
 */

function solution(book_time) {
  const times = []
  book_time.sort().forEach(([start, end]) => {
    const startTime = toMinute(start)

    // 종료 시간 + 10분(청소 시간)
    const endTime = toMinute(end) + 10

    // 시작 시간이 times 배열에 없다면, 종료 시간을 추가
    const idx = times.findIndex((time) => time <= startTime)

    // 이용 가능한 방이 없으면 새 방 추가
    if (idx === -1) return times.push(endTime)

    // 이용 가능한 방이 있으면 해당 방에 종료 시간 업데이트
    times[idx] = endTime
  })

  return times.length
}

function toMinute(str) {
  const [hour, minute] = str.split(':')
  return hour * 60 + Number(minute)
}

module.exports = { solution }
