let arr = [1, 3, 2, 5, 8, 9, 13, 12, 15, 9];
let arr2 = [5,3,6,2,99,2,3]
let index = 0;
function findMax(arr1) {
    let max = arr1[0];
    for (let i = 1; i < arr1.length; i++) {
        if (max < arr1[i]) {
            max = arr1[i]
            index = i
        }
    }
    document.write("số lớn nhất là " + max + " vi trí của nó là " + index)
   }
findMax(arr2);
document.write("<br>");
findMax(arr);