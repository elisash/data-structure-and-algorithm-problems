//You are given an array of student objects, each containing name and age properties. 
//Sort the array of students in ascending order based on their ages using the bubble sort algorithm.

function bubbleSortByAge(students) {
  const n = students.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (students[j].age > students[j + 1].age) {
        [students[j], students[j + 1]] = [students[j + 1], students[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return students;
}



// function bubbleSort(arr) {
//   const n = arr.length;
//   let swapped;

//   do {
//     swapped = false;
//     for (let i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         // Swap elements using destructuring assignment
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);

//   return arr;
// }
