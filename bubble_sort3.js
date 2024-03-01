const array = [34,65,2,1,7,8,4,9,0,12,4,19,10]

function bubbleSort(arr){
    for (let i = 0; i <arr.length; i++){
        for (let j = i+1; j < arr.length-1; j++){
            if(arr[j] < arr[i]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

bubbleSort(array);