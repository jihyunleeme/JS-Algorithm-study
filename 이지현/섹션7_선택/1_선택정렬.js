function solution(arr) {
	let index, temp;
	for (let i = 0; i < arr.length; i += 1) {
		index = i // 기준이 되는 index값
		for (let j = i + 1; j < arr.length; j += 1) { // 최소값 찾기
			if (arr[j] < arr[index]) {
				index = j;
			}
		}
		// 바꾸기 (현재 index 위치와 가장 작은 값 바꾸기)
		temp = arr[index]; 
		arr[index] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

  
const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));