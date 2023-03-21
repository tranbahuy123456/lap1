// hàm sort
function sortArr<T>(arr: T[], callback: (a: T, b: T) => number):T[] {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (callback(arr[i], arr[j]) > 0) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        if (callback(arr[j], arr[i]) < 0) {
          const temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  }
  
  const numberArr: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const stringArr = ["long", "ha", "fdfdfdg"];
  const sortedNumbersArr = sortArr(numberArr, (a, b) => b - a);
  const sortStringArr = sortArr(stringArr, (a, b) => b.localeCompare(a));
  console.log(sortStringArr);