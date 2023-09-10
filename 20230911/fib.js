// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

function solution(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    [a, b] = [b, (a + b) % 1234567];
  }

  return a;
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
