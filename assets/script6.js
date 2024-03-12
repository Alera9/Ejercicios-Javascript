/**
 * Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
 */

const  bubbleSort = (nums) =>{
    const arr = [];
    nums.forEach(element => {
        arr.push(element*1);
    });
    console.log(arr.length);
    let swapped = false;
    for (let i = arr.length; i > 0; i--) {
      swapped = true;
      for (let j = 0; j < i-1; j++) {
        if (arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
          swapped = false;
        }
      }
      if(swapped) break;
    }
    return arr;
  }
 
printSolution("six",bubbleSort);
//  console.log(bubbleSort([3, 6, 12, 5, 100, 1 ]));