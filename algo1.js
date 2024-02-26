const arr1 = [10,14,14,29,37]

const arr2 = [42,35,11,7,29,48,42,50,40,22]

function bblSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j +1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);
}

bblSort(arr1);
bblSort(arr2);