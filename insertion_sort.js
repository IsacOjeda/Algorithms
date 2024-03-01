const array = [43,67,2,1,5,8,9,3,7,15,79,43,432,23,63,783,3,6,2234,343,53453]
 
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0; j--){
            if (arr[j] < arr[j-1] ){
                const temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }else{
                break;
            }
        }
    }
    console.log(arr);
}

insertionSort(array);