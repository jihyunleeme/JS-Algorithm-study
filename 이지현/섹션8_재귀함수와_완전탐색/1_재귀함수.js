function solution(NUM) {
  let value = 0;
  function recursion(value) {
    console.log(++value);
    if (value === NUM) {
      return;
    }
    recursion(value);
  }
  recursion(value);
}

const NUM = 3;
console.log(solution(NUM));