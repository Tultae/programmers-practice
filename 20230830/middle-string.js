// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.substring(middle - 1, middle + 1) : s[middle];
}

console.log(solution('abcde')); // "c"
console.log(solution('qwer')); // "we"